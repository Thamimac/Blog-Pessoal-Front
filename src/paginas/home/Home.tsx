import React from 'react';
import './Home.css';

interface myProps{
    title: string;
    description: string;
}

function Home(props:myProps){
    return (
        <>
            <h2>{props.title} </h2>
            <p>{props.description}</p>
</>
    );
}

export default Home;