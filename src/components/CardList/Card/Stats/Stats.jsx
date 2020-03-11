import React, { Component } from 'react';
export default class Stats extends Component {

    correctionFunction(word) {
        switch(word) {
            case "hp":
                return "HP"
                break;
            case "attack":
                return "Attack";
                break;
            case "defense":
                return "Defense";
                break;
            case "sa":
                return "Special Attack";
                break;
            case "sd":
                return "Special Defense";
                break;
            case "speed":
                return "Speed";
                break;
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
