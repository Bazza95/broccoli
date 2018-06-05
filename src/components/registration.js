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
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

import Text from './shared/text';

import {sendInviteRequest} from '../actions/';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        textTransform: "none",
        color: "hsla(0, 0%, 48%, 1)"
    },
    progress: {
        margin: `0 ${theme.spacing.unit * 2}px`,
        color: "#00F"
    },
});

const initialState = {
    email: "",
    confirmEmail: "",
    fullName: "",
    validationError: ""
};

class Registration extends React.Component {
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
            this.setState({validation: false})
        }else{
            this.setState({validation: true});
        }
    };

    // Validates against an email regex
    // This would ideally be moved into a separate Email textfield component using react-text-mask
    // But for the purpose of this test I will leave it with the rest of the similar business logic
    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    // Checks errors with data integrity, returns error to user.
    validateForm = () => {
        let error;
        if(this.state.fullName.length < 3){
            error = "Name must be at least 3 characters long.";
        }else if(this.state.email === ""){
            error = "'Email' must be provided";
        }else if(this.state.confirmEmail === ""){
            error = "'Confirm Email' must be provided";
        }else if(this.state.email !== this.state.confirmEmail){
            error = "'Confirm Email' field and 'Email' field must be the same";
        }else if(!this.validateEmail(this.state.email)){
            error = "Not a valid email address."
        }else {
            this.setState({pending: true});
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
                maxWidth="xs"
                fullWidth
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
                                        <Typography style={{fontWeight: "bold", color: "#D00", wordWrap: "inherit"}} component="h4">
                                            {this.state.validationError}
                                        </Typography>
                                    : null
                                }
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    variant="outlined"
                                    onClick={() => this.validateForm()}
                                    fullWidth
                                    className={classes.button}
                                >
                                    {
                                        this.state.pending ?
                                            <CircularProgress thickness={7} className={classes.progress} size={25} />
                                        : this.state.validation ?
                                            <Icon>check_circle</Icon>
                                        : "Send"
                                    }
                                </Button>
                            </DialogActions>
                        </Fragment>
                }
        </Dialog>
        );
    }
}

Registration.propTypes = {
    open: PropTypes.bool,
    changeValue: PropTypes.func,
    classes: PropTypes.object
};

export default withStyles(styles)(Registration);