import React from 'react';

const People = (props) => {
    return (
      <div>
        <h1>{props.res.name}</h1>
        <p>Height: {props.res.height}</p>
        <p>Mass: {props.res.mass}</p>
        <p>Hair Color: {props.res.hair_color}</p>
        <p>Skin Color: {props.res.skin_color}</p>  
      </div> 
    )
}

export default People;