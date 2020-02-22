import React, { useState, useEffect } from "react";
import axios from "axios";
import NASAcard from "./NASAcard";

function NASApage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => {
                console.log("the data was not returned", error);
            });
    }, []);
    return (
        <div>
            <NASAcard
                date={data.date}
                title={data.title}
                imageOfDay={data.hdurl}
                explanation={data.explanation}
            />
        </div>
    )
}

export default NASApage;