import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { style } from './style.js';

import supabase from '../../../config/client.js';

function Questions() {
  
  React.useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('v_info_questionario')
        .select('*')
        .eq('id_questionario', id);
      if (error) {
        console.log(error);
      }
    }
  }, [id]);  

}

export default Questions;
