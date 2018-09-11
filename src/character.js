import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles  } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    }
});

class Character extends Component {
    render() {
        const { classes, checkCharacterPresence, data } = this.props;
        return (
            <Button disabled={data.disabled} onClick={() => checkCharacterPresence(data)}
                className={classes.button} variant="contained" color="primary">
                { data.text }
            </Button>
        );
    }
}

export default withStyles(styles)(Character);
