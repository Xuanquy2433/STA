import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { API_ADD_ORDER, API_GET_WALLET } from "../../utils/const";
import axios from "axios";

const Box = (props) => {

  const { price, name, imageURL, description, percentage, investMonth, id } = props

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  let token = localStorage.getItem("token");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [sta, setSta] = useState('');
  const order = async (id) => {
    console.log("ok ", id);
    console.log("ccc", id.price);

    try {
      if (price > sta) {
        toast.error("You don't have enough money", {
          autoClose: 2000
        })
      }
      else {
        const response = await axios.post(API_ADD_ORDER + token, { "productId": id })
        toast.success("Order success", {
          autoClose: 2000
        })
      }
      getUserSta()
      handleClose()

    } catch (error) {
      toast.error("Error API", {
        autoClose: 2000
      })
    }

  }
  
  const getUserSta = async () => {
    console.log(token);
    const response = await axios.post(API_GET_WALLET + token);
    console.log("sta ", response.data);
    if (response && response.status === 200) {
      setSta(response.data.sta);
    }
  }

  useEffect(() => {
    getUserSta()
  }, [])




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
            <Button onClick={() => order(id)} autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>


      </div>
    </div>
  );
};

export default Box;
