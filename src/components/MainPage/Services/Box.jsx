import React from "react";
import { Link } from "react-scroll";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Box = (props) => {

  const { price, name, imageURL, description, percentage, investMonth, onclick } = props

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onclicks = () => {
    handleClose()
    onclick()
  };


  console.log("imageeeeeeeeeeeeeeeeeeee ", imageURL);
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={imageURL} alt={props.alt} />
      </div>
      <h2 style={{ textAlign: 'center' }}>{name}</h2>
      <div className="s-b-text">

        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  {percentage} %
        </p>

        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  {investMonth} Month
        </p>
        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  {description}
        </p>

        <button variant="outlined" onClick={handleClickOpen} style={{ color: 'white' }} className="cv-btn btnHover">
          {price} STA
        </button>

        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open responsive dialog
        </Button> */}
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Are you sure ?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you really want to buy product {name} with {price} STA ? This process cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={onclicks} autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>


      </div>
    </div>
  );
};

export default Box;
