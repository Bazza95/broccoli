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
          <Link to="/knowledgeCenter">
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h1">Knowledge Center</Typography>
                <Typography component="p">
                  This is stuff about acronyms
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
          <Link to="/tools">
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h1">Important Tools</Typography>
                <Typography component="p">
                  This is stuff about tools
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={10} sm={10} md={5} lg={5} xl={5}>
          <Link to="/stories">
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h1">Grad Stories</Typography>
                <Typography component="p">
                  This is stuff about grad stories
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CBD);