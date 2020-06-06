import React, { Component, Fragment }  from 'react';
import './App.css';
import {Header, Footer} from './components/Layout';
import Excercise from './components/Excersice';
import {muscles, exercises} from './store.js';
// import Speedometer  from './components/Speedometer';
//import MenuAction from './components/MenuAction';

export default class extends Component {
  state = {
    exercises,
    category: '',
    exercise: null 
  }



  getExcercisesByMuscle(){
    return Object.entries(this.state.exercises.reduce((exercises, exercise) =>{
      const {muscles} = exercise
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
      return exercises
    },{}))
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = (title) => {
    console.log(exercises)
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.title === title)
    }))
  }


  render() {
    const exercises = this.getExcercisesByMuscle()
    const {category, exercise} = this.state;
    
    return(
      <Fragment>
        <Header/>
          <Excercise exercise={!exercise? {title: 'welcome',description: 'Please select an Exercise from the left'}: exercise} exercises={exercises} category={category} onSelect={this.handleExerciseSelected}/>
        <Footer muscles={muscles} category={category} onSelect={this.handleCategorySelected}/>
      </Fragment>

    )
  }
}
