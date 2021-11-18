import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Pups R Us
            </NavLogo>
            <Bars />
  
            <NavMenu>
                <NavLink to="/" activestyle>
                    Home
                </NavLink>
                <NavLink to="/about" activestyle>
                    About
                </NavLink>
                <NavLink to="/toys" activestyle>
                    All Toys
                </NavLink>
                <NavLink to="/toys/new" activestyle>
                    Create a Toy
                </NavLink>
                <NavLink to="/signin" activestyle>
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
  };
  export default Navbar;