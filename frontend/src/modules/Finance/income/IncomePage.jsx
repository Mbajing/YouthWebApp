import React from 'react'
import AddButton from '../../../components/button/AddButton'
import Amount from '../../../components/amount/Amount'
import { useState ,useEffect } from 'react'
import ListTable from '../../../components/listTable/ListTable'
import axios from 'axios'
import {data}from "../../../constants/columns/data"
import AddFinanceForm from '../../../components/addFinanceForm/AddFinanceForm'

function IncomePage() {

 const {Incomecolumns}= data

    const [visible, setVisible] = useState(false);
    const [allIncome, setAllIncome] = useState([])
    const [totalIncome , setTotalIncome] = useState("")

    const [amount ,setAmount]= useState("")
    const [reason ,setReason]=useState("")
    const [date ,setDate]= useState("")


    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = { Amount:amount , Source:reason, Date:date };
      await axios.post("http://localhost:5000/finance/income", data).then((response) => {
        setAllIncome(response.data);
  
       
        setAmount("");
        setDate("");
        setReason("")
       
      });
      // console.log(firstname ,lastname, phoneNumber ,location ,occupation)
    };






    
      
    useEffect(() => {
        axios.get("http://localhost:5000/finance/income").then((response) => {
          setAllIncome(response.data);
        });

        axios.get("http://localhost:5000/finance/sumIncome").then((response) => {
          setTotalIncome(response.data);
        })
      }, []);

      
    const handleClick = () => {
        setVisible(!visible);
      };

  return (
    <div className='offering-container'>
        <div className='offering-container__upper'>
            <Amount  number={totalIncome}/>
           
            <AddButton title={"Add Income"} handleClick={handleClick}/>
        </div>
     {visible ?  <div className="offering-container__form" >
      <AddFinanceForm
      amount={amount}
      setAmount={setAmount}
      date={date}
      setDate={setDate}
      reason={reason}
      setReason={setReason}
      handleSubmit={handleSubmit}

      />
          {/* <AddOfferingForm setAllIncome={setAllIncome} allIncome={allIncome}/> */}
        </div>:<></>}  
        <div className='offering-container__table'>
           <ListTable allData={allIncome} columns={Incomecolumns}/>
        </div>

    </div>
  )
}

export default IncomePage