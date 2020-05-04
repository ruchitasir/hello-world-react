import React, { Component } from 'react';
import Morewords from './MoreWords';

/* const Hello =()=>{
    return(
        <h1>Hello World!</h1>
    )
} */


class Hello extends Component{
    render(){
        return(
            <div>
                <h1>Hello World Class!</h1>
                <Morewords />
            </div>
            
        )
    }
}

export default Hello