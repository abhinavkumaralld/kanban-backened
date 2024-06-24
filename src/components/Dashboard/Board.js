import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Box,
  Typography,
  Grid,
  Collapse,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { format } from "date-fns";

const TaskCard = ({ title, dueDate }) => {
  const [expanded, setExpanded] = useState(false);
  const [checkedItems, setCheckedItems] = useState(Array(10).fill(false));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <Card sx={{ marginBottom: "16px" }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={handleExpandClick}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "8px",
              marginTop: "8px",
            }}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <Box
                key={index}
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "8px",
                  marginBottom: "4px",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedItems[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  }
                  label={`Option ${index + 1}`}
                  sx={{ display: "block", margin: "4px 0" }}
                />
              </Box>
            ))}
          </Box>
        </Collapse>
      </CardContent>
      <CardActions
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "16px",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="body1"
            sx={{
              backgroundColor: "white",
              color: "black",
              padding: "4px 8px",
              borderRadius: "4px",
              marginRight: "8px",
            }}
          >
            Due Date:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              backgroundColor: "red",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            {format(dueDate, "dd MMM yyyy")}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

const Board = () => {
  const sections = ["Backlog", "To-Do", "In-Progress", "Done"];
  const currentDate = new Date();
  const formattedDate = format(currentDate, "do MMMM yyyy");

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Welcome Abhinav Kumar</Typography>
        <Typography variant="h6">{formattedDate}</Typography>
      </Box>
      <Typography variant="h4" gutterBottom>
        Board
      </Typography>
      <Grid container spacing={2}>
        {sections.map((section) => (
          <Grid item xs={12} sm={6} md={3} key={section}>
            <Box
              sx={{
                backgroundColor: "#c7bfbf",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: "16px" }}>
                {section}
              </Typography>
              <TaskCard title="Task 1" dueDate={currentDate} />
              <TaskCard title="Task 2" dueDate={currentDate} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Board;
