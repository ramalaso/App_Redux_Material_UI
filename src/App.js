import { AppBar, Box, Container, IconButton, makeStyles, Paper, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle, AddAlert } from "@material-ui/icons";
import TodoAdder from "./components/todo-adder";
import TodosContainer from "./components/todo-container";

const useStyles = makeStyles((theme)=>({
  root: {},
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 100,
  },
  wrapper: {
    textAlign: "center",
    width: "100%"
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <AccountCircle/>
          </IconButton>
          <Typography variant="h5" style={{ fontWeight: "bold"}}>Todos</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.appContainer}>
        <Paper className={classes.wrapper} elevation={0}>
            <TodoAdder/>
            <TodosContainer />
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
