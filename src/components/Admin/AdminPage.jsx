import React, { useEffect } from 'react'
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

function AdminPage() {

    const navigate = useNavigate();
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        let dataUser = localStorage.getItem("user");
        console.log(dataUser);
        if (dataUser === null || JSON.parse(dataUser).userDataDto.role !== 'admin') {
            navigate('/')
        }
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
                            <Tab label="Duyệt user nạp " value="1" />
                            <Tab label="Duyệt user rút" value="2" />
                            <Tab label="Add product" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <TableContainer component={Paper}>
                            <Table className='activity-table' sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>STATUS</TableCell>
                                        <TableCell align="right">STA</TableCell>
                                        <TableCell align="right">MONEY</TableCell>
                                        <TableCell align="right">CREATE DATE</TableCell>
                                        <TableCell align="right">TYPE</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
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
                        <TableContainer component={Paper}>
                            <p>form</p>
                        </TableContainer>
                    </TabPanel>
                </TabContext>
            </Box>


        </div>

    )
}

export default AdminPage