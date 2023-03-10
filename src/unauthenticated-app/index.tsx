import { useState } from "react";
import Login from "./login";
import Register from "./register";
import { Card, Button, Divider } from "antd";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import left from "assets/left.svg";
import right from "assets/right.svg";
import { useDocumentTitle } from "utils";

const UnauthenticatedApp = () => {
  const [isLogin, setIsLogin] = useState(true);
  useDocumentTitle(isLogin ? "登录" : "注册");
  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>{isLogin ? "登录" : "注册"}</Title>
        {isLogin ? <Login /> : <Register />}
        <Divider />
        <Button type="link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? `没有账号？注册新账号` : "已经有账号？直接登录"}
        </Button>
      </ShadowCard>
    </Container>
  );
};

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-image: url(${left}), url(${right});
  background-size: calc((100vw - 40rem) / 2 - 3.2rem),
    calc((100vw - 40rem) / 2 - 3.2rem);
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  background-size: 8rem;
  padding: 5rem 0;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 52rem;
  padding: 3.2rem 4rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 1rem;
  text-align: center;
`;

export default UnauthenticatedApp;
