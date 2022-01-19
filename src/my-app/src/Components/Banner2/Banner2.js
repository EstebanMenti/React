import React from 'react'

class Banner2 extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return <h1>{this.props.mensaje}</h1>
    }
}

export default Banner2