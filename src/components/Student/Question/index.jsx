import React from 'react';
import { style } from './style.js';
import { Box, Checkbox, RadioGroup, Radio, TextField, Typography, Divider } from '@mui/material';
import supabase from '../../../config/client.js';

function Question({ questionProps, answersState }) {
  const [alternatives, setAlternatives] = React.useState([]);
  const { answers, setAnswers } = answersState;

  React.useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('v_alternativas_pergunta')
        .select('*')
        .eq('id_pergunta', questionProps.id_pergunta);
      if (error) {
        console.log(error);
      } else {
        setAlternatives(data);
      }
    }
    fetchData();
  }, [questionProps.id_pergunta]);

  const handleChange = (event) => {
    const value = event.target.value;

    if (questionProps.tipo === 'checkbox') {
      const savedAnswer = getSavedAnswer();
      const newAnswer = savedAnswer.includes(value)
        ? savedAnswer.filter((ans) => ans !== value)
        : [...savedAnswer, value];
      setAnswers(questionProps.id_pergunta, newAnswer);
    } else {
      setAnswers(questionProps.id_pergunta, value);
    }
  };

  const getSavedAnswer = () => {
    const answerObj = answers.find(ans => ans.id_pergunta === questionProps.id_pergunta);
    return answerObj ? answerObj.resposta : [];
  };

  const questionBody = () => {
    const savedAnswer = getSavedAnswer();

    switch (questionProps.tipo) {
      case 'checkbox':

        const checkedState = Array(alternatives.length).fill(false);

        if (savedAnswer) {
          alternatives.forEach((alternative) => {
            for (let i = 0; i < savedAnswer.length; i++) {
              if (alternative.id_alternativa == savedAnswer[i]) {
                checkedState[alternative.id_alternativa - 1] = true;
              }
            }
          });
        }

        return (
          <Box sx={style().question}>
            <Typography sx={style().questionTitle}>{questionProps.titulo_pergunta}</Typography>
            <Divider sx={style().divider} />
            <Typography sx={style().questionText}>{questionProps.pergunta}</Typography>
            <Box sx={style().alternatives}>
              {alternatives.map((alternative) => (
                <Box key={alternative.id_alternativa} sx={style().alternative}>
                  <Checkbox
                    sx={style().checkbox}
                    onChange={handleChange}
                    value={alternative.id_alternativa}
                    checked={checkedState[alternative.id_alternativa - 1]}
                  />
                  <Typography sx={style().alternativeText}>
                    {alternative.alternativa}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        );

      case 'radio':
        return (
          <Box sx={style().question}>
            <Typography sx={style().questionTitle}>{questionProps.titulo_pergunta}</Typography>
            <Divider sx={style().divider} />
            <Typography sx={style().questionText}>{questionProps.pergunta}</Typography>
            <RadioGroup sx={style().alternatives} value={savedAnswer} onChange={handleChange}>
              {alternatives.map((alternative) => (
                <Box key={alternative.id_alternativa} sx={style().alternative}>
                  <Radio
                    sx={style().radio}
                    value={alternative.id_alternativa}
                  />
                  <Typography sx={style().alternativeText}>
                    {alternative.alternativa}
                  </Typography>
                </Box>
              ))}
            </RadioGroup>
          </Box>
        );

      case 'textComplete':
        const resultado = questionProps.pergunta.split(/(_____|____)/).filter(Boolean);
        const responseComponents = resultado.map((part, i) => {
          if (part === '_____') {
            return (
              <TextField
                key={i}
                sx={style().textFieldComplete}
                onChange={(e) => handleChange(e)}
                defaultValue={savedAnswer[i] || ''}
                variant="standard"
              />
            );
          }
          return (
            <Typography sx={style().questionText} key={i}>{part}</Typography>
          );
        });

        return (
          <Box sx={style().question}>
            <Typography sx={style().questionTitle}>{questionProps.titulo_pergunta}</Typography>
            <Divider sx={style().divider} />
            <Box sx={style().textBox}>
              {responseComponents}
            </Box>
          </Box>
        );

      case 'text':
        return (
          <Box sx={style().question}>
            <Typography sx={style().questionTitle}>{questionProps.titulo_pergunta}</Typography>
            <Divider sx={style().divider} />
            <Typography sx={style().questionText}>{questionProps.pergunta}</Typography>
            <Box sx={style().textBox}>
              <Typography sx={style().questionText}>Resposta:</Typography>
              <TextField
                sx={style().textFieldResponse}
                onChange={handleChange}
                defaultValue={savedAnswer}
                variant="standard"
              />
            </Box>
          </Box>
        );

      default:
        return <Typography>Questão não identificada</Typography>;
    }
  };

  return (
    <Box sx={style().page}>
      {questionBody()}
    </Box>
  );
}

export default Question;
