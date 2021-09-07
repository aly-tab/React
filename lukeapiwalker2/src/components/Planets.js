import React from 'react';

const Planets = (props) => {
    return (
      <div>
        <h1>{props.res.name}</h1>
        <p>Climate: {props.res.climate}</p>
        <p>Terrain: {props.res.terrain}</p>
        <p>Surface Water: {props.res.surface_water}</p>
        <p>Population: {props.res.population}</p> 
      </div> 
    )
}

export default Planets;