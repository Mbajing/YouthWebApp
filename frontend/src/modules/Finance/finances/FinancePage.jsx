import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import './finance.css'

function FinancePage() {

    const [visible, setVisible] = useState(false);
  const [allFinances, setAllFinances] = useState([]);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div>FinancePage</div>
  )
}

export default FinancePage