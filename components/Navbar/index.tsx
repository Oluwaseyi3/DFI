import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Col, Image, Row, Layout } from 'antd';
import Account from '../Account'
import Link from 'next/link';
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
 
`;
const Logo = styled(Image)`
    margin-top: 10px;
    margin-left: 55px;
`;

const MobileMenuIcon = styled(MenuOutlined)`
  display: none;
  font-size: 1.5rem;
  color: #000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const DesktopMenu = styled(Menu)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(Menu)`
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  background-color: #fff;


  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Menu.Item)`
  margin-right: 1rem;
`;

const Navbar: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };
  
    

  const handleMobileMenuClick = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <Nav>
   <Logo height="55px" width="55px" src="../assets/derpfi.png" alt="" preview={false} />

      <DesktopMenu mode="horizontal">
      {
            isMobile && <MobileMenuIcon onClick={handleMobileMenuClick} />
          } 
        <MenuItem key="1">
          <Link href="/funds">
            Funds
          </Link>
        </MenuItem>
        <MenuItem key="2">
        <Link href="/staking">
            staking
          </Link>
        </MenuItem>
       <MenuItem>
       <Account/>
       </MenuItem>
      </DesktopMenu>
    
      <MobileMenu style={{ display: mobileMenuVisible ? 'block' : 'none' }} onClick={handleMobileMenuClick}>
  <MenuItem key="1">
  <Link href="/funds">
            Funds
          </Link>
  </MenuItem>
  <MenuItem key="2">
  <Link href="/staking">
            Staking
          </Link>
  </MenuItem>
  <MenuItem key="3">
    <Account/>
  </MenuItem>
</MobileMenu>
    </Nav>
  );
};

export default Navbar;
