import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { style } from './style.js';

import { Box, Button, Typography, IconButton, Modal } from '@mui/material';

import Question from '../Question/index.jsx';

import supabase from '../../../../config/client.js';

function Questions() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [questions, setQuestions] = React.useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [isExamActive, setIsExamActive] = React.useState(true);
  const [answers, setAnswers] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('v_perguntas_questionario')
        .select('*')
        .eq('id_questionario', id);
      if (error) {
        console.log(error);
      }
      setQuestions(data);
    }
    fetchData();
  }, [id]);

  const tituloExam = questions[0]?.titulo_questionario;

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsExamActive(false);
      }
    };

    const handleBlur = () => {
      setIsExamActive(false);
    };

    const handleFocus = () => {
      if (!isExamActive) {
        setIsExamActive(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, [isExamActive]);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      saveAnswer(questions[currentQuestionIndex].id_pergunta, answers.find(ans => ans.id_pergunta === questions[currentQuestionIndex].id_pergunta)?.resposta || '');
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      saveAnswer(questions[currentQuestionIndex].id_pergunta, answers.find(ans => ans.id_pergunta === questions[currentQuestionIndex].id_pergunta)?.resposta || '');
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const saveAnswer = (id_pergunta, resposta) => {
    setAnswers((prevAnswers) => {
      const existingAnswerIndex = prevAnswers.findIndex(answer => answer.id_pergunta === id_pergunta);
      if (existingAnswerIndex > -1) {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex].resposta = resposta;
        return updatedAnswers;
      }
      return [...prevAnswers, { id_pergunta, resposta }];
    });
  };

  const isAnswered = (id_pergunta) => {
    const answer = answers.find(ans => ans.id_pergunta === id_pergunta);
    return answer && answer.resposta !== '';
  };

  const [open, setOpen] = React.useState(false);

  const handleModal = () => {
    setOpen(true);
  }

  const correctAnswer = async (id_pergunta, resposta) => {
    const { data, error } = await supabase
      .from('v_verificacao_respostas')
      .select('*')
      .eq('id_pergunta', id_pergunta);

    if (error) {
      console.log(error);
      return 0;
    }

    let correctCount = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].correta && data[i].alternativa === resposta && data[i].correta === true) {
        correctCount += 1;
      }
    }

    return correctCount / data.length;
  };

  const verificarVazias = () => {
    let verifyAnswers = [...answers];

    for (let i = 0; i < questions.length; i++) {
      if (!isAnswered(questions[i].id_pergunta)) {
        verifyAnswers.push({ id_pergunta: questions[i].id_pergunta, resposta: '' });
      }
    }

    return verifyAnswers;
  };

  const finalizarProva = async () => {
    saveAnswer(questions[currentQuestionIndex].id_pergunta, answers.find(ans => ans.id_pergunta === questions[currentQuestionIndex].id_pergunta)?.resposta || '');

    const verifyAnswers = verificarVazias();
    const currentTimestamp = new Date().toISOString();

    for (let i = 0; i < verifyAnswers.length; i++) {
      const correct = await correctAnswer(verifyAnswers[i].id_pergunta, verifyAnswers[i].resposta);

      const { error } = await supabase
        .from('respostas_aluno')
        .insert([
          {
            id_aluno: JSON.parse(sessionStorage.getItem('user')).id,
            id_pergunta: verifyAnswers[i].id_pergunta,
            resposta: verifyAnswers[i].resposta,
            acerto: correct,
            data_cadastro: currentTimestamp,
          },
        ]);

      if (error) {
        console.log(error);
        return;
      }
    }

    const { data, error: resultError } = await supabase
      .from('v_informacoes_resultados')
      .select('*')
      .eq('id_questionario', id)
      .eq('id_aluno', JSON.parse(sessionStorage.getItem('user')).id);

    if (resultError) {
      console.log(resultError);
      return;
    } else {
      console.log(data);
    }

    const { error: insertResultError } = await supabase
      .from('resultados_aluno')
      .insert([
        {
          id_aluno: data[0].id_aluno,
          id_turma: data[0].id_turma,
          id_questionario: data[0].id_questionario,
          nota: data[0].nota,
          data_cadastro: currentTimestamp,
        },
      ]);

    if (insertResultError) {
      console.log(insertResultError);
    }

    navigate(`/exam/${id}/result`);
  };

  // if (!isExamActive) {
  //   return (
  //     <Box sx={style().page}>
  //       <Typography variant="h4" color="error">
  //         Prova finalizada. Você saiu da tela.
  //       </Typography>
  //     </Box>
  //   );
  // }

  return (
    <>
      <Box sx={style().page}>
        <Box sx={style().question}>
          {questions.length > 0 && (
            <Question
              key={questions[currentQuestionIndex].id_pergunta}
              questionProps={questions[currentQuestionIndex]}
              answersState={{ answers, setAnswers: saveAnswer }} // Passa função de salvar resposta
            />
          )}
        </Box>
        <Box sx={style().examInfo}>
          <Typography sx={style().examTitle}>{tituloExam}</Typography>
          <Box sx={style().examInfoContent}>
            <Box sx={style().listQuestions}>
              {questions.map((question, index) => (
                <IconButton
                  key={question.id_pergunta}
                  onClick={() => {
                    saveAnswer(questions[currentQuestionIndex].id_pergunta, answers.find(ans => ans.id_pergunta === questions[currentQuestionIndex].id_pergunta)?.resposta || '');
                    setCurrentQuestionIndex(index);
                  }}
                  disabled={index === currentQuestionIndex}
                  sx={{
                    ...style().questionButton
                  }}
                >
                  {index + 1}
                </IconButton>
              ))}
            </Box>
            <Box sx={style().buttons}>
              <Button
                onClick={previousQuestion}
                disabled={currentQuestionIndex === 0}
                sx={style().button}
              >
                Anterior
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
                sx={style().button}
              >
                Próxima
              </Button>
            </Box>
          </Box>
          <Box sx={style().buttonFooter}>
            <Button
              onClick={handleModal}
              sx={style().finalizeButton}
            >
              Finalizar
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={style().modalContainer}
      >
        <Box sx={style().modal}>
          <Typography variant="h6" component="h2">
            Deseja realmente finalizar a prova?
          </Typography>
          <Box sx={style().modalButtons}>
            <Button
              onClick={finalizarProva}
              sx={style().modalButton}
            >
              Sim
            </Button>
            <Button
              onClick={() => setOpen(false)}
              sx={style().modalButton}
            >
              Não
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Questions;
