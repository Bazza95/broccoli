import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';

import Text from './shared/text';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        textTransform: "none",
        color: "hsla(0, 0%, 48%, 1)"
    },
});

class RegistrationDialog extends React.Component {
    state = {
        email: "",
        confirmEmail: "",
        fullName: ""
    };
    changeVal = (value, field) => {
        this.props.changeValue(value, field);
    };

    changeFormValue = (value, field) => {
        this.setState({[field]: value});
    };

    toggle = () => {
        this.changeVal(!this.props.open, "open");
    };

    render() {
        const classes = this.props.classes;
        return (
            <Dialog
                open={this.props.open}
                onClose={this.toggle}
            >
                <DialogContent>
                    <DialogContentText style={{textAlign: "center"}}>
                        Request an invite
                    </DialogContentText>
                    <Divider style={{margin: "15px 0", height: 3}} />
                    <Text
                        val={this.state.fullName}
                        label="Full Name"
                        name="fullName"
                        setVal={this.changeFormValue}
                    />

                    <Text
                        val={this.state.email}
                        type="email"
                        label="Email"
                        name="email"
                        setVal={this.changeFormValue}
                    />
                    <Text
                        val={this.state.confirmEmail}
                        type="email"
                        label="Confirm Email"
                        name="confirmEmail"
                        setVal={this.changeFormValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={this.toggle}
                        fullWidth
                        className={classes.button}>
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

RegistrationDialog.propTypes = {
    open: PropTypes.bool,
    email: PropTypes.string,
    confirmEmail: PropTypes.string,
    fullName: PropTypes.string,
    changeValue: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(RegistrationDialog);