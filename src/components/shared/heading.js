import React from 'react';
import {withStyles} from  'material-ui/styles';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    typography: {
        marginBottom: 12,
        margin: theme.spacing.unit,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: theme.palette.text.secondary
    }
});

class Heading extends React.Component{
    render(){
        const props = this.props;
        const {classes} = props;
        return (
            <Typography type={props.type} className={classes.typography} component={props.component} style={props.styling}>
                {props.content}
            </Typography>
        );
    }
}

Heading.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.string,
    type: PropTypes.string,
    styling: PropTypes.object,
    component: PropTypes.string
};

export default withStyles(styles)(Heading);