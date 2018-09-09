import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Character extends Component {
    render() {
        return (
            <Button variant="contained" color="primary">
                { this.props.data }
            </Button>
        );
    }
}

export default Character;
