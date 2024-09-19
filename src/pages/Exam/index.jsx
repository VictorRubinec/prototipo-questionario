import React from 'react';
import { useParams } from 'react-router-dom';
import { style } from './style.js';

import Estructure from '../../components/Global/Estructure/index.jsx';
import Start from '../../components/Student/Start/index.jsx';
import Questions from '../../components/Student/Questions/index.jsx';
import Result from '../../components/Student/Result/index.jsx';

function Exam() {
  const { id, question } = useParams();

  // Função para abrir uma nova janela
  const openNewWindow = () => {
    const url = 'http://localhost:3000/exam/1/questions';

    const newWindow = window.open(
      url,
      '_blank',
      `resizable,scrollbars=yes,noopener,noreferrer`
    );

    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const userPermissionsInfo = sessionStorage.getItem('permissions');

  switch (question) {
    case "start":
      return (
        <Estructure userPermissionsInfo={userPermissionsInfo}>
          <Start />
        </Estructure>
      );

    case "questions":
      return (
        <Questions />
      );

    case "result":
      return (
        <Estructure userPermissionsInfo={userPermissionsInfo}>
          <Result />
        </Estructure>
      );
  }
}

export default Exam;
