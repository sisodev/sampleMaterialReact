import React from 'react'
import {Paper, Typography} from '@material-ui/core'

const styles = {
    paper: {padding: 30, marginTop: 10, marginBottom: 10}
}

export default ({exercise: {title = 'welcome', description=  'Please select an Exercise from the left'}}) => 
    <Paper style={styles.paper}>
        <Typography variant="h3">{title}</Typography>
<Typography variant="h5" style={{marginTop:20}}>{description}</Typography>
    </Paper>