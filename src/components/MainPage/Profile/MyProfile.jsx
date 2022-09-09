import React, { useEffect, useState } from 'react'
import './Myprofile.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputBase from '@mui/material/InputBase';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { API_ADD_REQUEST, API_BUY_STA, API_GET_CATEGORY, API_GET_REQUEST, API_GET_WALLET, API_LOG_USER, API_POST_ORDER, API_POST_PRODUCT, API_SEND_STA, API_UPDATE_REQUEST, API_WITHDRAW_REQUEST } from '../../utils/const';
import CurrencyFormat from 'react-currency-format';
import { TextField } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function MyProfile() {

    let showName
    let firstName
    let lastName
    let email
    let role
    let userID
    if (localStorage.getItem("user")) {
        let dataUser = localStorage.getItem("user");
        firstName = JSON.parse(dataUser).userDataDto.firstName
        lastName = JSON.parse(dataUser).userDataDto.lastName
        email = JSON.parse(dataUser).userDataDto.email
        role = JSON.parse(dataUser).userDataDto.role
        userID = JSON.parse(dataUser).userDataDto.id
        showName = firstName + " " + lastName
    }
    let token = localStorage.getItem("token");
    const [randomSave, setRandomSave] = useState((Math.random() + 1).toString(36).substring(7));
    const [dataUser, setDataUser] = useState({
        "message": email + " [" + randomSave + "]",
        "money": '',
        "type": "deposit",
        "status": "pending",
    });

    // recharge money
    const addRequest = async (e) => {
        e.preventDefault();
        if (dataUser.money < 10000) {
            toast.warning("Minimum recharge 10000", {
                autoClose: 3000
            })
        } else {
            const response = await axios.post(API_ADD_REQUEST + token, dataUser);
            toast.success('Send success, waiting for confirmation', {
                autoClose: 3000
            })
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }
    }

    // buy sta
    const [money, setMoney] = useState('');
    const [dataBuy, setDataBuy] = useState({
        sta: "",
        token: token
    })
    const checkSTA = money / 10000
    const buySTA = async (e) => {
        e.preventDefault()
        if (dataBuy.sta > checkSTA) {
            toast.warning("You don't have enough money", {
                autoClose: 2000
            })
            getUserSta()
        } else {
            const response = await axios.put(API_BUY_STA + "?sta=" + dataBuy.sta + "&token=" + dataBuy.token)
            toast.success('Buy success', {
                autoClose: 2000
            })
            getUserSta()
        }
    }

    // send sta
    const [sta, setSta] = useState('');
    const [sendData, setSendData] = useState({
        receiver: "",
        sta: "",
        token: token
    })
    const sendSTA = async (e) => {
        console.log("cc ", sendData);
        e.preventDefault()
        if (sendData.receiver === email) {
            toast.error("You can't transfer money to yourself", {
                autoClose: 2000
            })
            getUserSta()
        } else if (sendData.sta === '') {
            toast.error("Please enter money", {
                autoClose: 2000
            })
            getUserSta()
        }
        else if (sendData.receiver === '') {
            toast.error("Please enter email", {
                autoClose: 2000
            })
            getUserSta()
        } else if (sendData.sta > sta) {
            toast.error("You don't have enough money", {
                autoClose: 2000
            })
            getUserSta()
        }
        else {
            const response = await axios.put(API_SEND_STA + "?receiver=" + sendData.receiver + "&sta=" + sendData.sta + "&token=" + sendData.token)
            toast.success('Send success', {
                autoClose: 2000
            })
            getUserSta()
        }
    }

    const onChangeText = (event) => {
        console.log('onChangeText', event)
        setSendData({ ...sendData, [event.target.name]: event.target.value })
    }

    const getUserSta = async () => {
        console.log(token);
        const response = await axios.post(API_GET_WALLET + token);
        console.log("sta ", response.data);
        if (response && response.status === 200) {
            setSta(response.data.sta);
            setMoney(response.data.money)
        }
    }


    const [order, setOrder] = useState([]);

    const getOrder = async (e) => {
        const response = await axios.post(API_POST_ORDER + token)
        setOrder(response.data)
    }

    const [logUser, setLogUser] = useState([]);
    const getLogUser = async (e) => {
        const response = await axios.get(API_LOG_USER + token)
        setLogUser(response.data)

    }

    //withdraw
    const [dataWithdraw, setDataWithdraw] = useState({
        "message": '',
        "money": '',
        "type": "withdraw",
        "status": "pending",
    });
    const withdraw = async (e) => {
        e.preventDefault();
        const response = await axios.post(API_WITHDRAW_REQUEST + token, dataWithdraw);
        toast.success('Send withdraw money success, waiting for confirmation', {
            autoClose: 3000
        })
    }

    const navigate = useNavigate();
    useEffect(() => {
        let dataUser = localStorage.getItem("user");
        console.log(dataUser);
        if (dataUser === null || JSON.parse(dataUser).userDataDto.role !== 'user') {
            navigate('/')
        }
        getUserSta();
        getOrder()
        getLogUser()
    }, []);
    return (
        <Box className='profile-container' sx={{ flexGrow: 1 }}>
            <div style={{ marginTop: '20px' }} className='showMoney'>
                <span className='span1'>{sta} <PaidIcon style={{ color: 'gold' }} /> </span>
                <CurrencyFormat className='span2' value={money} displayType={'text'} suffix=" VNĐ" thousandSeparator={true} />
                <Button data-toggle="modal" data-target="#transfer" style={{ backgroundColor: '#e53935', color: 'white', marginLeft: '30px', marginRight: '-50px', borderRadius: '20px' }} variant="Transfer money">Transfer money</Button>

                <div class="modal fade" id="transfer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div style={{ marginTop: '160px' }} class="modal-dialog" role="document">
                        <div class="modal-content">
                            <h2 style={{ textAlign: 'center', margin: '10px 0px 30px 0px' }} >Transfer money</h2>
                            <div class="modal-body">
                                <form method='PUT' class="form-inline">
                                    <div class="form-group mb-2">
                                        <label for="money" class="sr-only">STA</label>
                                        <input min={'1'} onChange={onChangeText} type="number" name="sta" class="form-control" id="money" placeholder="Enter the money" />
                                    </div>
                                    <div><i style={{ fontSize: '1.8em', marginLeft: '18px', marginRight: '2px' }} class="fa-solid fa-arrow-right-long"></i></div>
                                    <div class="form-group mx-sm-3 mb-2">
                                        <label for="idUser" class="sr-only">Email</label>
                                        {/* <input onChange={onChangeText}  name="token" type="text" class="form-control" id="idUser" placeholder="Token" /> */}
                                        <input onChange={onChangeText} name="receiver" type="text" class="form-control" id="idUser" placeholder="Email" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <p style={{ marginRight: '100px', fontWeight: '500' }} >You have <span style={{ color: 'gold' }}>{sta} STA</span></p>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={sendSTA} type="submit" data-dismiss="modal" class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <Grid style={{ marginTop: '20px', padding: '10px' }} container spacing={8}>
                <Grid item xs={4}>
                    <div className="profile-container-information">
                        <div className="profile-container-information-flex">
                            <div className='profile-container-information-avatar'>
                                <Stack direction="row" spacing={2}>
                                    <Avatar src="https://i.ytimg.com/vi/nfIovkRiHtU/maxresdefault.jpg" />
                                </Stack>
                            </div>
                            <div className="profile-container-information-desc">
                                <div className="profile-container-information-desc-name">
                                    {showName}
                                </div>
                                <div className="profile-container-information-desc-phone">
                                    <PhoneIcon />&nbsp;
                                    0378583429
                                </div>
                                <div className="profile-container-information-desc-email">
                                    <EmailIcon /> &nbsp; {email}
                                </div>
                            </div>
                        </div>

                        <div className="profile-container-information-address">
                            <span>Address : &nbsp; &nbsp; </span>  49 Nguyễn Trãi, Buôn Ma Thuột
                        </div>
                        <div className="profile-container-information-lastLog">
                            <span>Last Log : &nbsp; &nbsp; </span>  Thursday September 8, 2022  10:pm

                        </div>
                        <div className="profile-container-information-icon">
                            <i style={{ cursor: 'pointer' }} class="fa-brands fa-square-facebook"></i>
                            <i style={{ cursor: 'pointer' }} class="fa-brands fa-square-twitter"></i>
                            <i style={{ cursor: 'pointer' }} class="fa-brands fa-square-youtube"></i>
                            <i style={{ cursor: 'pointer' }} class="fa-brands fa-square-google-plus"></i>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={4} sx={{ display: "flex" }}>
                    <div className="profile-container-wallet">
                        <div className="profile-container-wallet-title">
                            Wallet
                            {/* <div style={{ textAlign: 'center',marginTop: '10px' }} >
                                <div style={{fontSize: '0.6em'}} >
                                    AVAILABLE  STA
                                </div>
                                <div style={{fontSize: '0.9em'}} >
                                    10.000.000
                                </div>
                            </div> */}
                        </div>

                        <div className="profile-container-wallet-available">
                            <div style={{ width: "50%" }} className="profile-container-wallet-available-flex-left">
                                <div className="profile-container-wallet-available-sta">
                                    STA
                                </div>
                                <div className="profile-container-wallet-sta">
                                    10.000.000
                                </div>
                            </div>
                            <div style={{ width: "50%" }} className="profile-container-wallet-available-flex-right">
                                <div className="profile-container-wallet-available-money">
                                    Money
                                </div>
                                <div className="profile-container-wallet-sta">
                                    10.000.000
                                </div>
                            </div>
                        </div>

                        <div className="profile-container-wallet-btn">
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button data-toggle="modal" data-target="#rechargeMoney" style={{ width: '180px' }}>Recharge Money</Button>
                                <div class="modal fade" id="rechargeMoney" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div style={{ marginTop: '200px' }} class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <h2 style={{ textAlign: 'center', margin: '10px 0px 30px 0px' }} >Recharge money</h2>
                                            <div style={{ textAlign: "center" }}>
                                                <p>Soạn <span style={{ color: 'gold', fontWeight: '520' }}>[{email}] + [{randomSave}] + </span> <span style={{ color: 'gold', fontWeight: '520' }}>[Số tiền muốn nạp] </span>  gửi đến STK <span style={{ color: 'gold', fontWeight: '520' }}>029323278927 NGUYEN VAN A</span>  <span style={{ color: 'blue', fontWeight: '520' }}>MB BANK</span> </p>
                                            </div>
                                            <div class="modal-body">
                                                <form method='PUT' class="form-inline">
                                                    <div style={{ width: '100%', border: '1px solid #ddd', padding: '10px' ,borderRadius: '4px'}} class="form-group mb-2">
                                                        <label for="money" class="sr-only">Money</label>
                                                        <CurrencyFormat style={{ width: '100%' }} placeholder="Enter the money" onValueChange={(values) => {
                                                            const { formattedValue, value } = values;
                                                            setDataUser({ ...dataUser, money: value })
                                                        }} thousandSeparator={true} suffix={'  VNĐ'} />
                                                        {/* <input style={{ width: '470px' }} onChange={(e) => {
                                                            setDataUser({ ...dataUser, money: e.target.value })
                                                        }
                                                        } type="number" min={'1'} name="sta" class="form-control" id="money" defaultValue={''} placeholder="Enter the money" /> */}
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button onClick={addRequest} type="submit" data-dismiss="modal" class="btn btn-primary">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button data-toggle="modal" data-target="#buySTA" style={{ background: "green", width: '180px' }}>Buy STA</Button>
                                <div class="modal fade" id="buySTA" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div style={{ marginTop: '200px' }} class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <h2 style={{ textAlign: 'center', margin: '10px 0px 30px 0px' }} >Buy STA</h2>
                                            <div class="modal-body">
                                                <form method='PUT' class="form-inline">
                                                    <div class="form-group mb-2">
                                                        <label for="money" class="sr-only">STA</label>
                                                        <input style={{ width: '470px' }} onChange={(e) =>
                                                            setDataBuy({ ...dataBuy, sta: e.target.value })
                                                        } type="number" name="sta" min={'1'} class="form-control" id="money" defaultValue={''} placeholder="Enter the STA" />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <p style={{ marginRight: '100px', fontWeight: '500' }} ><span style={{ color: 'gold' }}>1 STA</span> = 10.000 money </p>
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button onClick={buySTA} type="submit" data-dismiss="modal" class="btn btn-primary">Buy</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ButtonGroup>

                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="profile-container-withdraw">
                        <div className="profile-container-withdraw-title">
                            Withdraw
                        </div>
                        <Paper className='input-withdraw-money'
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                            <PriceChangeOutlinedIcon style={{ marginRight: '5px' }} />
                            {/* <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Enter the money"
                                inputProps={{ 'aria-label': 'enter the money' }}
                                onChange={(e) => {
                                    setDataWithdraw({ ...dataWithdraw, money: e.target.value })
                                }} /> */}
                            <CurrencyFormat style={{ width: '100%', height: '4vh' }} placeholder="Enter the money" onValueChange={(values) => {
                                const { formattedValue, value } = values;
                                setDataWithdraw({ ...dataWithdraw, money: value })
                            }} thousandSeparator={true} suffix={'  VNĐ'} />
                        </Paper>
                        <Paper className='input-withdraw-bank'
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                            <AccountBalanceOutlinedIcon />
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="[Withdraw] + [Bank account number] + [Bank Name] + [Name]Enter the money"
                                inputProps={{ 'aria-label': '[Withdraw] + [Bank account number] + [Bank Name] + [Name]' }}
                                onChange={(e) => {
                                    setDataWithdraw({ ...dataWithdraw, message: e.target.value })
                                }} />
                        </Paper>
                        <div className="profile-container-wallet-btn">
                            <ButtonGroup sx={{ minWidth: "100%" }} variant="contained" aria-label="outlined primary button group">
                                <Button onClick={withdraw} sx={{ width: "100%" }}>Withdraw money</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </Box>

    )
}
