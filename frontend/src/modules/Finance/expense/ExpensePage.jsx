import React from 'react'
import AddButton from '../../../components/button/AddButton'
import Amount from '../../../components/amount/Amount'
import { useState ,useEffect } from 'react'
import ListTable from '../../../components/listTable/ListTable'
import axios from 'axios'
import {data}from "../../../constants/columns/data"
import AddFinanceForm from '../../../components/addFinanceForm/AddFinanceForm'


function ExpensePage() {
    const {Expensecolumns}= data


    const [visible, setVisible] = useState(false);
    const [allExpense, setAllExpense] = useState([])
    const [totalExpense , setTotalExpense] = useState("")

    const [amount ,setAmount]= useState("")
    const [reason ,setReason]=useState("")
    const [date ,setDate]= useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { Amount:amount , Reason:reason, Date:date };
        await axios.post("http://localhost:5000/finance/expense", data).then((response) => {
          setAllExpense(response.data);
    
         
          setAmount("");
          setDate("");
          setReason("")
         
        });
        // console.log(firstname ,lastname, phoneNumber ,location ,occupation)
      };
  

    useEffect(() => {
        axios.get("http://localhost:5000/finance/expense").then((response) => {
          setAllExpense(response.data);
        });

        axios.get("http://localhost:5000/finance/sumExpense").then((response) => {
          setTotalExpense(response.data);
        })
      }, []);
     

      const handleClick = () => {
        setVisible(!visible);
      }
  return (
    <div className='offering-container'>
    <div className='offering-container__upper'>
        <Amount  number={totalExpense}/>
       
        <AddButton title={"Add Expense"} handleClick={handleClick}/>
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
    </div>:<></>}  
    <div className='offering-container__table'>
       <ListTable allData={allExpense} columns={Expensecolumns}/>
    </div>

</div>
  )
}

export default ExpensePage