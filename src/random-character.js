import React, { Component } from 'react';

class RandomCharacter extends Component {
    render() {
        const { data } = this.props;
        return (
            <li>{!data.isHidden && data.character}</li>
        );
    }
}

export default RandomCharacter;
