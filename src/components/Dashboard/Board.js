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
  Modal,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { format } from "date-fns";
// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import dayjs from "dayjs";

const emailOptions = [
  "abhi@mai.com",
  "divya@mail.com",
  "abhinavKumar@mail.com",
  "divyasingh@mail.com",
  "akds@mail.com",
];

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
            {expanded ? <span>less </span> : <span>more </span>}
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
            {format(dueDate.toDate(), "dd MMM yyyy")}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

const Board = () => {
  const sections = ["Backlog", "To-Do", "In-Progress", "Done"];
  const currentDate = new Date();
  const formattedDate = format("22/22/2222");

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState(currentDate);
  const [checklist, setChecklist] = useState([
    { id: 1, value: "", checked: false },
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  const handleAssigneeChange = (event, newValue) => {
    setAssignee(newValue);
  };

  const handleChecklistChange = (id, value) => {
    setChecklist(
      checklist.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const handleChecklistCheck = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAddChecklistItem = () => {
    const newItem = { id: checklist.length + 1, value: "", checked: false };
    setChecklist([...checklist, newItem]);
  };

  const handleDeleteChecklistItem = (id) => {
    setChecklist(checklist.filter((item) => item.id !== id));
  };

  const handleAddTask = () => {
    console.log({
      newTask,
      priority,
      assignee,
      dueDate: dueDate.toDate(),
      checklist,
    });
    handleClose();
  };

  const handleDueDateChange = (newDate) => {
    setDueDate(newDate);
  };

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
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={section}>
            <Box
              sx={{
                backgroundColor: "#c7bfbf",
                padding: "16px",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <Typography variant="h5" sx={{ marginBottom: "16px" }}>
                {section}
              </Typography>
              {section === "To-Do" && (
                <IconButton
                  sx={{ position: "absolute", top: "16px", right: "16px" }}
                  onClick={handleOpen}
                >
                  +
                </IconButton>
              )}
              <TaskCard title="Task 1" dueDate={currentDate} />
              <TaskCard title="Task 2" dueDate={currentDate} />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-task-modal"
        aria-describedby="add-task-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Typography
            id="add-task-modal"
            variant="h6"
            component="h2"
            gutterBottom
          >
            Add New Task
          </Typography>
          <TextField
            label="Title"
            placeholder="Enter Task Title"
            variant="outlined"
            fullWidth
            value={newTask}
            onChange={handleTaskChange}
            margin="normal"
          />
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Button
              variant={priority === "high" ? "contained" : "outlined"}
              color="error"
              onClick={() => handlePriorityChange("high")}
              sx={{ flexGrow: 1, marginRight: "4px" }}
            >
              High
            </Button>
            <Button
              variant={priority === "moderate" ? "contained" : "outlined"}
              color="primary"
              onClick={() => handlePriorityChange("moderate")}
              sx={{ flexGrow: 1, marginRight: "4px", marginLeft: "4px" }}
            >
              Moderate
            </Button>
            <Button
              variant={priority === "low" ? "contained" : "outlined"}
              color="success"
              onClick={() => handlePriorityChange("low")}
              sx={{ flexGrow: 1, marginLeft: "4px" }}
            >
              Low
            </Button>
          </Box>
          <Autocomplete
            options={emailOptions}
            value={assignee}
            onChange={handleAssigneeChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Assign To"
                placeholder="Assignee"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            )}
          />
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="body1" gutterBottom>
              Checklist
            </Typography>
            {checklist.map((item, index) => (
              <Box key={item.id} display="flex" alignItems="center" mb={1}>
                <Checkbox
                  checked={item.checked}
                  onChange={() => handleChecklistCheck(item.id)}
                />
                <TextField
                  value={item.value}
                  onChange={(e) =>
                    handleChecklistChange(item.id, e.target.value)
                  }
                  placeholder="Checklist Item"
                  variant="outlined"
                  fullWidth
                  sx={{ marginRight: "8px" }}
                />
                <IconButton onClick={() => handleDeleteChecklistItem(item.id)}>
                  -
                </IconButton>
              </Box>
            ))}
            <Button
              variant="outlined"
              onClick={handleAddChecklistItem}
              sx={{ width: "100%", marginTop: "8px" }}
            >
              Add New
            </Button>
          </Box>

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleAddTask}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Board;
