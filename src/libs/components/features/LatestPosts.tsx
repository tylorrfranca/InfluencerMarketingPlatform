import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from 'panda';

export default function PostActivity() {
  const rows = [
    { post: 'Avail 35% off', img: '/path-to-image1', status: 'Active', likes: '1,807', impressions: '2,689', comments: '8,707' },
    { post: 'Winter Collection', img: '/path-to-image2', status: 'Active', likes: '3,807', impressions: '5,689', comments: '8,707' },
    { post: 'New Arrival', img: '/path-to-image3', status: 'Active', likes: '3,807', impressions: '5,689', comments: '8,707' },
    { post: 'New Collection', img: '/path-to-image4', status: 'Active', likes: '3,807', impressions: '5,689', comments: '8,707' }
  ];

  return (
    <Box
    bgColor={'rgba(200, 200, 200, 0.03)'}
    borderRadius={25}
    padding={30}
    marginBottom={50}>
        <TableContainer component={Paper} elevation={0} sx={{ backgroundColor: 'transparent', width: '800px'}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'white', borderBottom:'none', fontSize: 'larger'}}>Post Activity </TableCell>
                <TableCell sx={{ color: 'grey', borderBottom: 'none'}}>Status</TableCell>
                <TableCell sx={{ color: 'grey', borderBottom: 'none'}}>Likes</TableCell>
                <TableCell sx={{ color: 'grey', borderBottom: 'none'}}> Impressions</TableCell>
                <TableCell sx={{ color: 'grey', borderBottom: 'none'}}>Comments</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.post}>
                  <TableCell style={{ color: 'grey', fontWeight: 'bold' , borderBottom: 'none', width:' 15%'}}>
                    <Box display="flex" alignItems="center">
                      <Avatar src={row.img} />
                      <Typography style={{ marginLeft: 10 }}>{row.post}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell style={{ color: 'grey', fontWeight: 'bold' , borderBottom: 'none', width:' 15%'}}>{row.status}</TableCell>
                  <TableCell style={{ color: 'grey', fontWeight: 'bold' , borderBottom: 'none',  width: '15%'}}>{row.likes}</TableCell>
                  <TableCell style={{ color: 'green', fontWeight: 'bold', borderBottom: 'none',  width: '15%' }}>{row.impressions}</TableCell>
                  <TableCell style={{ color: 'grey', fontWeight: 'bold' , borderBottom: 'none', width: '15%'}}>{row.comments}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Box>
  );
}
