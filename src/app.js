import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import randomWords from 'random-words';
import Grid from '@material-ui/core/Grid';
import { withStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Character from './character';
import RandomCharacter from './random-character';
import Image from './image';
import './app.css';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2
    },
    playAgainBtn: {
        marginTop: theme.spacing.unit * 2
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    }
});

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

class App extends Component {
    state = {
        hangmanStatus: 0,
        win: false,
        modalOpen: false,
        keyboardCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
            .map(character => {
                return {
                    text     : character,
                    disabled : false
                };
            }),
        randomWordCharacters: randomWords(
            {
                exactly   : 1,
                formatter : word => word.toUpperCase()
            }
        )[0].split('').map(elem => {
            return {
                character: elem,
                isHidden: true
            };
        })
    }

    checkCharacterPresence = elem => {
        const { randomWordCharacters } = this.state;
        const { text: characterText } = elem;

        this.setState(prevState => {
            return {
                keyboardCharacters: prevState.keyboardCharacters.map(elem => {
                    if(elem.text === characterText) {
                        return {
                            ...elem,
                            disabled: true
                        };
                    }
                    return elem;
                })
            };
        });

        if(randomWordCharacters.map(elem => elem.character).includes(characterText)) {
            // Character is found
            this.setState(prevState => {
                return {
                    randomWordCharacters: prevState.randomWordCharacters.map(elem => {
                        if(elem.character === characterText) {
                            return {
                                ...elem,
                                isHidden: false
                            };
                        }
                        return elem;
                    })
                };
            }, () => {
                if(this.checkIfFinished()) {
                    this.setState({
                        modalOpen: true,
                        win: true
                    });
                }
            });
        } else {
            // Character isn't found
            if(this.state.hangmanStatus !== 7) {
                this.setState(prevState => {
                    return {
                        hangmanStatus: prevState.hangmanStatus + 1
                    };
                });
            } else {
                this.setState({
                    win: false,
                    modalOpen: true
                });
            }
        }
    }

    checkIfFinished = () => {
        return this.state.randomWordCharacters.reduce((accum, curr) => {
            return accum && !curr.isHidden;
        }, true);
    }

    playAgain = () => {
        this.setState({
            hangmanStatus: 0,
            win: false,
            modalOpen: false,
            keyboardCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
            .map(character => {
                return {
                    text     : character,
                    disabled : false
                };
            }),
            randomWordCharacters: randomWords(
                {
                    exactly   : 1,
                    formatter : word => word.toUpperCase()
                }
            )[0].split('').map(elem => {
                return {
                    character: elem,
                    isHidden: true
                };
            })
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="app">
                <ul className="random-word">
                    {
                        this.state.randomWordCharacters.map((elem, index) =>
                            <RandomCharacter data={elem} key={index} />)
                    }
                </ul>

                <Paper className={classes.paper} elevation={1}>
                    <Grid container spacing={16}>
                        { this.state.keyboardCharacters.map((elem, index) =>
                            <Character
                                checkCharacterPresence={this.checkCharacterPresence} key={index} data={elem} />) }
                    </Grid>
                </Paper>

                <Image status={this.state.hangmanStatus} />

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.modalOpen}
                >
                    <div style={getModalStyle()} className={classes.modal}>
                        <Typography variant="title" color="error" id="modal-title">
                            {
                                this.state.win ? 'You win!' : 'You lose!'
                            }
                        </Typography>
                        <Button onClick={this.playAgain} variant="contained" color="primary" className={classes.playAgainBtn}>
                            Play again!
                        </Button>
                    </div>
                </Modal>

            </div>
        );
    }
}

export default withStyles(styles)(App);
