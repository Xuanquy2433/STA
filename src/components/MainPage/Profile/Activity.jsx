import React from 'react'
import './Activity.css'
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

function Activity(props) {
    const { sta, money } = props;
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='activity'>
            <div className='activity-content'>
                <div className='activity-title'>
                    Activity account
                </div>
                <div className="account-balance">
                    STA
                </div>
                <div className="balance">

                    <div className="activity-money">
                        10
                    </div>
                </div>

                <div className="account-balance">
                    Money
                </div>
                <div className="balance">

                    <div className="activity-money">
                        10.000.000
                    </div>
                    <div className="dollar">
                        vnđ
                    </div>
                </div>

                <div className="activity-decription">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse blanditiis natus recusandae nihil! Nulla delectus incidunt modi recusandae cum ab non similique itaque labore, blanditiis exercitationem possimus ipsa maiores omnis.
                </div>
            </div>

            <Box className='activity-history' sx={{ width: '85%', typography: 'body1', margin: 'auto' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'white', paddingTop: '30px !important' }}>
                        <TabList textColor='white' onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Purchase history" value="1" />
                            <Tab label="Investment history" value="2" />
                            <Tab label="Transfer" value="3" />
                            <Tab label="Offers" value="4" />
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
                                        <TableCell align="right">CREATEDDATE</TableCell>
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
                    <TabPanel value="4">
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
                </TabContext>
            </Box>


        </div>

    )
}

export default Activity