import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import randomWords from 'random-words';
import Grid from '@material-ui/core/Grid';
import { withStyles  } from '@material-ui/core/styles';
import Character from './character';
import Image from './image';
import './app.css';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2
    }
});

class App extends Component {
    state = {
        hangmanStatus: 0,
        keyboardCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
            .map(character => {
                return {
                    text: character,
                    disabled: false
                };
            }),
        randomWordCharacters: randomWords(
            {
                exactly: 1,
                formatter: word => word.toUpperCase()
            }
        )[0].split('')
    }

    checkCharacterPresence = elem => {
        const { randomWordCharacters } = this.state;
        const { text: characterText } = elem;
        // this.setState({

        // });
        // if(randomWordCharacters.includes(characterText)) {

        // }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="app">
                <ul className="random-word">
                    {
                        this.state.randomWordCharacters.map((elem, index) => <li key={index}>{elem}</li>)
                    }
                </ul>

                <Paper className={classes.paper} elevation={1}>
                    <Grid container spacing={16}>
                        { this.state.keyboardCharacters.map((elem, index) =>
                            <Character checkCharacterPresence={this.checkCharacterPresence} key={index} data={elem} />) }
                    </Grid>
                </Paper>

                <Image status={this.state.hangmanStatus} />

            </div>
        );
    }
}

export default withStyles(styles)(App);
