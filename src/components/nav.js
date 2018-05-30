/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import classNames from 'classnames';
import $ from 'jquery';

import {connect} from 'react-redux';

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
    centeredLogo: {
        marginLeft: "40%"
    },
    largerLogo: {
        fontSize: "130%",
        fontWeight: "bold",
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
                    dark
                    style={{backgroundColor: "#00F"}}
                    className={classNames("fixed-top")}
                    expand="lg"
                >
                    <NavbarBrand tag={Link} to="/" className={classNames({
                        [classes.centeredLogo]: this.state.windowWidth < 992, "mr-auto": true})}>
                        <Typography type="title" color="inherit" 
                          className={classNames({
                            [classes.flex]: true,
                            [classes.largerLogo]: true
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
