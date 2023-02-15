import { Button, Dropdown } from "antd";
import ProjectList from "screens/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
// import { Col, Row } from "./components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <Container>
      <Header>
        <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
        <div>项目</div>
        <div style={{ marginRight: "auto" }}>用户</div>
        <Dropdown
          menu={{
            items: [
              {
                label: (
                  <Button type="link" onClick={logout}>
                    logout
                  </Button>
                ),
                key: "logout",
              },
            ],
          }}
          trigger={["click"]}
        >
          <Button type="link">Hi,{user?.name}</Button>
        </Dropdown>
      </Header>
      {/* <Nav>nav</Nav> */}
      <Main>
        <ProjectList />
      </Main>
      {/* <Aside>aside</Aside> */}
      {/* <Footer>footer</Footer> */}
    </Container>
  );
};

export default AuthenticatedApp;

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 6rem 1fr;
  /* grid-template-rows: 6rem 1fr 6rem; */
  /* grid-template-columns: 20rem 1fr 20rem; */
  /* grid-template-areas: "header header header" "main main main" "main main main"; */
`;

const Header = styled("header")`
  /* grid-area: header; */
  display: flex;
  align-items: center;
  padding: 3.2rem;
  box-sizing: border-box;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  & > * {
    margin-right: 2rem;
  }
`;

// const HeaderItem = styled(Col)`
//   display: flex;
//   align-items: center;
// `;
const Main = styled.main`
  /* grid-area: main; */
`;
// const Nav = styled.nav`
//   grid-area: nav;
// `;
// const Aside = styled.aside`
//   grid-area: aside;
// `;
// const Footer = styled.footer`
//   grid-area: footer;
// `;
