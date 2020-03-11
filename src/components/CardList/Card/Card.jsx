import React, { Component } from 'react';
import styles from './Card.module.scss';
import Stats from './Stats';
import classNames from 'classnames';

export default class Card extends Component {
    styleChecker = () => {
        if (this.props.pokeData.type === "Dark") {
            console.log("dark")
            return {backgroundColor: "#FF0000"}
        } else {
            console.log("normal")
            return {}
        }
    }

    render() {
        return (
            <div>
                <figure className={styles.card} style={{backgroundColor: "#FF0000"}}>
                    <div className={styles.card__image_container}>
                        <img src={this.props.pokeData.image} className={styles.card__image} />
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
            </div>
        )
    }
}
