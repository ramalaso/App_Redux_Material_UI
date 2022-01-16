import { Checkbox, Container, FormControlLabel, FormGroup, ListItem } from '@material-ui/core';
import React from 'react'

function toogle(){
   
}

export default function TodoItem({id, title, completed, important}) {
   return (
      <ListItem dense>
         <FormGroup>
            <FormControlLabel 
            control={ 
            <Checkbox checked={completed} name={title} color="primary" onChange={toogle} />
            }
            label={title}
            >

            </FormControlLabel>
         </FormGroup>
      </ListItem>
   )
}
