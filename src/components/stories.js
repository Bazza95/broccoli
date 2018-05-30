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

class Stories extends Component {
  state = {
    search: "",
    selected: ""
  };
  setVal = (val, field) => {
    this.setState({[field]: val});
  }
  render() {
    const classes = this.props.classes;
    const stories = 
        [
          {
            name: "Joe",
            title: "Thailand",
            story: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+ 
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
          },
          {
            name: "Sarah",
            title: "Project 3",
            story: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+ 
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
          },
          {
            name: "George",
            title: "Agile Training",
            story: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+ 
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
          },
          {
            name: "Gertha",
            title: "Project 5",
            story: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+ 
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
          },
          {
            name: "Belinda",
            title: "ATO",
            story: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+ 
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
          },
          {
            name: "Jason",
            title: "Medibank",
            story: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+ 
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
          },
          {
            name: "Josh",
            title: "Project 8",
            story: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+ 
            "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
          },
        ]
    let amt = 0;
    const matches = stories.map((story, i) => {
      if(story.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 && amt < 5){
        amt++;
        return (
          <Grid item xs={10} sm={10} md={8} lg={8} xl={8} key={amt} onClick={() => this.setVal(story, "selected")}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h1">{story.title}</Typography>
                <Typography className={classes.title}>{story.name}</Typography>
                <Typography component="p">
                  {story.story}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      }
    });
    return (
      <Grid container justify="center" direction="row" alignItems="center">
        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
          <Grid container justify="center" direction="row" alignItems="center">
            <Grid item xs={8} sm={8} md={5} lg={5} xl={5}>
              <Typography variant="headline" component="h1" className={classes.main}>Grad Stories</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <Text
            label="Search"
            name="search"
            val={this.state.search}
            setVal={this.setVal}
          />
        </Grid>
        { 
          this.state.selected === "" && amt > 0 ?
            matches
          : amt === 0 ?
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography variant="headline" component="h1">No results found!</Typography>  
              </Grid>
          : ""
        }
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  acronyms: state.acronyms
});

export default connect(mapStateToProps, null)(withStyles(styles)(Stories));