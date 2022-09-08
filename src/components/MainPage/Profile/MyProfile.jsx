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

    const [randomSave, setRandomSave] = useState((Math.random() + 1).toString(36).substring(7));

    const [dataUser, setDataUser] = useState({
        "message": email + " [" + randomSave + "]",
        "money": '',
        "type": "deposit",
        "status": "pending",
    });


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
    console.log("data user", dataUser);

    const [sta, setSta] = useState('');
    const [money, setMoney] = useState('');
    let token = localStorage.getItem("token");

    const [sendData, setSendData] = useState({
        receiver: "",
        sta: "",
        token: token
    })

    const [dataBuy, setDataBuy] = useState({
        sta: "",
        token: token
    })

    console.log(sendData);
    const sendSTA = async (e) => {
        e.preventDefault()
        console.log(e);

        if (sendData.receiver == email) {
            toast.error("You can't transfer money to yourself", {
                autoClose: 2000
            })
            getUserSta()
        } else if (sendData.sta > sta) {
            toast.error("You don't have enough money", {
                autoClose: 2000
            })
            getUserSta()
        } else {
            const response = await axios.put(API_SEND_STA + "?receiver=" + sendData.receiver + "&sta=" + sendData.sta + "&token=" + sendData.token)
            toast.success('Send success', {
                autoClose: 2000
            })
            getUserSta()
        }
    }

    const checkSTA = money / 10000
    console.log(checkSTA);
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
    const [status, setStatus] = useState([]);

    const getAllByStatus = async () => {
        const response = await axios.get(API_GET_REQUEST);
        if (response && response.status === 200) {
            setStatus(response.data)
        }

    }

    const [valueState, setValueState] = useState("")
    const [category, setCategory] = useState([]);

    const [addProductData, setAddProductData] = useState({
        "categoryId": 0,
        "description": "",
        "imageURL": "",
        "investMonth": 0,
        "name": "",
        "percentage": 0,
        "price": 0
    });

    if (addProductData.categoryId === 0) {
        console.log("Null id ");
        // check nếu ko chọn sẽ mặc định lấy id 1
        setAddProductData({ ...addProductData, categoryId: 1 })
    }

    const getCategory = async () => {
        const response = await axios.get(API_GET_CATEGORY);
        if (response && response.status === 200) {
            setCategory(response.data)
        }
    }

    const handler = (event) => {
        const value = event.target.value
        console.log(value);
        setAddProductData({ ...addProductData, categoryId: (value) })
        setValueState(value)
        console.log("valueeeeeeeeeeeeeeeeee", value);
    }

    const onChangeTextProduct = (event) => {
        console.log("onChangeText", event);
        setAddProductData({ ...addProductData, [event.target.name]: event.target.value });
    };


    const onclAddProduct = async (e) => {
        e.preventDefault()
        console.log("onclick add product");
        try {
            const response = await axios.post(API_POST_PRODUCT, addProductData)
            toast.success('Add success', {
                autoClose: 2000
            })
        } catch (error) {
            toast.error('Error API', {
                autoClose: 2000
            })
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

    console.log("list log user ", logUser);
    console.log("list order ", order);
    console.log("list category ", category);
    console.log("data product adđ ", addProductData);


    const accept = async (id, money, message, userId) => {
        console.log(money, message);
        const response = await axios.put(API_UPDATE_REQUEST + token, {
            "id": id,
            "money": money,
            "status": "accepted",
            "userId": userId
        });
        if (response && response.status === 200) {
            toast.success("Accept success", {
                autoClose: 2000
            });
            getAllByStatus()
        }

    }

    const decline = async (id, money, message, userId) => {
        console.log(money, message);
        const response = await axios.put(API_UPDATE_REQUEST + token, {
            "id": id,
            "money": money,
            "status": "rejected",
            "userId": userId
        });
        if (response && response.status === 200) {
            toast.error("Decline success", {
                autoClose: 2000
            });
            getAllByStatus()
        }

    }

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

    console.log("data withdraw ", dataWithdraw);
    console.log("status ", status);
    useEffect(() => {
        getUserSta();
        getAllByStatus()
        getCategory()
        getOrder()
        getLogUser()
    }, []);

    const logout = () => {
        // alert("ok")
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate('/')

        toast.success("Logout success");
        setTimeout(() => window.location.reload(false)
            , 1000)
    }


    const navigate = useNavigate();
    useEffect(() => {
        let dataUser = localStorage.getItem("user");
        console.log(dataUser);
        if (dataUser === null || JSON.parse(dataUser).userDataDto.role !== 'user') {
            navigate('/')
        }
    }, []);
    return (
        <Box className='profile-container' sx={{ flexGrow: 1 }}>
            <div className='showMoney'>
                <span className='span1'>{sta} <PaidIcon style={{ color: 'gold' }} /> </span>
               <CurrencyFormat className='span2' value={money} displayType={'text'} suffix=" VNĐ" thousandSeparator={true} />
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
                                    Hello + Name
                                </div>
                                <div className="profile-container-information-desc-phone">
                                    <PhoneIcon />&nbsp;
                                    0378583429
                                </div>
                                <div className="profile-container-information-desc-email">
                                    <EmailIcon /> &nbsp;letrungquy50@gmail.com

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
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-square-twitter"></i>
                            <i class="fa-brands fa-square-youtube"></i>
                            <i class="fa-brands fa-square-google-plus"></i>
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
                                <Button style={{ width: '180px', background: " linear-gradient(238.01deg, rgb(145, 1, 165) -1.4%, rgb(255, 86, 122) 54.09%, rgb(255, 153, 0) 93.78%)" }}>Recharge Money</Button>
                                <Button style={{ background: "green", width: '180px', background: "linear-gradient(to right, #ff8e15 0%, #b31b98 100%)" }}>Buy STA</Button>
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
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            <PriceChangeOutlinedIcon />
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Enter the money"
                                inputProps={{ 'aria-label': 'enter the money' }}
                            />
                        </Paper>

                        <Paper className='input-withdraw-bank'
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            <AccountBalanceOutlinedIcon />
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="[Withdraw] + [Bank account number] + [Bank Name] + [Name]Enter the money"
                                inputProps={{ 'aria-label': '[Withdraw] + [Bank account number] + [Bank Name] + [Name]' }}
                            />
                        </Paper>
                        <div className="profile-container-wallet-btn">
                            <ButtonGroup sx={{ minWidth: "100%" }} variant="contained" aria-label="outlined primary button group">
                                <Button sx={{ width: "100%", background: " linear-gradient(238.01deg, rgb(145, 1, 165) -1.4%, rgb(255, 86, 122) 54.09%, rgb(255, 153, 0) 93.78%)" }}>Withdraw money</Button>
                            </ButtonGroup>

                        </div>
                    </div>
                </Grid>

            </Grid>
        </Box>

    )
}
