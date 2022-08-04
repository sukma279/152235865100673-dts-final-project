import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Logo from '../movie_logo.png';
import { Link, NavLink } from 'react-router-dom';

import UserLog from './UserLog';

const navItems = [
  { text: 'Home', link: '/' },
  { text: 'Gif', link: '#' },
  { text: 'Sticker', link: '#' },
];

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
      <Toolbar>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
              <img src={Logo} alt="logo" className='Movie-logo' style={{display: "flex",  marginRight: 100, marginLeft:70, width: 35}}/>
            </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                style={{ textDecoration: 'none', color: "#fff", fontFamily: 'Inter', fontWeight: "400" }}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
              >
                {item.text}
              </NavLink>
            ))}
          </Typography>
          <Box sx={{ display: 'block' }}>
            <UserLog />
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Navbar;
