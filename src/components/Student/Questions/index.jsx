import React from 'react';
import { style } from './style.js';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import supabase from '../../../config/client.js';
import Question from '../Question/index.jsx';

function Questions() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [questions, setQuestions] = React.useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [isExamActive, setIsExamActive] = React.useState(true);

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
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
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
    <Box sx={style().page}>
      <Box sx={style().question}>
        {questions.length > 0 && (
          <Question key={questions[currentQuestionIndex].id_pergunta} questionProps={questions[currentQuestionIndex]} />
        )}
      </Box>
      <Box sx={style().examInfo}>
        <Typography variant="h6">{tituloExam}</Typography>
        <Box sx={style().listQuestions}>
          {questions.map((question, index) => (
            <IconButton
              key={question.id_pergunta}
              onClick={() => setCurrentQuestionIndex(index)}
              disabled={index === currentQuestionIndex}
              sx={style().questionButton}
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
    </Box>
  );
}

export default Questions;
