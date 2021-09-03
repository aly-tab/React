import React, { useState } from 'react';

const BoxForm = () => {
    const [arr, setArr ] = useState([]);
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //arr.push(color);
        setArr([...arr, color])
        console.log(arr);
    };

    const onChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div>
            <div>
                <form onSubmit={ handleSubmit }>
                    <label>Color</label>
                    <input type="text" name="color" onChange={onChange}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
            <div id="flex"> {
                arr.map( (item, i) => 
                    <div style={{backgroundColor: item}} id="style" height="300px" width="300px" key={ i }></div>
                )
            }</div>
        </div>
    );
}

export default BoxForm;