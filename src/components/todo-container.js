import { Box, Divider, Grid, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './todo-item';

const useStyles = makeStyles(()=>({
   root: {
      margin: 20,
      padding: 20,
      backgroundColor: "rgb(93%, 93%, 93%)",
   }
}))

export default function TodosContainer() {
   const classes = useStyles();

   const {todos} = useSelector((state)=>{
      return {
         todos: state.todos,
      }
   } 
   )

   console.log(todos)
   
   return (
      <Box className={classes.root}>
         <Grid container spacing={2}>
            <Grid item xs={6}>
               <Typography align='left' variant='h5' gutterBottom>
                  Pending items
               </Typography>
               <Divider />
               <List>
                  {todos.filter(x => !x.completed).map((todo)=>{
                     return <TodoItem {...todo}/>
                  })}
               </List>
            </Grid>

            <Grid item xs={6}>
               <Typography align='left' variant='h5' gutterBottom>
                  Completed items
               </Typography>
               <Divider />
               <List>
                  {todos.filter(x => x.completed).map((todo)=>{
                     return <TodoItem {...todo}/>
                  })}
               </List>
            </Grid>
         </Grid>
      </Box>
   )
}
