import React, { Component, Fragment } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card';
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
  },
  main: {
    fontWeight: '150%',
    fontSize: 38
  }
});

class Tools extends Component {
  state = {
    selected: "",
    toolsInfo: ""
  };
  setVal = (val, field) => {
    this.setState({[field]: val});
  }
  render() {
    const classes = this.props.classes;
    return (
        this.state.selected === "" ?
            <Grid container justify="center" direction="row" alignItems="center" className={classes.marginTop}>
              <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Grid container justify="center" direction="row" alignItems="center">
                  <Grid item xs={8} sm={8} md={5} lg={5} xl={5}>
                    <Typography variant="headline" component="h1" className={classes.main}>Important Tools</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card} onClick={() => this.setVal("resources", "selected")}>
                  <CardContent>
                    <Typography variant="headline" component="h1">Human Resources</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card} onClick={() => this.setVal("contacts", "selected")}>
                  <CardContent>
                    <Typography variant="headline" component="h1">Contacts</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card} onClick={() => this.setVal("tools", "selected")}>
                  <CardContent>
                    <Typography variant="headline" component="h1">Learning Tools</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        : this.state.toolsInfo !== "" ?
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container justify="center" direction="row" alignItems="center">
              <Grid item xs={11} sm={11} md={10} lg={10} xl={10}>
                <Icon className={classes.largerIcon} onClick={() => this.setState({toolsInfo: ""})}>keyboard_arrow_left</Icon>
              </Grid>
            </Grid>
            <Grid container justify="center" direction="row" alignItems="center">
              <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h1">{this.state.toolsInfo}</Typography>
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
                  <CardActions>
                    <Button raised color="primary">
                     Visit {this.state.toolsInfo}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        : this.state.selected === "resources" ?
          <Fragment>
            <Grid container justify="center" direction="row" alignItems="center">
              <Grid item xs={11} sm={11} md={10} lg={10} xl={10}>
                <Icon className={classes.largerIcon} onClick={() => this.setState({selected: ""})}>keyboard_arrow_left</Icon>
              </Grid>
            </Grid>
           <Grid container justify="center" direction="row" alignItems="center" className={classes.marginTop}>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card} onClick={() => this.setVal("Workday", "toolsInfo")}>
                  <CardMedia
                    className={classes.media}
                    image=""
                    title="WORKDAY"
                  />
                  <CardContent>
                    <Typography variant="headline" component="h1">WORKDAY</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card} onClick={() => this.setVal("Intranet Labor Claiming", "toolsInfo")}>
                  <CardMedia
                    className={classes.media}
                    image=""
                    title="ILC"
                  />
                  <CardContent>
                    <Typography variant="headline" component="h1">ILC</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card} onClick={() => this.setVal("PMP", "toolsInfo")}>
                  <CardMedia
                    className={classes.media}
                    image=""
                    title="PMP"
                  />
                  <CardContent>
                    <Typography variant="headline" component="h1">PMP</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card} onClick={() => this.setVal("CONCUR", "toolsInfo")}>
                  <CardMedia
                    className={classes.media}
                    image=""
                    title="CONCUR"
                  />
                  <CardContent>
                    <Typography variant="headline" component="h1">CONCUR</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Fragment>
        : this.state.selected === "contacts" ?
          <Fragment>
            <Grid container justify="center" direction="row" alignItems="center">
              <Grid item xs={11} sm={11} md={10} lg={10} xl={10}>
                <Icon className={classes.largerIcon} onClick={() => this.setState({selected: ""})}>keyboard_arrow_left</Icon>
              </Grid>
            </Grid>
           <Grid container justify="center" direction="row" alignItems="center" className={classes.marginTop}>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h1">Human Resources</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h1">Contacts</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h1">Learning Tools</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Fragment>
          : this.state.selected === "tools" ?
          <Fragment>
            <Grid container justify="center" direction="row" alignItems="center">
              <Grid item xs={11} sm={11} md={10} lg={10} xl={10}>
                <Icon className={classes.largerIcon} onClick={() => this.setState({selected: ""})}>keyboard_arrow_left</Icon>
              </Grid>
            </Grid>
             <Grid container justify="center" direction="row" alignItems="center" className={classes.marginTop}>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h1">Human Resources</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h1">Contacts</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="headline" component="h1">Learning Tools</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Fragment>
      : ""
    );
  }
}

const mapStateToProps = (state) => ({
  acronyms: state.acronyms
});

export default withStyles(styles)(Tools);