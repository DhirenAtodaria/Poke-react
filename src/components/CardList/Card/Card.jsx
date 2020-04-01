import React, { Component } from 'react';
import styles from './Card.module.scss';
import Stats from './Stats';
import Tilt from 'react-parallax-tilt';

export default class Card extends Component {
    styleChecker = () => {
        switch(this.props.pokeData.type) {
            case "Dark":
                return styles.dark
            case "Water":
                return styles.water
            case "Electric":
                return styles.electric
            case "Fire":
                return styles.fire
            case "Psychic":
                return styles.psychic
            case "Grass":
                return styles.grass
            case "Ice":
                return styles.ice
            case "Fighting":
                return styles.fighting
            case "Dragon":
                return styles.dragon
            default:
                return styles.card
        }
    }

    render() {
        return (
            <Tilt scale={1.15} transitionSpeed={1000}>
                <figure className={`${styles.card} ${this.styleChecker()}`}>
                    <div className={styles.card__image_container}>
                        <img src={this.props.pokeData.image} alt="poke" className={styles.card__image} />
                    </div>

                    <figcaption className={styles.card__caption}>
                        <h1 className={styles.card__name}>{this.props.pokeData.name}</h1>
                        <h3 className={styles.card__type}>
                            {this.props.pokeData.type}
                        </h3>
                        <table className={styles.card__stats}>
                            <Stats statsData={this.props.pokeData.stats} />
                        </table>

                        <div className={styles.card__abilities}>
                            <h4 className={styles.card__ability}>
                                <span className={styles.card__label}>Ability</span>
                                {this.props.pokeData.ability}
                                </h4>
                            <h4 className={styles.card__ability}>
                                <span className={styles.card__label}>Hidden Ability</span>
                                {this.props.pokeData.hiddenability}
                                </h4>
                        </div>
                    </figcaption>
                </figure>
            </Tilt>
        )
    }
}
