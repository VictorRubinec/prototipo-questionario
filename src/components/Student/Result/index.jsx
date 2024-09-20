import React from 'react';
import { style } from './style.js';
import { Box, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import supabase from '../../../config/client.js';

function Result() {
  const { id } = useParams();
  const [examResults, setExamResults] = React.useState({});
  const [questionsResults, setQuestionsResults] = React.useState([]);

  React.useEffect(() => {
    const fetchExamResults = async () => {
      const { data, error } = await supabase
        .from('v_resultado_aluno')
        .select('*')
        .eq('id_aluno', id)
        .single();

      if (error) {
        console.log('Error fetching exam results:', error);
      } else {
        setExamResults(data);
      }
    };

    fetchExamResults();
  }, [id]);

  React.useEffect(() => {
    const fetchQuestionResults = async () => {
      const { data, error } = await supabase
        .from('v_perguntas_respostas')
        .select('*')
        .eq('id_aluno', id);

      if (error) {
        console.log('Error fetching question results:', error);
      } else {
        setQuestionsResults(data);
      }
    };

    fetchQuestionResults();
  }, [id]);

  const totalQuestions = questionsResults.length;
  const correctAnswers = questionsResults.filter((question) => question.acerto_percentual === 1.00).length;

  const formatResult = examResults.nota_obtida ? examResults.nota_obtida.toFixed(2) : 0;

  return (
    <Box sx={style().page}>
      <Box sx={style().examHeader}>
        <Typography sx={style().examTitle}>{examResults.questionario_titulo}</Typography>
      </Box>
      <TableContainer component={Paper} sx={style().tableContainer}>
        <Table sx={style().table}>
          <TableHead>
            <TableRow sx={style().tableHeadRow}>
              <TableCell sx={style().tableHeadCell}>Pergunta</TableCell>
              <TableCell sx={style().tableHeadCell}>Acerto (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questionsResults.map((question, index) => (
              <TableRow key={index} sx={style().questionRow(question.acerto_percentual)}>
                <TableCell>Pergunta {index + 1}</TableCell>
                <TableCell>{question.acerto_percentual.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={style().examResult}>
        <Typography sx={style().examResultText}>
          Você acertou {correctAnswers} de {totalQuestions} questões.
        </Typography>
        <Typography sx={style().examResultText}>
          Sua nota final foi {formatResult} de 10.00
        </Typography>
      </Box>
    </Box>
  );
}

export default Result;
