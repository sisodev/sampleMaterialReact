import React, {Fragment} from 'react'
import {Paper, Typography, List, ListItemText,  } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';

const styles = {
    paper: {padding: 30, marginTop: 10, marginBottom: 10, overflowY:'auto'}
}


  

export default ({exercises, category, onSelect}) => 
    <Paper style={styles.paper}>
        {exercises.map(([group, exerciseList], id) =>
        !category || category === group ? <Fragment key={id}>
            <Typography 
            variant="h6"
            style={{textTransform:'capitalize'}}
            >
                {group}
            </Typography>
            
            <List component="ul">
                {exerciseList.map(({title},id) => 
                    <ListItem button key={id}>
                    <ListItemText primary={title} onClick={() => onSelect(title)}/>
                  </ListItem>
                )}
            </List>
          </Fragment> : null
        )}
    </Paper>
