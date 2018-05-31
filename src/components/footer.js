import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    footer: {
        left: 0,
        bottom: 0,
        height: '60',
        display: 'inline-block',
        position: 'fixed',
        width: '100%',
        borderTop: "2px solid hsla(0, 0%, 68%, 0.8)"
    },
    footerText: {
        color: "hsla(0, 0%, 48%, 1)",
    }
};

class Footer extends React.Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.footer}>
                <Grid container justify="center" alignItems="flex-start" direction="row">
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Grid container justify="center" alignItems="center" direction="row">
                            <Grid item>
                                <Typography className={classes.footerText} style={{marginTop: 15}}>
                                    Made with &hearts; in Melbourne.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Grid container justify="center" alignItems="center" direction="row">
                            <Grid item>
                                <Typography className={classes.footerText} style={{marginBottom: 15}}>
                                    &copy; Broccoli & Co. All Rights Reserved.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Footer.Proptypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);