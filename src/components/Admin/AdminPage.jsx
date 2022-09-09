import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_GET_CATEGORY, API_GET_REQUEST, API_POST_PRODUCT, API_UPDATE_REQUEST } from '../utils/const';
import { toast } from 'react-toastify';
import { TextField } from '@mui/material';
import Moment from 'react-moment';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

function AdminPage() {





    const navigate = useNavigate();
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [status, setStatus] = useState([]);
    let token = localStorage.getItem("token");
    const getAllByStatus = async () => {
        const response = await axios.get(API_GET_REQUEST);
        if (response && response.status === 200) {
            setStatus(response.data)
        }
    }

    // add product
    const [valueState, setValueState] = useState("")
    const [category, setCategory] = useState([]);
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

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
console.log('staussss ',status);

    useEffect(() => {
        let dataUser = localStorage.getItem("user");
        console.log(dataUser);
        if (dataUser === null || JSON.parse(dataUser).userDataDto.role !== 'admin') {
            navigate('/')
        }
        getAllByStatus()
        getCategory()
    }, []);

    return (
        <div className='activity'>
            <div className='activity-content'>
                <div className='activity-title'>
                    Welcome Admin
                </div>
                <div className="activity-decription">
                    This is admin page. You can see the progress you've made with your work and manage your projects or assigned tasks
                </div>
            </div>

            <Box className='activity-history' sx={{ width: '85%', typography: 'body1', margin: 'auto' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'white', paddingTop: '30px !important' }}>
                        <TabList textColor='white' onChange={handleChange} aria-label="lab API tabs example ">
                            <Tab label="Cofirm recharge Money " value="1" />
                            <Tab label="Cofirm withdraw Money" value="2" />
                            <Tab label="Add product" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <TableContainer component={Paper}>
                            <Table className='activity-table' sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ textAlign: "center" }} scope="col">ID</TableCell>
                                        <TableCell style={{ textAlign: "center" }} scope="col">User ID</TableCell>
                                        <TableCell style={{ textAlign: "center" }} scope="col">Message</TableCell>
                                        <TableCell style={{ textAlign: "center" }} scope="col">Money</TableCell>
                                        <TableCell style={{ textAlign: "center" }} scope="col" >
                                            Type
                                        </TableCell>
                                        <TableCell style={{ textAlign: "center" }} scope="col" >
                                            Create date
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {status.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell style={{ color: "#8898aa" }} scope="row">{item.id}</TableCell>
                                            <TableCell style={{ color: "#8898aa", textAlign: 'center' }} scope="row">{item.userId}</TableCell>
                                            <TableCell style={{ textAlign: "center", color: "#8898aa " }} className="text-muted">{item.message}</TableCell>
                                            <TableCell style={{ textAlign: "center" }} className="text-muted ">{item.money}</TableCell>
                                            <TableCell style={{ textAlign: "center", color: "#8898aa" }} className="text-muted">{item.type}</TableCell>
                                            <TableCell style={{ textAlign: "center", color: "#8898aa" }} className="text-muted"><Moment format='MMMM Do YYYY, h:mm:ss a'>{item.createdDate}</Moment></TableCell>
                                            <TableCell style={{ textAlign: "center" }} className="text-muted">
                                                <button onClick={() => accept(item.id, item.money, item.message, item.userId)} style={{ backgroundColor: "#3F51B5", color: "#FFFFFF", padding: "4px 8px", margin: "0" }} type="button" className="btn">Confirm</button>
                                            </TableCell>
                                            <TableCell style={{ textAlign: "center" }} className="text-muted">
                                                <button onClick={() => decline(item.id, item.money, item.message, item.userId)} style={{ backgroundColor: "#78909C", color: "#FFFFFF", padding: "4px 8px", margin: "0", }} type="button" className="btn">Refuse</button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel value="2">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name Services</TableCell>
                                        <TableCell align="right">STA PROFIT</TableCell>
                                        <TableCell align="right">CREATEDDATE</TableCell>
                                        <TableCell align="right">CLAIM DATE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel value="3">
                        <Box className='form-add-product'
                            sx={{

                                maxWidth: '50%',
                                margin: '0 auto',
                                marginTop: ' 70px',
                                backgroundColor:'white'

                            }}
                        >
                            <TextField className='form-input-add-product' fullWidth label="Name" id="name" />
                            <TextField className='form-input-add-product' fullWidth label="Percentage" id="Percentage" />
                            <div style={{display:'flex',justifyContent:' space-between'}} className="form-flex">
                                <TextField style={{marginRight:'5px'}} className='form-input-add-product' fullWidth label="Price" id="Price" />
                                <TextField className='form-input-add-product' fullWidth label="InvestMonth" id="InvestMonth" />
                            </div>

                            <TextField className='form-input-add-product' fullWidth label="Image" id="Image" />
                            <TextField className='form-input-add-product' fullWidth label="Descriptions" id="Descriptions" />

                            <div className='form-input-add-product'>
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={category}
                                        label="Category"
                                        onChange={handleChangeCategory}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>

                                    </Select>
                                    <Button style={{backgroundColor:'#1565c0',width:'50%',height:'40px',margin:'0 auto',marginTop:'30px'}} variant="ADD">ADD</Button>
                                </FormControl>
                            </div>
                        </Box>


                    </TabPanel>
                </TabContext>
            </Box>


        </div>

    )
}

export default AdminPage