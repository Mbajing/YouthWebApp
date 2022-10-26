import React from "react";
import AddYouthForm from "../../../components/addYouthForm/AddYouthForm";
import AddButton from "../../../components/button/AddButton";
import ListTable from "../../../components/listTable/ListTable";
import Search from "../../../components/search/Search";
import YouthsAndNumber from "../../../components/youthsAndNumber/YouthsAndNumber";
import "./youth.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {data} from "../../../constants/columns/data"
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const {YouthColumns}= data
function YouthPage() {
  const [visible, setVisible] = useState(false);
  const [allYouths, setAllYouths] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/youth/").then((response) => {
      setAllYouths(response.data);
    });
  }, []);

  useEffect(()=>{

  },[])



  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <div className="Youth-container">
      <div className="Youth-container__upper">
        <YouthsAndNumber total={allYouths.length} />
        <Search />
        <AddButton handleClick={handleClick} title={"Add Youth"} Icon= { <PersonAddIcon color="secondary" />} />
      </div>

      {visible ? (
        <div className="Youth-container__form">
          <AddYouthForm setAllYouths={setAllYouths} allYouths={allYouths} />
        </div>
      ) : (
        <></>
      )}

      <div className="Youth-container__table">
        <ListTable allData={allYouths} columns={YouthColumns} />
      </div>
    </div>
  );
}

export default YouthPage;
