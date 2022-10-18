import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./listTable.css";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
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
          <IconButton>
            <EditIcon style={{}} color="primary" />
          </IconButton>
          <IconButton onClick={() => console.log("hello")}>
            <DeleteIcon color="error" />
          </IconButton>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    contact: 632415123,
    address: "Bokwaongo",
    occupation: "Student",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    contact: 632415123,
    address: "Bokwaongo",
    occupation: "Student",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    contact: 632415123,
    address: "Bokwaongo",
    occupation: "Student",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    contact: 632415123,
    address: "Bokwaongo",
    occupation: "Student",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    contact: 632415123,
    address: "Bokwaongo",
    occupation: "Student",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Joseph",
    contact: 632415123,
    address: "Bokwaongo",
    occupation: "Student",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    contact: 632415123,
    address: "Bokwaongo",
    occupation: "Student",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    contact: 632415123,
    address: "Bokwaongo",
    occupation: "Student",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    contact: 632415123,
    address: "Bokwaongo",
    occupation: "Student",
  },
];
function ListTable({ allYouths }) {
  // const [listOfPosts, setListOfPosts] = useState([]);
  console.log(allYouths);

  // useEffect(() => {
  //     axios.get("http://localhost:5000/youth/").then((response) => {
  //       setListOfPosts(response.data);
  //       console.log(response.data)
  //     });
  //   }, []);

  // console.log(listOfPosts)
  return (
    <div style={{ height: 550, width: "100%", marginLeft: 20 }}>
      <DataGrid
        rows={allYouths}
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
