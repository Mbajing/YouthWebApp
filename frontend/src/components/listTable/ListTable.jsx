import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./listTable.css";
import { IconButton } from "@mui/material";
import axios from "axios";
import { data } from "../../constants/columns/data"



const { YouthColumns }=data


const handleDelete =(id)=>{
      axios.delete(`http://localhost:5000/youth/${id}`).then((response)=>{
               console.log(response.data)
      })
}
function ListTable({ allData , handleFunction ,columns }) {
 
  return (
    <div style={{ height: 550, width: "100%", marginLeft: 10 }}>
      <DataGrid
        rows={allData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        // getRowId={(row) => row.id}
        //  checkboxSelection
      />
    </div>
  );
}

export default ListTable;
