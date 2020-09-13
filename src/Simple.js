import React, {Component} from 'react';
import img from  './hill.jpg';
import Annotation from 'react-image-annotation';
import {
    RectangleSelector,
    OvalSelector
  } from 'react-image-annotation/lib/selectors'
  import mocks from './mocks.js';


  export default class Multiple extends Component {
    state = {
      type: RectangleSelector.TYPE,
      annotations: mocks.annotations,
      annotation: {}
    }
  
    onChange = (annotation) => {
      this.setState({ annotation })
    }
  
    onSubmit = (annotation) => {
      const { geometry, data } = annotation
  
      this.setState({
        annotation: {},
        annotations: this.state.annotations.concat({
          geometry,
          data: {
            ...data,
            id: Math.random()
          }
        })
      })
    }
  
    onChangeType = (e) => {
      this.setState({
        annotation: {},
        type: e.currentTarget.innerHTML
      })
    }
  
    render () {
      return (
        <div>
          <button
            onClick={this.onChangeType}
            active={RectangleSelector.TYPE === this.state.type}
          >
            {RectangleSelector.TYPE}
          </button>
          <button
            onClick={this.onChangeType}
            active={OvalSelector.TYPE === this.state.type}
          >
            {OvalSelector.TYPE}
          </button>
          
  
          <Annotation
            src={img} 
            alt='Two pebbles anthropomorphized holding hands'
            width = {100}
            height= {500}
            annotations={this.state.annotations}
  
            type={this.state.type}
            value={this.state.annotation}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        </div>
      )
    }
  }