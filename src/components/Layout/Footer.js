import React, { Fragment } from 'react';
import {Paper, Tabs, Tab } from '@material-ui/core';


export default ({muscles, category, onSelect}) => {
    const index = category ? muscles.findIndex(muscle => muscle === category) + 1 : 0
    const onIndexSelect = (e, index) => { onSelect(index === 0 ? '' : muscles[index -1])}
    return (
        <Fragment>
              <Paper>
                    <Tabs
                        value={index}
                        onChange={onIndexSelect}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                         <Tab label="All"/>
                        {muscles.map((muscle,id) =>
                        
                        <Tab label={muscle} key={id}/>

                        )}
                    </Tabs>
                    </Paper>
            </Fragment> 
    )
}
            