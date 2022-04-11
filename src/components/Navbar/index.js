import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Pups R Us</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/toys">All Toys</NavLink>
          <NavLink to="/toys/new">Create a Toy</NavLink>
          <NavLink to="/sign-in">Sign In</NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
