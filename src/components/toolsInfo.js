import React, { Component, Fragment } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  card: {
    marginBottom: 20,
  },
  media: {
    height: 100,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  largerIcon: {
    fontSize: '220%'
  },
  details: {
    marginTop: 20,
    color: theme.palette.text.secondary
  },
  marginTop: {
    marginTop: 40
  }
});

class ToolsInfo extends Component {
  state = {
    selected: ""
  };
  setVal = (val, field) => {
    this.setState({[field]: val});
  }
  render() {
    const classes = this.props.classes;
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container justify="center" direction="row" alignItems="center">
          <Grid item xs={11} sm={11} md={10} lg={10} xl={10}>
            <Icon className={classes.largerIcon} onClick={() => this.setState({selected: ""})}>keyboard_arrow_left</Icon>
          </Grid>
        </Grid>
        <Grid container justify="center" direction="row" alignItems="center">
          <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h1">{this.props.heading}</Typography>
                <Typography className={classes.title}>Headline about it!</Typography>
                <Typography className={classes.details}>
                 Details:
                </Typography>
                <Typography component="p">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                 ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                 mollit anim id est laborum.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  acronyms: state.acronyms
});

export default withStyles(styles)(ToolsInfo);