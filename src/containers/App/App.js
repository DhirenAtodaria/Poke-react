import React from 'react';
import styles from './App.module.scss';
import SearchBar from '../../components/SearchBar';
import CardList from '../../components/CardList';

export default function App() {
    return (
        <main className={styles.container}>
            <h1>Pokedex</h1>
            <CardList />
        </main>
    )
}