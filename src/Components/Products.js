import React from 'react'
import Base from '../Base/Base'
import {
  Button, 
  Grid,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import "./DashBoard.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FolderOpenTwoToneIcon from "@mui/icons-material/FolderOpenTwoTone";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import LinearProgress from "@mui/material/LinearProgress";



export default function Products() {
  return (
    <Base>
      <Grid container my={1} mx={1}>
        <Grid item xs={10}>
          <Box my={1}>
            <b>Products</b>
            <Button sx={{ float: "right" }}>Generate Report</Button>
          </Box>
        </Grid>

        <Grid item xs={12} display={"flex"} gap={4}>
          <Box my={1} className="griditems1">
            <label className="clr-label1">EARNINGS (MONTHLY)</label>
            <br></br>
            <b>$40,000</b>
            <IconButton>
              <FolderOpenTwoToneIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
          <Box my={1} className="griditems2">
            <label className="clr-label2">EARNINGS (ANNUAL)</label>
            <br></br>
            <b>$215,000</b>
            <IconButton>
              <AttachMoneyIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
          <Box my={1} className="griditems3">
            <label className="clr-label3">TASKS</label>
            <br></br>
            <b>
              50%
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{ width: "150px" }}
              />
            </b>
            <IconButton>
              <AssignmentTwoToneIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
          <Box my={1} className="griditems4">
            <label className="clr-label4">PENDING REQUESTS</label>
            <br></br>
            <b>18</b>
            <IconButton>
              <ForumTwoToneIcon sx={{ fontSize: "50px" }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Base>
  )
}





