import React, { Component, Fragment } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

import Text from './shared/text';

import {connect} from 'react-redux';

const styles = theme => ({
  card: {
    marginBottom: 20,
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
  main: {
    fontWeight: '150%',
    fontSize: 38
  }
});

class CBD extends Component {
  state = {
    centerSearch: "",
    selected: ""
  };
  setVal = (val, field) => {
    this.setState({[field]: val});
  }
  render() {
    const classes = this.props.classes;
    let amt = 0;
    const matches = this.props.acronyms.Acronyms.map((acronym, i) => {
      if(acronym.FIELD1.toLowerCase().indexOf(this.state.centerSearch.toLowerCase()) !== -1 && amt < 5){
        amt++;
        return (
          <Grid item xs={10} sm={10} md={8} lg={8} xl={8} key={amt} onClick={() => this.setVal(acronym, "selected")}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h1">{acronym.FIELD1}</Typography>
                <Typography className={classes.title}>{acronym.FIELD2}</Typography>
                <Typography component="p">
                  {acronym.FIELD3}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      }
    });
    return (
      <Grid container justify="center" direction="row" alignItems="center">
        {
          this.state.selected === "" ?
            <Fragment>
              <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Grid container justify="center" direction="row" alignItems="center">
                  <Grid item xs={8} sm={8} md={5} lg={5} xl={5}>
                    <Typography variant="headline" component="h1" className={classes.main}>Knowledge Center</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                <Text
                  label="Search"
                  name="centerSearch"
                  val={this.state.centerSearch}
                  setVal={this.setVal}
                />
              </Grid>
            </Fragment>
        : ""
      }
      {
      this.state.centerSearch === "" ?
          <Fragment>
            <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="headline" component="h1">Trending Now</Typography>
                  <Typography component="p">
                    Placeholder Results
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="headline" component="h1">Most searched</Typography>
                  <Typography component="p">
                    Placeholder Results
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Fragment>
          : this.state.selected === "" && amt > 0?
            matches
          : amt === 0 ?
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <Typography variant="headline" component="h1">No results found!</Typography>  
          </Grid>
          :
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
                    <Typography variant="headline" component="h1">{this.state.selected.FIELD1}</Typography>
                    <Typography className={classes.title}>{this.state.selected.FIELD2}</Typography>
                    <Typography component="p">
                      {this.state.selected.FIELD3}
                    </Typography>
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
        }
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  acronyms: state.acronyms
});

export default connect(mapStateToProps, null)(withStyles(styles)(CBD));