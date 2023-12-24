import { LuContact2 } from "react-icons/lu";

import { Container, Nav, SNavLink, LogoWrapper, LinkWrapper, WrapperItem } from './Layout.styled.js';
import css from './Layout.module.css';

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
        </Container>
      </Nav>

      <Container className="align-items-center d-flex flex-column justify-content-center mt-4">
          <h1>Welcome please login</h1>
      </Container>
    </>
  );
};

export default Layout;