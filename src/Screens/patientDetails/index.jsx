import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { patientsArray } from "../../app/assets/patientsArray";
import PatientCard from "./PatientCard";

const PatientDetails = () => {
  const [selected, setSelected] = useState({});
  const [toggleCard, setTogglecard] = useState(false);

  const handleSelected = (patient) => {
    if (toggleCard === false) {
      setTogglecard(!toggleCard);
      setSelected(patient);
    }
    if (toggleCard === true) {
      setSelected(patient);
    }

    if (patient.id === selected.id) {
      setTogglecard(!toggleCard);
    }
  };
  return (
    <>
      <h1 style={{marginLeft: "20px"}}>Patient table</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <TableContainer
          style={{ maxWidth: !toggleCard ? "100vw" : "50vw" }}
          component={Paper}
        >
          <Table aria-label="patient-table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Date of Birth</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patientsArray.map((row) => (
                <TableRow
                  style={{ cursor: "pointer" }}
                  key={row.id}
                  onClick={() => handleSelected(row)}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.doB}</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ display: "flex", flexGrow: 1 }}>
          {toggleCard && <PatientCard selected={selected} />}
        </div>
      </div>
    </>
  );
};

export default PatientDetails;
