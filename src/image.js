import React from 'react';
import Grid from '@material-ui/core/Grid';
import hangman from './man.png';
import { withStyles  } from '@material-ui/core/styles';

const styles = () => ({
    imageContainer: {
        width: 75,
        height: 180,
        backgroundImage: `url(${hangman})`,
        backgroundRepeat: 'no-repeat',
        margin: '20px auto'
    }
});

const Image = ({ ...props }) => {
    const { classes } = props;
    return (
        <div className={styles.base}>
            <Grid container justifycontent="center" alignItems="center" className={classes.imageContainer}
                style={{
                    backgroundPosition: `${((props.status - 1) * -1) * 75}px`
                }}
            />
        </div>
    );
};

export default withStyles(styles)(Image);

