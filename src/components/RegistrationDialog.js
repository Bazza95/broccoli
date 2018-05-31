import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider';

import Text from './shared/text';

import {sendInviteRequest} from '../actions/';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        textTransform: "none",
        color: "hsla(0, 0%, 48%, 1)"
    },
});

const initialState = {
    email: "",
    confirmEmail: "",
    fullName: "",
    validationError: ""
};

class RegistrationDialog extends React.Component {
    state = initialState;
    changeVal = (value, field) => {
        this.props.changeValue(value, field);
    };

    changeFormValue = (value, field) => {
        this.setState({[field]: value});
    };

    toggle = () => {
        this.changeVal(!this.props.open, "open");
    };

    checkServerResponse = (response) => {
        if(response.hasOwnProperty('errorMessage')){
            this.setState({validationError: response.errorMessage});
        }else{
            this.setState({validation: true});
        }
    };

    validateForm = () => {
        let error = "";
        if(this.state.email === ""){
            error += "Email must be provided";
        } else if(this.state.fullName === ""){
            error += "Full name must be provided";
        } else if(this.state.email !== this.state.confirmEmail){
            error += "Confirm Email field and Email field must be the same";
        }else {
            sendInviteRequest({
                name: this.state.fullName,
                email: this.state.email
            }, (response) => this.checkServerResponse(response));
        }
        if(error !== ""){
            this.setState({validationError: error})
        }
    };

    render() {
        const classes = this.props.classes;
        return (
            <Dialog
                open={this.props.open}
                onClose={this.toggle}
            >
                {
                    this.state.validation ?
                        <Fragment>
                            <DialogContent>
                                <DialogContentText style={{textAlign: "center"}}>
                                    All Done!
                                </DialogContentText>
                                <Divider style={{margin: "15px 0", height: 3}}/>
                                <Typography component="p">
                                    You will be one of the first to experience Broccoli & Co. when we launch.
                                </Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    variant="outlined"
                                    onClick={() => {this.setState(initialState);this.toggle();}}
                                    fullWidth
                                    className={classes.button}
                                >
                                    OK
                                </Button>
                            </DialogActions>
                        </Fragment>
                        :
                        <Fragment>
                            <DialogContent>
                                <DialogContentText style={{textAlign: "center"}}>
                                    Request an invite
                                </DialogContentText>
                                <Divider style={{margin: "15px 0", height: 3}}/>
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
                                {
                                    this.state.validationError !== "" ?
                                        this.state.validationError : null
                                }
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    variant="outlined"
                                    onClick={() => this.validateForm()}
                                    fullWidth
                                    className={classes.button}>
                                    Send
                                </Button>
                            </DialogActions>
                        </Fragment>
                }
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