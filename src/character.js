import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles  } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});

class Character extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Button className={classes.button} variant="contained" color="primary">
                { this.props.data }
            </Button>
        );
    }
}

export default withStyles(styles)(Character);
