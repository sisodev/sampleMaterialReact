import React from 'react';
import {RadialGauge} from 'canvas-gauges'


export default class Speedometer extends React.Component {
  
   constructor(props){
     super(props);
     this.state = {
       value: 0,
       units: 'Km/h',
       width: 200,
       height: 200,
       majorTicks: ['0','20','40','60','80','100','120', '140', '160', '180', '200', '220'],
       minorTicks: 10,
       highlights: [
           { from: 0, to: 50, color: 'rgba(0,255,0,.15)' },
           { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
           { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
           { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
           { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }
       ],
       colorPlate: '#222',
       colorTitle: '#fff',
       colorUnits: '#ccc',
       colorNumbers: '#eee',
       valueBox: false,
       title: "speedometer",
       animationRule: 'linear'
     }
    
   }


    componentDidMount () {
      const options = Object.assign({}, {...this.state}, {renderTo: this.el})
      this.gauge = new RadialGauge(options).draw()
    }

    componentWillReceiveProps(nextProps){
      this.gauge.value = nextProps.value/2
      this.setState((state)=> ({...state, value: nextProps.value}))
    }

      render () {
        return (
          <>
          <h1>This is a speedometer {this.state.value}</h1>
          <canvas ref={(canvas) => {
            this.el = canvas
          }} />
        </>
        )
      }
}