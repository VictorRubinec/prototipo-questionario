import React from 'react';
import { useParams } from 'react-router-dom';
import { style } from './style.js';

import Estructure from '../../components/Global/Estructure/index.jsx';
import Start from '../../components/Student/Start/index.jsx';
import Questions from '../../components/Student/Questions/index.jsx';
import End from '../../components/Student/End/index.jsx';
import Result from '../../components/Student/Result/index.jsx';

function Exam() {
  const { id, question } = useParams();

  // Função para abrir uma nova janela
  const openNewWindow = () => {
    const url = 'http://localhost:3000/student/exam/1/questions';

    const newWindow = window.open(
      url,
      '_blank',
      `resizable,scrollbars=yes,noopener,noreferrer`
    );

    if (newWindow) {
      newWindow.opener = null;
    }
  };

  switch (question) {
    case "start":
      return (
        <Estructure>
          <Start examId={{ id }} />
        </Estructure>
      );

    case "questions":
      return (
        <Questions examId={{ id }} />
      );

    case "end":
      return (
        <Estructure>
          <End />
        </Estructure>
      );

    case "result":
      return (
        <Estructure>
          <Result />
        </Estructure>
      );
  }
}

export default Exam;
