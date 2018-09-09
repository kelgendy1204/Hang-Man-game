import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles  } from '@material-ui/core/styles';
import Character from './character';
import './App.css';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2
    }
});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="app">
                <ul className="random-word">
                    <li>r</li>
                    <li>a</li>
                    <li>n</li>
                    <li>d</li>
                    <li>o</li>
                    <li>m</li>
                    <li>w</li>
                    <li>o</li>
                    <li>r</li>
                    <li>d</li>
                </ul>

                <Paper className={classes.paper} elevation={1}>
                    <Grid container spacing={16}>
                        { 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(elem => <Character data={elem} />) }
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(App);
