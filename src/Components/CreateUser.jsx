import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./CreateUser.css";
import Base from "../Base/Base";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      office: "",
      position: "",
      age: "",
      start_date: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please enter name";
      }
      if (values.office === "") {
        errors.office = "Please enter office";
      }
      if (values.position === "") {
        errors.position = "Please enter position";
      }
      if (values.age === "") {
        errors.age = "Please enter age";
      }
      if (values.start_date === "") {
        errors.start_date = "Please enter startdate";
      }

      if (values.salary === "") {
        errors.salary = "Please enter salary";
      }
      return errors;
    },
    onSubmit:async (values) => {
      let user=await axios.post("https://63ae58f93e465169166fab20.mockapi.io/user",values)
    alert("user created")
    navigate('/user')
    },
  });

  return (
    <Base>
      <Grid container className="container">
        <form onSubmit={formik.handleSubmit}>
          <h1>Welcome To User Page</h1>

          <Grid item xs={12}>
            <Box>
              <label>User Name</label>
              <br></br>
              <input
                type={"text"}
                className={`input ${formik.errors.name ? `input-error`:``}`}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              ></input>
              <br></br>
<span style={{color:"red"}}>{formik.errors.name}</span>
              <br></br>

              <label>Office</label>
              <br></br>
              <input
                type={"text"}
                className={`input ${formik.errors.office ? `input-error`:``}`}
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
              ></input>
              <br></br>
              <span style={{color:"red"}}>{formik.errors.office}</span>
              <br></br>

              <label>Position</label>
              <br></br>

              <input
                type={"text"}
                className={`input ${formik.errors.position ? `input-error`:``}`}
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
              ></input>
              <br></br>
              <span style={{color:"red"}}>{formik.errors.position}</span>
              <br></br>

              <label>Age</label>
              <br></br>
              <input
                type={"text"}
                className={`input ${formik.errors.age ? `input-error`:``}`}
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
              ></input>
              <br></br>
              <span style={{color:"red"}}>{formik.errors.age}</span>
              <br></br>

              <label>Start_Date</label>
              <br></br>
              <input
                type={"text"}
                className={`input ${formik.errors.start_date ? `input-error`:``}`}
                value={formik.values.start_date}
                onChange={formik.handleChange}
                name="start_date"
              ></input>
              <br></br>
              <span style={{color:"red"}}>{formik.errors.start_date}</span>
              <br></br>

              <label>Salary</label>
              <br></br>
              <input
                type={"text"}
                className={`input ${formik.errors.salary ? `input-error`:``}`}
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
              ></input>
              <br></br>
              <span style={{color:"red"}}>{formik.errors.salary}</span>
              <br></br>
              <br></br>
              <div className="btn">
                <Button
                  variant="contained"
                  type={"submit"}
                  value="submit"
                  sx={{ width: "150px" }}
                   disabled={!formik.isValid}
                >
                  Add User
                </Button>
              </div>
            </Box>
          </Grid>
        </form>
      </Grid>
    </Base>
  );
}
