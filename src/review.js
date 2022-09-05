import React from "react";
import ReviewForm from "./reviewform";

let review;
let i = 0;
export default class Review extends React.Component{
    addReview(){
        
        
        //console.log(review)
       
        // review = <form>
        //             <p><label for="w3review">Review:</label></p>
        //             <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. 
        //             They offer free tutorials in all web development technologies.</textarea>
                    
        //             <input type="submit" value="Submit"/>
        //         </form>
        

        
        if(i < 1){
        review = <div className="container">
            
            <h5 >Leave a review</h5>
            
            ${document.getElementById('here').after(document.createElement('textarea'))}
            </div>;
            
            
        document.getElementById('review').after(review.props.children[0].props.children)
        i++
    }
        
        
    }
    
    render(){
        
        return(
            <div>
            <button onClick={this.addReview}>Write Review</button>
            <div id= 'review'></div>
            <div id= 'here'></div>
            </div>

        )
    }
}