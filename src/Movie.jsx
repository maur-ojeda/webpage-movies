import React from 'react'

export const Movie = (props) => {
    return (
        <div className="movie-item-style-2">
            <img src={props.image} alt="" />
            <div className="mv-item-infor">
                <h6><a href="moviesingle.html">{props.title} <span>{props.year}</span></a></h6>
                <p className="rate"><i className="ion-android-star"></i><span>{props.rate}/10</span> </p>
                <p className="describe">{props.children}</p>
                <p className="run-time"> Run Time:{props.runTime}    .     <span>MMPA: {props.mmpa}</span>    .     <span>Release:{props.release}</span></p>
                <p>Director: <a href="#">{props.director}Joss Whedon</a></p>
                <p>Stars:<a>{props.starts}</a></p>
            </div>
        </div>
    )
}

