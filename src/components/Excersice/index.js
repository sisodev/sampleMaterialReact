import React from 'react';
import {Grid} from '@material-ui/core';
import RightPane from './RightPane';
import LeftPane from './LeftPane';


export default props => {
    const {exercises, category, onSelect, exercise} = props
    return (
        <Grid container style={{marginTop: 70}}>
        <Grid item sm>
           <LeftPane exercises={exercises} category={category} onSelect={onSelect} />
        </Grid>
        <Grid item sm>
            <RightPane exercise={exercise}/>
        </Grid>
    </Grid>
    )
}    
    
