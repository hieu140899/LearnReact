import React, { Component } from "react";

// const Person = () => {
//     return <p>Hisu testing... {Math.floor(Math.random() * 10)}</p>;
// };

const Person = (props) => {
    return (
        <div className="Couple">
            <p onClick={props.click1}>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

// class Person extends Component {
//     render() {
//         return (
//             <div className="Couple">
//                 <p>Name: {this.props.name}</p>
//                 <p>Age: {this.props.age}</p>
//             </div>
//         );
//     }
// }

export default Person;