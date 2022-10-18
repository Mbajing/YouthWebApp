import React from 'react'
import Amount from '../../../components/amount/Amount'
import AddButton from '../../../components/button/AddButton'
import Search from '../../../components/search/Search'
import AddOfferingForm from '../addOffering/AddOfferingForm'
import "./offeringpage.css"
import { useState ,useEffect } from 'react'
import FinanceTable from '../financeTable/FinanceTable'
import axios from 'axios'




function OfferingPage() {
    const [visible, setVisible] = useState(false);
    const [allOfferings, setAllOfferings] = useState([])
    const [totalOffering , setTotalOffering] = useState("")

    useEffect(() => {
        axios.get("http://localhost:5000/offering/").then((response) => {
          setAllOfferings(response.data);
        });

        axios.get("http://localhost:5000/offering/sumOffering").then((response) => {
          setTotalOffering(response.data);
        })
      }, []);

    // useEffect(() => {
    //     ;
    //   }, []);

      console.log(allOfferings)

    const handleClick = () => {
        setVisible(!visible);
      };
   
  return (
    <div className='offering-container'>
        <div className='offering-container__upper'>
            <Amount  number={totalOffering}/>
            <Search/>
            <AddButton title={"Add Offering"} handleClick={handleClick}/>
        </div>
     {visible ?  <div className="offering-container__form" >
          <AddOfferingForm setAllOfferings={setAllOfferings} allOfferings={allOfferings}/>
        </div>:<></>}  
        <div className='offering-container__table'>
           <FinanceTable allOfferings={allOfferings}/>
        </div>

    </div>
  )
}

export default OfferingPage