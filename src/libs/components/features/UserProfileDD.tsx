
import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, IconButton, Typography, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {auth} from '../../firebase/config'
import { signOut } from 'firebase/auth';
export default function UserProfileDD() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center">
      {/* User avatar and info */}
      <Avatar alt="Hazel kaya" src="/path-to-image" sx={{ width: 40, height: 40 }} />
      <Box ml={2}>
        <Typography color="white" fontWeight="bold">Hazel Kaya</Typography>
        
        <Typography color="gray" fontSize={12}>Admin</Typography>
      </Box>

      {/* Dropdown icon */}
      <IconButton onClick={handleClick} sx={{ ml: 1, color: 'white' }}>
        <ArrowDropDownIcon />
      </IconButton>

      {/* Dropdown menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={() => {
          signOut(auth)
        }}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
