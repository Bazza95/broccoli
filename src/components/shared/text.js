import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = {
    form: {
        margin: 20
    }
};

class Text extends React.Component {
    state = {
        errorText: "",
        error: false
    };
    validate = (val, name) => {
        let errorText = "";
        let error = false;
        if(val.length > this.props.max){
            errorText = "The maximum length allowed is " + this.props.max;
            error = true;
        }else if(val.length < this.props.min){
            errorText = "The minimum length required is " + this.props.min;
            error = true;
        }else if(val.length === 0 && this.props.required){
            errorText = "This field is required";
            error = true;
        }
        this.setState({errorText: errorText});
        this.setState({error: error});
        val = this.props.number ? Number(val) : val;
        this.props.setVal(val, name, this.props.arrIndex);
    };
    render(){
        const {classes, create, edit, error} = this.props;
        return (
            <div className={create || edit ? classes.form : ""}>
                <TextField
                    id={this.props.name}
                    label={this.props.label}
                    type={this.props.type}
                    disabled={this.props.disabled}
                    InputLabelProps={{
                        shrink: true
                    }}
                    value={this.props.val ? this.props.val : ""}
                    onChange={e => this.validate(e.target.value, this.props.name)}
                    required={this.props.required}
                    fullWidth
                    error={this.state.error || error}
                    minLength={this.props.min ? this.props.min : 0}
                    maxLength={this.props.max ? this.props.max : 100}
                    multiline={this.props.multiline}
                    rowsMax={this.props.rows}
                    placeholder={this.props.placeholder}
                    style={this.props.styling}
                    margin="dense" // Taking up too much space, so make as small as is vertically possible
                />
                <FormHelperText>
                    {
                        error ? this.props.errorText :
                        this.state.error ? this.state.errorText :
                        this.props.required ? "This field is required" :
                        this.props.helperText
                    }
                </FormHelperText>
            </div>
        )
    }
}

Text.propTypes = {
    val: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
    ]),
    setVal: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    helperText: PropTypes.string,
    error: PropTypes.bool,
    errorText: PropTypes.string,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
    number: PropTypes.bool,
    arrIndex: PropTypes.number, // In the case that the parent component is dealing with arrays
    styling: PropTypes.object
};

export default withStyles(styles)(Text);