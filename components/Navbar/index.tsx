
import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';
import Account from '../Account';

import { useRouter } from 'next/router';
import SubMenu from 'antd/lib/menu/SubMenu';
import { MenuOutlined } from '@ant-design/icons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import ListIcon from '@mui/icons-material/List';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import OutlineButton from '../Button/Outline';


const pages = ['Funds', 'Staking', ]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar: React.FC = (): React.ReactElement => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const router = useRouter();
    console.log(router.pathname);


    const activeStyle = {
        borderBottom: '2px solid #E7694C',
        padding: '5px 0px 1px 0px',
    };

    
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Avatar alt="Remy Sharp"src="/assets/derpfi.png" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Derphi
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <ListIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
              
                  <MenuItem  onClick={handleCloseNavMenu}>
                   <Link href="/funds">
                             Funds
                    </Link>

                    <Link href="/staking">
                             Staking
                    </Link>
                         
                  </MenuItem>
             
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Derphis
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
             
                <Link href="/funds" >
                       <Box sx={{color: "white", mx:"3px"}}>
                             Funds
                             </Box>
                    </Link>

                    <Link href="/staking">
                    <Box sx={{color: "white", mx:"3px"}}>
                             Staking
                    </Box>
                    </Link>
             
           
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Account/>
              
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Navbar;


// <NavContainer justify="center" align="middle">
//                 <Col xs={10} sm={10} md={4} style={{ height: '100%' }}>
//                     <Link href="/">
                       
//                             <Logo height="55px" width="55px" src="/assets/derpfi.png" preview={false} />
                       
//                     </Link>
//                 </Col>
//                 <MenuCol xs={0} sm={0} md={20} style={{ height: '100%' }}>
//                     <NavMenuItem style={'/funds' == router.pathname ? activeStyle : {}}>
//                         <Link href="/funds">
//                             Funds
//                         </Link>
//                     </NavMenuItem>
//                     <NavMenuItem style={'/staking' == router.pathname ? activeStyle : {}}>
//                         <Link href="/staking">
//                             Staking
//                         </Link>
//                     </NavMenuItem>
//                     <NavMenuItem>
//                         <Account/>
//                     </NavMenuItem>
                  
//                 </MenuCol>
//                 <NavMenuCol xs={14} sm={14} md={0} style={{ height: '100%' }}>
//                     <Menu mode="horizontal" triggerSubMenuAction="click">
//                         <SubMenu key="SubMenu" icon={<MenuOutlined />} title="Menu">
                          
//                             <Menu.ItemGroup title="Navigation">
//                                 <Menu.Item key="/funds">
//                                     <Link href="/funds">
//                                         Funds
//                                     </Link>
//                                 </Menu.Item>
//                                 <Menu.Item key="/staking" style={'/staking' == router.pathname ? activeStyle : {}}>
//                                     <Link href="/staking">
//                                         Staking
//                                     </Link>
//                                 </Menu.Item>
                                
//                             </Menu.ItemGroup>
//                             <Menu.ItemGroup title="Wallet">
//                                 <Menu.Item key="wallet">
//                                     <Account  />
//                                 </Menu.Item>
//                             </Menu.ItemGroup>
//                         </SubMenu>
//                     </Menu>
//                 </NavMenuCol>
//             </NavContainer>