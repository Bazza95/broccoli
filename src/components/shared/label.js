import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from  '@material-ui/core/styles';

const styles = theme => ({
    label: {
        marginBottom: 0,
        margin: theme.spacing.unit,
        transformOrigin: "top left",
        transform: "scale(0.75)",
        color: "rgba(0, 0, 0, 0.54)",
    }
});

class Label extends React.Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.label}>
                <label>
                    {this.props.text}
                </label>
            </div>
        );
    }
}

Label.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string,
};

export default withStyles(styles)(Label);