import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: blue;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem calc((75vw - 500px) / 2);
  z-index: 15;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -20px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`

  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin-left: 15px;
  }
`;
