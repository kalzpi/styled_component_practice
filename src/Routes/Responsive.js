import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Navbar = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fd79a8;
  width: 300px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Navtitle = styled.span`
  display: block;
  background-color: #d63031;
  padding: 20px 10px;
  font-size: 30px;
  font-weight: 900;
  width: 100%;
`;

const Navmenus = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    transition: transform 0.4s ease-in-out;
  }
`;

const Menu = styled(Link)`
  display: block;
  padding: 20px 10px;
  font-size: 30px;
  font-weight: 900;
  width: 100%;
  &:hover {
    background-color: #74b9ff;
  }
  @media screen and (max-width: 700px) {
    height: 70px;
    display: ${(props) => (props.opened ? "block" : "none")};
  }
`;

const HiddenToggle = styled.i`
  display: none;
  background-color: #fd79a8;
  font-size: 40px;
  height: 70px;
  cursor: pointer;
  padding: 0px 20px;
  &:hover {
    background-color: #74b9ff;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Body = styled.section`
  background-color: #00b894;
  height: 100%;
  width: calc(100% - 300px);
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Responsive = () => {
  const [opened, setOpened] = useState(false);
  const toggleOpen = () => {
    if (opened) {
      setOpened(false);
    } else {
      setOpened(true);
    }
  };
  return (
    <Section opened={opened}>
      <Navbar>
        <Navtitle>Navigation</Navtitle>
        <Navmenus>
          <Menu opened={opened}>
            <span>Home</span>
          </Menu>
          <Menu opened={opened}>Menu 1</Menu>
          <Menu opened={opened}>Menu 2</Menu>
          <Menu opened={opened}>Menu 3</Menu>
          <Menu opened={opened}>Menu 4</Menu>
          <Menu opened={opened}>Menu 5</Menu>
        </Navmenus>
        <HiddenToggle className="fas fa-bars" onClick={() => toggleOpen()} />
      </Navbar>
      <Body></Body>
    </Section>
  );
};

export default Responsive;
