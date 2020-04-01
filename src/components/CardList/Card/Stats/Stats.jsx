import React, { Component } from 'react';
export default class Stats extends Component {

    correctionFunction(word) {
        switch(word) {
            case "hp":
                return "HP"
            case "attack":
                return "Attack";
            case "defense":
                return "Defense";
            case "sa":
                return "Special Attack";
            case "sd":
                return "Special Defense";
            case "speed":
                return "Speed";
            default:
                return word;
        }
    }

    render() {
        return (
            <tbody>
                {Object.entries(this.props.statsData).map((stat, index) => (
                    <tr key={index}>
                        <th>{this.correctionFunction(stat[0])}</th>
                        <td>{stat[1]}</td>
                    </tr>
                ))}
            </tbody>
        )
    }
}
