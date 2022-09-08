import React from 'react'
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

function AdminPage() {



    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div className='activity'>
            <div className='activity-content'>
                <div className='activity-title'>
                    Welcome Admin :))
                </div>




                <div className="activity-decription">
                    This is admin page. You can see the progress you've made with your work and manage your projects or assigned tasks
                </div>
            </div>

            <Box className='activity-history' sx={{ width: '85%', typography: 'body1', margin: 'auto' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'white', paddingTop: '30px !important' }}>
                        <TabList textColor='white' onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Purchase history" value="1" />

                            <Button className='btn-add-product' variant="outlined">Add Product</Button>

                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <TableContainer component={Paper}>
                            <Table className='activity-table' sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>STATUS</TableCell>
                                        <TableCell align="right">ID</TableCell>
                                        <TableCell align="right">USER ID</TableCell>
                                        <TableCell align="right">MESSAGE</TableCell>
                                        <TableCell align="right">MONEY</TableCell>
                                        <TableCell align="right">TYPE</TableCell>
                                        <TableCell align="right">CREATE DATE</TableCell>
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
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </TabPanel>


                </TabContext>
            </Box>


        </div>

    )
}

export default AdminPage