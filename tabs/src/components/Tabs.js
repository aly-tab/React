import React, { useState } from 'react';

const Tabs = props => {
    const [tab, setTab] = useState(props.tabs[0][1]);
    const onClickHandler = (e, value) => {
        setTab(value[1]);
    }

    return (
        <div> {
            props.tabs.map( (item, i) =>
                <button onClick = { (e) => onClickHandler(i, item) } key={i}>{item[0]}</button>
                )      
            } <div>
                <p>{tab}</p>
            </div> 
        </div>             
    )
}

export default Tabs;