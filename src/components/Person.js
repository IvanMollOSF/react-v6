import React from "react";

const Person = (props) => {
    return (
        <div>
            <h2 key="person-component-title">Person component</h2>
            <ul key="person-component-data">
                {
                    Object.keys(props).map(key => (
                        <li key={key}>
                            <span>{ key }: </span>
                            <span>{ props[key] }</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Person;
