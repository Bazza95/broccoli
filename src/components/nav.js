/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import classNames from 'classnames';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css';

const styles = theme => ({
    root: {
        width: '100%',
        zIndex: 99
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
        color: "#FFF"
    },
    responsiveNavItem: {
        margin: "0 auto"
    },
    fullWidthLink: {
        width: "100%"
    },
    button: {
        color: "#FFF"
    },
    lighter: {
      fontWeight: "lighter"
    },
    logo: {
        marginLeft: 100,
        color: "hsla(0, 0%, 48%, 1)",
        fontWeight: "bold"
    }
});

class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            responsiveOpen: false,
            windowWidth: $(window).width(),
            breakingWidth: this.checkScrollbar()
        };
    }

    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);
    };

    updateDimensions = () => {
        // If the width of the window is larger than the responsive breakpoint, close the responsive nav
        this.setState({windowWidth: $(window).width()}, () => {
            this.state.windowWidth > 992 ? this.setState({responsiveOpen: false}) : "";
        });
        this.setState({breakingWidth: this.checkScrollbar()});
    };

    checkScrollbar = () => {
       return (document.documentElement.scrollHeight !== document.documentElement.clientHeight) ?
            992 - 17: 992;
    };

    responsiveToggle = () => {
        this.setState({responsiveOpen: !this.state.responsiveOpen});
    };

    render() {
        const classes = this.props.classes;
        // This changes the nav color as well as the title of the page
        let page = this.props.route;
        return (
            <div className={classes.root}>
                <Navbar
                    color="light"
                    light
                    className={classNames("fixed-top")}
                    expand="lg"
                    style={{borderBottom: "2px solid hsla(0, 0%, 68%, 0.8)"}}
                >
                    <NavbarBrand tag={Link} to="/">
                        <Typography type="title" color="inherit" 
                          className={classNames({
                            [classes.flex]: true,
                            [classes.logo]: true
                          })}
                        >
                          BROCCOLI & CO.
                        </Typography>
                    </NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

MainNav.Proptypes = {
    classes: PropTypes.object.isRequired,
    route: PropTypes.string
};

export default withStyles(styles)(MainNav);
