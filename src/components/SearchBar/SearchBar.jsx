import React, { Component } from 'react'
import styles from './SearchBar.module.scss';
import TextField from '@material-ui/core/TextField';


export default class SearchBar extends Component {
    render() {
        return (
            <form className={styles.root} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Search" 
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    margin="normal"
                    value={this.props.searchText}
                    onChange={this.props.searchFilterFunction}
                    />
            </form>
        )
    }
}