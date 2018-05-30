import React, { Component, Fragment } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Text from './shared/text';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import Select from 'material-ui/Select';

import Snack from './snackbar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  fullWidth: {
    width: '100%'
  },
  main: {
    fontWeight: '150%',
    fontSize: 38
  }
});

const initialState = {
  send: "",
  message: "",
  open: false
}

class Feedback extends Component {
  state = initialState;
  setVal = (val, field) => {
    this.setState({[field]: val});
  }
  submit = () => {
    this.setVal(true, "open");
    setTimeout(() => this.setState(initialState), 3000);
  };
  render(){
    const classes = this.props.classes;
    return (
      <Grid container justify="center" direction="row" alignItems="center">
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <Grid container justify="center" direction="row" alignItems="center">
            <Grid item xs={8} sm={8} md={5} lg={5} xl={5}>
              <Typography variant="headline" component="h1" className={classes.main}>Send Feedback</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="send">Send To</InputLabel>
            <Select
              value={this.state.send}
              onChange={(e) => this.setVal(e.target.value, "send")}
              inputProps={{
                name: 'send',
                id: 'send',
              }}
            >
              <MenuItem value="">General</MenuItem>
              <MenuItem value={1}>Coordinator 1</MenuItem>
              <MenuItem value={2}>Coorindator 2</MenuItem>
              <MenuItem value={3}>Coorindator 3</MenuItem>
              <MenuItem value={4}>Coorindator 4</MenuItem>
              <MenuItem value={5}>App</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <Text multiline rows={6} name="message" val={this.state.message} setVal={this.setVal} />
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <Button className={classes.fullWidth} raised color="primary" onClick={this.submit}>
            Submit
          </Button>
        </Grid>
      {
        this.state.open ? 
          <Snack open={this.state.open} setVal={this.setVal} />
        : ""
      }
      </Grid>
    );
  }
}

export default withStyles(styles)(Feedback);