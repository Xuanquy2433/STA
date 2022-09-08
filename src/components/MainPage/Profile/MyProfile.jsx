import React from 'react'
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
import FacebookIcon from '@mui/icons-material/Facebook';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function MyProfile() {
    return (


        <Box className='profile-container' sx={{ flexGrow: 1 }}>
            <Grid container spacing={8}>
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
                <Grid item xs={4}>
                    <div className="profile-container-wallet">
                        <div className="profile-container-wallet-title">
                            Wallet
                        </div>


                        <div className="profile-container-wallet-available">
                            <div className="profile-container-wallet-available-flex-left">
                                <div className="profile-container-wallet-available-sta">
                                    Available STA
                                </div>
                                <div className="profile-container-wallet-sta">
                                    10.000.000
                                </div>
                            </div>
                            <div className="profile-container-wallet-available-flex-right">
                                <div className="profile-container-wallet-available-money">
                                    Available Money
                                </div>
                                <div className="profile-container-wallet-sta">
                                    10.000.000 
                                </div>
                            </div>

                        </div>


                        <div className="profile-container-wallet-btn">
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button>Recharge Money</Button>
                                <Button style={{ background: "green" }}>Buy STA</Button>
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
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <Button >Withdraw money</Button>
                            </ButtonGroup>

                        </div>
                    </div>
                </Grid>

            </Grid>
        </Box>

    )
}
