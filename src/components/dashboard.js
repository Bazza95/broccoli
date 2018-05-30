import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

const styles = theme => ({
  card: {
    marginBottom: 20,
  },
  marginTop: {
    marginTop: 100
  }
});

class CBD extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Grid container justify="center" direction="row" alignItems="center" className={classes.marginTop}>
        <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
        </Grid>
        <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CBD);