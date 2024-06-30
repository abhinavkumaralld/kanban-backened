import React, { useState, useEffect } from "react";
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
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { format } from "date-fns";
const emailOptions = [
  "abhi@mai.com",
  "divya@mail.com",
  "abhinavKumar@mail.com",
  "divyasingh@mail.com",
  "akds@mail.com",
];

const TaskCard = ({ priority, title, list, dueDate }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const t = [
    {
      _id: "668146cff4390ea77339a845",
      newTask: "task3",
      priority: "high",
      assignee: "1@mail.com",
      assigner: "agssh@mail.com",
      checklist: [
        {
          id: 1,
          value: "bnm,",
          checked: false,
          _id: "668146cff4390ea77339a846",
        },
      ],
      currDueDate: "2024-06-01T00:00:00.000Z",
      __v: 0,
    },
    {
      _id: "668146d5f4390ea77339a848",
      newTask: "task1",
      priority: "high",
      assignee: "1@mail.com",
      assigner: "agssh@mail.com",
      checklist: [
        {
          id: 1,
          value: "bnmkj,",
          checked: false,
          _id: "668146d5f4390ea77339a849",
        },
      ],
      currDueDate: "2024-06-01T00:00:00.000Z",
      __v: 0,
    },
    {
      _id: "668146d8f4390ea77339a84b",
      newTask: "task4",
      priority: "high",
      assignee: "1@mail.com",
      assigner: "agssh@mail.com",
      checklist: [
        {
          id: 1,
          value: "bnm,",
          checked: false,
          _id: "668146d8f4390ea77339a84c",
        },
      ],
      currDueDate: "2024-06-01T00:00:00.000Z",
      __v: 0,
    },
  ];
  const tt = [];
  t.forEach((v, i) => tt.push(v.checklist[0].value));
  const [checkedItems, setCheckedItems] = useState([...tt]);

  const [checked, setChecked] = useState(-1);

  return (
    <Card sx={{ marginBottom: "16px" }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={handleExpandClick}>
            {expanded ? <span>- </span> : <span>+ </span>}
          </IconButton>
        </Box>
        <Box variant="h6">Checklist</Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "8px",
              marginTop: "8px",
            }}
          >
            {checkedItems.map((v, i) => (
              <Box
                key={i}
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
                      checked={i == checked}
                      onChange={() => setChecked(i)}
                    />
                  }
                  label={v}
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
        <Box display="flex" alignItems="center">
          <Button
            // variant="body1"
            sx={{
              backgroundColor: "#decdcc",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              margin: "1px",
            }}
          >
            InProgress
          </Button>
          <Button
            // variant=""
            sx={{
              backgroundColor: "#decdcc",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              margin: "1px",
            }}
          >
            To do
          </Button>
          <Button
            // variant="body1"
            sx={{
              backgroundColor: "#decdcc",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            Done
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

const Board = () => {
  const sections = ["Backlog", "To-Do", "In-Progress", "Done"];
  const currentDate = new Date();
  const formattedDate = format(currentDate, "do MMMM yyyy");
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState(currentDate);
  const [currDueDate, setCurrDueDate] = useState(new Date());
  const [checklist, setChecklist] = useState([
    { id: 1, value: "", checked: false },
  ]);

  const [todo, setTodo] = useState([]);
  const [inpro, setInpro] = useState([]);
  const [done, setDone] = useState([]);
  const [back, setBack] = useState([]);

  const getApiData =  () => {
    const data = [
      {
        _id: "668156ab354bd4ccf9f2051c",
        newTask: "taskah4h",
        priority: "medium",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "668156ab354bd4ccf9f2051d",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "inprogress",
        __v: 0,
      },
      {
        _id: "668156bd354bd4ccf9f20521",
        newTask: "taskah4h",
        priority: "high",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "668156bd354bd4ccf9f20522",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "inprogress",
        __v: 0,
      },
      {
        _id: "668156c3354bd4ccf9f20524",
        newTask: "taskah4h",
        priority: "low",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "668156c3354bd4ccf9f20525",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "inprogress",
        __v: 0,
      },
      {
        _id: "668156cc354bd4ccf9f20527",
        newTask: "taskah4h",
        priority: "low",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "668156cc354bd4ccf9f20528",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "todo",
        __v: 0,
      },
      {
        _id: "668156d3354bd4ccf9f2052a",
        newTask: "taskah4h",
        priority: "high",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "668156d3354bd4ccf9f2052b",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "todo",
        __v: 0,
      },
      {
        _id: "668156d9354bd4ccf9f2052d",
        newTask: "taskah4h",
        priority: "medium",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "668156d9354bd4ccf9f2052e",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "todo",
        __v: 0,
      },
      {
        _id: "668156ea354bd4ccf9f20530",
        newTask: "taskah4h",
        priority: "medium",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "668156ea354bd4ccf9f20531",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "backlog",
        __v: 0,
      },
      {
        _id: "668156ef354bd4ccf9f20533",
        newTask: "taskah4h",
        priority: "low",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "668156ef354bd4ccf9f20534",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "backlog",
        __v: 0,
      },
      {
        _id: "668156f3354bd4ccf9f20536",
        newTask: "taskah4h",
        priority: "high",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "668156f3354bd4ccf9f20537",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "backlog",
        __v: 0,
      },
      {
        _id: "66815718354bd4ccf9f20543",
        newTask: "taskah4h",
        priority: "high",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "66815718354bd4ccf9f20544",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "done",
        __v: 0,
      },
      {
        _id: "6681571c354bd4ccf9f20546",
        newTask: "taskah4h",
        priority: "low",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "6681571c354bd4ccf9f20547",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "done",
        __v: 0,
      },
      {
        _id: "66815723354bd4ccf9f20549",
        newTask: "taskah4h",
        priority: "medium",
        assignee: "1@mail.com",
        assigner: "agssh@mail.com",
        checklist: [
          {
            id: 1,
            value: "bnm,",
            checked: false,
            _id: "66815723354bd4ccf9f2054a",
          },
        ],
        currDueDate: "2024-06-01T00:00:00.000Z",
        status: "done",
        __v: 0,
      },
    ];
    return data;
  };

  useEffect(() => {
    const dddd = [];
    const t = [];
    const i = [];
    const d = [];
    const b = [];
    dddd.forEach((v, i) => {
      if (v.status == "todo") t.add(v);
      if (v.status == "done") d.add(v);
      if (v.status == "inprogress") i.add(v);
      if (v.status == "backlog") b.add(v);
    });
    setTodo(t);
    setBack(b);
    setDone(d);
    setInpro(i);
  },[]);

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
      checklist,
      currDueDate,
    });
    handleClose();
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
              {/* <TaskCard title="Task 1" dueDate={currentDate} /> */}
              {/* <TaskCard title="Task 2" dueDate={currentDate} /> */}
              
              {section=="Backlog" && (
                {back.map((v,i)=><TaskCard  priority={v.priority} title="Hero Task" list={v.checklist}   dueDate={currentDate} />)}
              )}
              {section=="To-Do" && (
                {todo.map((v,i)=><TaskCard  priority={v.priority} title="Hero Task" list={v.checklist}  dueDate={currentDate} />)}
              )}
              {section=="In-Progress" && (
                {inpro.map((v,i)=><TaskCard  priority={v.priority} title="Hero Task" list={v.checklist}   dueDate={currentDate} />)}
              )}
              {section=="Done" && (
                {done.map((v,i)=><TaskCard  priority={v.priority} title="Hero Task" list={v.checklist}   dueDate={currentDate} />)}
              )}
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
            <Button for="date" variant="outlined">
              Due date
            </Button>
            <input
              type="date"
              id="currDueDate"
              name="currDueDate"
              onChange={(e) => setCurrDueDate(e.target.value)}
            />
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
