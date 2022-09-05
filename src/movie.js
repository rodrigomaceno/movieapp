import React from 'react';
import ReviewForm from './reviewform';
import Review from './review';
import Stars from './stars';
import Rate from './rate';

export default class Movie extends React.Component{
    render(){
        return(
            <div className='container poster'>
                <img src='https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg'/>
                <Rate/>    <Review/>
            </div>
            
        )
    }
}