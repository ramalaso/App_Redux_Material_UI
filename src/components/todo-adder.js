import { Box, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'

export default function TodoAdder() {
   const [title, setTitle] = useState(null);

   function handleTitleChange(e) {
      setTitle(e.target.value)
   }

   function addTodoItem() {

   }

   return (
      <>
         <TextField label="Add new todo"  variant='filled' style={{ width: 400}} onChange={handleTitleChange}>
         </TextField>
         <Button variant="contained" color="primary" style={{height: 55}} onClick={addTodoItem}>
            Add
         </Button>
      </>
      )
}
