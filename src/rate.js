import React from "react";

let star;
let i = 0;


export default class Rate extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     children: props.children
        // }
    }
    addStar(){
        
        star = <div>&#9733;</div>
        
        if(i < 5){
        document.getElementById('span').append(star.props.children)
        i++
        }
         console.log(i)
        console.log(star.props.children)
    }

    render(){
        
        return(
            
            <>
            <p></p>
            <button onClick={this.addStar}>Rate</button><br/>
            <span className="star" id="span"></span>
            </>
            
        )
        
    }
}