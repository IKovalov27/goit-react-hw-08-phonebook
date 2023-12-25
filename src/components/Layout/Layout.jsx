import { LuContact2 } from "react-icons/lu";

import { Container, Nav, SNavLink, LogoWrapper, LinkWrapper, WrapperItem } from './Layout.styled.js';
import css from './Layout.module.css';

import InfoUser from '../InfoUser/InfoUser';

const Layout = () => {
  return (
    <>
      <Nav className={css.navigation}>
        <Container className={css.container}>
          <LogoWrapper>
            <LuContact2 className={css.icon} />
            PhoneBook
          </LogoWrapper>
          <LinkWrapper>
            <WrapperItem>
              <SNavLink to="/signup">
                Sign Up
              </SNavLink>
            </WrapperItem>
            <WrapperItem>
              <SNavLink to="/login" className={css.link}>
                Login
              </SNavLink>
            </WrapperItem>
          </LinkWrapper>

          <InfoUser className="d-flex flex-column" />
        </Container>
      </Nav>
    </>
  );
};

export default Layout;