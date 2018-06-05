import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Registration from './registration';
import Footer from './footer';

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: "calc(100vh - 76px - 72px)", // static navbar and footer
    },
    mainDash: {
        fontWeight: "bold",
        color: "hsla(0, 0%, 48%, 1)",
        textAlign: 'center'
    },
    button: {
        margin: theme.spacing.unit,
        textTransform: "none",
        color: "hsla(0, 0%, 48%, 1)"
    },
    subHeading: {
        color: "hsla(0, 0%, 48%, 1)"
    }
});

class Broccoli extends Component {
    state = {
        open: false
    };
    changeVal = (val, field) => {
        this.setState({[field]: val});
    };
    render() {
        const classes = this.props.classes;
        return (
            <Grid container className={classes.root} justify="center" alignItems="center" direction="row">
                <Grid item xs={10} sm={8} md={7} lg={7} xl={7}>
                    <Grid container justify="center" alignItems="center" direction="row">
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container justify="center" alignItems="center" direction="column">
                                <Grid item>
                                    <Typography variant="display2" gutterBottom className={classes.mainDash}>
                                        A better way to enjoy everyday.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography component="p" gutterBottom className={classes.subHeading}>
                                        Be the first to know when we launch.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        className={classes.button}
                                        onClick={() => this.changeVal(true, "open")}
                                    >
                                        Request an invite
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {
                    this.state.open ?
                    <Registration
                        open={this.state.open}
                        changeValue={this.changeVal}
                    />
                    : null
                }
                <Footer />
            </Grid>
        );
    }
}

export default withStyles(styles)(Broccoli);