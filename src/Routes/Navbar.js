import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.section`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  background-color: #9b59b6;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 800;
  margin-right: 20px;
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

const Menu = styled(Link)`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 0px 20px;
  align-items: center;
  font-size: 18px;
  &:hover {
    background-color: #8e44ad;
    border-bottom: 4px solid #34495e;
  }
`;

const Buttons = styled.div``;

export const Navbar = () => {
  const email = "yunho@naver.com";
  const password = "123456";
  const data = JSON.stringify({ email, password });
  console.log(email);
  console.log(password);
  console.log(data);
  return (
    <NavContainer>
      <Menus>
        <Title>Level Up Language</Title>
        <Menu>Home</Menu>
        <Menu>About Us</Menu>
        <Menu>Lectures</Menu>
        <Menu>Services</Menu>
      </Menus>

      <Buttons></Buttons>
    </NavContainer>
  );
};
