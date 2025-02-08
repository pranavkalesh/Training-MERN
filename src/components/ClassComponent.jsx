import React, { Component } from 'react';

 export class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            message: "Hi! i am kalesh"
        }
    }
    render() {
        return (
            <div>
              <h1 className='heading'>{this.state.message}</h1>  
            </div>
        );
    }
}

export default ClassComponent;
