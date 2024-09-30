import React from 'react';
import { style } from './style.js';
import { Box, Button, Typography, Divider, Modal } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import supabase from '../../../../config/client.js';

function Start() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('v_info_questionario')
        .select('*')
        .eq('id_questionario', id);
      if (error) {
        console.log(error);
      }

      const padZero = (num) => (num < 10 ? `0${num}` : num);

      const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const day = padZero(date.getDate());
        const month = padZero(date.getMonth() + 1);
        const year = date.getFullYear();
        const hours = padZero(date.getHours());
        const minutes = padZero(date.getMinutes());
        const seconds = padZero(date.getSeconds());

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
      };

      const formatDuration = (ms) => {
        const horas = Math.floor(ms / (1000 * 60 * 60));
        const minutos = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

        let duration = '';

        if (horas > 0) {
          duration += `${horas} hora${horas > 1 ? 's' : ''}`;
        }

        if (minutos > 0) {
          if (duration) {
            duration += ' e ';
          }
          duration += `${minutos} minuto${minutos > 1 ? 's' : ''}`;
        }

        return duration || '0 minutos';
      };

      if (data && data.length > 0) {

        const inicio = new Date(data[0].data_inicio_questionario);
        const fim = new Date(data[0].data_fim_questionario);
        const tempoProvaMs = fim - inicio;

        data[0].tempo_prova = formatDuration(tempoProvaMs);

        data[0].data_inicio_questionario = formatDate(data[0].data_inicio_questionario);
        data[0].data_fim_questionario = formatDate(data[0].data_fim_questionario);

        setExam(data[0]);
      }
    }
    fetchData();
  }, [id]);

  const handleModal = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
  }

  const regras = [
    "O questionário deve ser feito individualmente.",
    "Não é permitido consultar materiais de estudo durante a prova.",
    "Não é permitido o uso de outro dispositivo eletrônico durante a prova, como celular, tablet, etc.",
    "Não é permitido fones de ouvido.",
    "Ao iniciar a prova, você não poderá pausar o tempo.",
    "Ao iniciar a prova, outra aba do navegador será aberta automaticamente. Fechar essa aba finalizará a prova.",
    `Você terá ${exam.tempo_prova} para responder todas as questões.`
  ];

  const [open, setOpen] = React.useState(false);

  const handleStart = () => {
    navigate(`/exam/${id}/questions`);
  }

  return (
    <>
      <Box sx={style().headerBox}>
        <Typography sx={style().titulo}>
          {exam.titulo_questionario}
        </Typography>
      </Box>
      <Divider sx={style().divider} />

      <Box sx={style().body}>
        <Box sx={style().infoBox}>
          <Typography sx={style().info}><b>Turma: </b>{exam.nome_turma}</Typography>
          <Typography sx={style().infoDesc}><b></b>{exam.descricao_questionario}</Typography>
        </Box>

        <Box sx={style().dataBox}>
          <Box sx={style().dataSegment}>
            <Typography sx={style().info}><b>Início:</b> </Typography>
            <Typography sx={style().info}>
              {exam.data_inicio_questionario}
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          <Box sx={style().dataSegment}>
            <Typography sx={style().info}><b>Fim:</b> </Typography>
            <Typography sx={style().info}>
              {exam.data_fim_questionario}
            </Typography>
          </Box>
        </Box>

        <Box sx={style().rulesBox}>
          <Typography sx={style().rulesTitle}><b>Regras:</b></Typography>
          <Box>
            {regras.map((regra, index) => (
              <Typography key={index} sx={style().rulesContent}>
                <li>{regra}</li>
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={style().boxButton}>
          <Button variant="contained" color="primary" sx={style().botao} onClick={handleModal}>
            Iniciar
          </Button>
        </Box>
      </Box>

      <Modal open={open} onClose={onClose}>
        <Box sx={style().modal}>
          <Typography variant="h6" sx={style().modalTitle}>
            Iniciar Questionário
          </Typography>
          <Typography sx={style().modalText}>
            Ao clicar em "Confirmar", você será redirecionado para uma nova aba onde o questionário será iniciado, sair dessa aba finalizará a prova.
          </Typography>
          <Box sx={style().modalButtonBox}>
            <Button
              variant="contained"
              color="primary"
              sx={style().modalButton}
              onClick={handleStart}
            >
              Confirmar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default Start;
