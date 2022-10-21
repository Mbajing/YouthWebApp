import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import axios from "axios"

const handleDelete =(id)=>{
  axios.delete(`http://localhost:5000/youth/${id}`).then((response)=>{
           console.log(response.data)
  })
}


const handleDeleteIncome=(id)=>{
  axios.delete(`http://localhost:5000/finance/${id}`).then((response)=>{
    console.log(response.data)
})
} 
export   const data ={

    YouthColumns:[
        { field: "firstname", headerName: "First name", width: 200 },
        { field: "lastname", headerName: "Last name", width: 200 },
        {
          field: "phoneNumber",
          headerName: "Contact",
          //   type: 'number',
          width: 160,
        },
        {
          field: "location",
          headerName: "Address",
          description: "This column has a value getter and is not sortable.",
          sortable: false,
          width: 200,
          //   valueGetter: (params) =>
          //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
          field: "occupation",
          headerName: "Occupation",
          sortable: false,
          width: 200,
        },
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
      ],
      
 Incomecolumns : [
  { field: "Amount", headerName: "Amount", width: 400  },
  { field: "Source", headerName: "Source", width: 300  },
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
            <IconButton onClick={()=>handleDeleteIncome(params.id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </div>
        );
      },
    },
],
 Expensecolumns : [
  { field: "Amount", headerName: "Amount", width: 400  },
  { field: "Reason", headerName: "Reason", width: 400  },
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
            <IconButton onClick={()=>handleDeleteIncome(params.id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </div>
        );
      },
    },
],
 EventsColumns : [
  { field: "eventName", headerName: "Event", width: 100  },
  { field: "attendance", headerName: "Attendance", width: 100  },
  { field: "Date", headerName: "Date", width: 125  },
  { field: "presidentRemark", headerName: "President Remark", width: 325  },
  { field: "secretaryRemark", headerName: "Secretary Remark", width: 325  },
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
            <IconButton onClick={()=>handleDeleteIncome(params.id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </div>
        );
      },
    },
],


      

}