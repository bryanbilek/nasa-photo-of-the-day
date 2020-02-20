import React from "react";

const NASAcard = props => {
    return (
        <div>
            <p>{props.date}</p>
            <h1>{props.title}</h1>
            <img src={props.imageOfDay} />
            <p>{props.explanation}</p>

        </div>
    );
}
export default NASAcard;