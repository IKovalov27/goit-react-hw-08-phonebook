import React from 'react';
import { LuContact2 } from 'react-icons/lu';
import { Container, Nav, SNavLink, LogoWrapper, LinkWrapper, WrapperItem } from './Layout.styled.js';
import css from './Layout.module.css';
import InfoUser from '../InfoUser/InfoUser';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isContactsPage = location.pathname === '/contacts';

  return (
    <>
      <Nav className={css.navigation}>
        <Container className={css.container}>
          <LogoWrapper>
            <LuContact2 className={css.icon} />
            PhoneBook
          </LogoWrapper>
          <LinkWrapper>
            {!isContactsPage && (
              <>
                <WrapperItem>
                  <SNavLink to="/signup">Sign Up</SNavLink>
                </WrapperItem>
                <WrapperItem>
                  <SNavLink to="/login" className={css.link}>Login</SNavLink>
                </WrapperItem>
              </>
            )}
          </LinkWrapper>
          {isContactsPage && <InfoUser className="d-flex flex-column" />}
        </Container>
      </Nav>
    </>
  );
};

export default Layout;








