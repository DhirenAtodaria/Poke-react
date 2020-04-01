import React, { Component } from 'react';
import styles from './CardList.module.scss';
import Card from './Card';
import { firestore } from "../../firebase";
import SearchBar from '../SearchBar';

export default class CardList extends Component {
    state = {
        pokemon: [],
        searchText: "",
        filteredPoke: []
    }

    componentDidMount() {
        firestore
            .collection("pokemon")
            .get()
            .then((query) => {
                const pokemon = query.docs.map(doc => doc.data());
                this.setState({ pokemon: pokemon,
                                filteredPoke: pokemon
                             })
            });
    }

    searchFilterFunction = (event) => {
        const searchText = event.target.value;
        this.setState({searchText}, this.filterPoke);
    }

    filterPoke = () => {
        let filteredPoke = this.state.pokemon.filter(poke => {
            return poke.name.toUpperCase().includes(this.state.searchText.toUpperCase())
        })
        this.setState({filteredPoke})
    }

    render() {
        return (
            <div>
                <SearchBar searchText={this.state.searchText} searchFilterFunction={this.searchFilterFunction}/>
                <section className={styles.Cardgrid}>
                    {this.state.filteredPoke.map((pokemon, index) => (
                    <Card key={index} pokeData={pokemon} />
                    ))}
                </section>
            </div>
        )
    }
}