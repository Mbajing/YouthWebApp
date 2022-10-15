import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "./listTable.css"
import { IconButton } from '@mui/material';



const columns = [
   
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'contact',
      headerName: 'Contact',
    //   type: 'number',
      width: 100,
    },
    {
      field: 'address',
      headerName: 'Address',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 130,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },{
        field:'occupation',
        headerName:"Occupation",
        sortable:false,
        width:120
    },
    {
        field:"action",
        headerName:"Action",
        sortable:false,
        width:140,
        disableventClickEventBubbling:true,
        renderCell:(params)=>{
            return(
                <div style={{display:"flex" ,justifyContent:"space-between" ,alignItems:"center"}}>
                    <IconButton>
               <EditIcon style={{}} color="primary"/>
               </IconButton>
               <IconButton onClick={()=>console.log("hello")}>
               <DeleteIcon color="error" />
               </IconButton>

                </div>
            )
        }
    }
  ];

  const rows = [
    { id:1, lastName: 'Snow', firstName: 'Jon',contact:632415123 , address:"Bokwaongo",occupation:'Student',},
    { id:2, lastName: 'Lannister', firstName: 'Cersei',contact:632415123 , address:"Bokwaongo",occupation:'Student', },
    { id:3, lastName: 'Lannister', firstName: 'Jaime',contact:632415123 , address:"Bokwaongo",occupation:'Student', },
    {id:4,  lastName: 'Stark', firstName: 'Arya',contact:632415123 , address:"Bokwaongo",occupation:'Student', },
    { id:5, lastName: 'Targaryen', firstName: 'Daenerys',contact:632415123 , address:"Bokwaongo",occupation:'Student', },
    {  id:6,lastName: 'Melisandre', firstName:"Joseph",contact:632415123 , address:"Bokwaongo",occupation:'Student', },
    { id:7,  lastName: 'Clifford', firstName: 'Ferrara',contact:632415123 , address:"Bokwaongo",occupation:'Student', },
    {id:8,  lastName: 'Frances', firstName: 'Rossini',contact:632415123 , address:"Bokwaongo",occupation:'Student', },
    {  id:9,lastName: 'Roxie', firstName: 'Harvey',contact:632415123 , address:"Bokwaongo",occupation:'Student', },
  ];
function ListTable() {
  return (
    <div style={{ height: 400, width: '60%' ,marginLeft:20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
         pageSize={5}
         rowsPerPageOptions={[5]}
         disableSelectionOnClick
        // getRowId={(row) => row.id}
        //  checkboxSelection
      />
    </div>
  )
}

export default ListTable