import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
});

class Snack extends React.Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.props.setVal(false, "open");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.props.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Feedback Sent</span>}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Snack);