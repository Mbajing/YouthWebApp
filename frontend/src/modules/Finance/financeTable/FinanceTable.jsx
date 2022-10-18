import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import axios from 'axios';


const columns = [
    { field: "Amount", headerName: "Amount", width: 400  },
    { field: "Date", headerName: "Date", width: 300  },
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        width: 200,
        disableventClickEventBubbling: true,
        renderCell: (params) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton >
                <EditIcon style={{}} color="primary" />
              </IconButton>
              <IconButton onClick={()=>handleDelete(params.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </div>
          );
        },
      },
]

const handleDelete =(id)=>{
    axios.delete(`http://localhost:5000/offering/${id}`).then((response)=>{
             console.log(response.data)
    })
}

function FinanceTable({allOfferings}) {
  return (
    <div style={{ height: 550, width: "100%", marginLeft: 10 }}>
    <DataGrid
      rows={allOfferings}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      disableSelectionOnClick
      // getRowId={(row) => row.id}
      //  checkboxSelection
    />
  </div>
  )
}

export default FinanceTable