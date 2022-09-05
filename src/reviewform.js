import React from "react";

export default class ReviewForm extends React.Component{
    render(){
        return (
            <form action="#">
                <p><label for="w3review">Review:</label></p>
                <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. 
                They offer free tutorials in all web development technologies.</textarea>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}