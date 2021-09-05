import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LogoImg from '../styles/Logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Nav>
                <Logo>
                    <img src={LogoImg} alt="logo" />
                </Logo>
                <Items>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/connect"><li>Connections</li></Link>
                </Items>
                
                <MenuArea>
                    <button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{padding:'0'}}>
                        Menu
                    </button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </MenuArea>
                <ChatBtn>
                    <a href="/chat"><button>Chat</button></a>
                </ChatBtn>
            </Nav>
        </div>
    )
}

export default Navbar

const Nav = styled.div`
font-family: 'Raleway', 'Segoe UI', sans-serif;
height: 90px;
background-color: #3E3E3E;
color: #fff;
position: relative;
`;
const Logo = styled.div`
position: absolute;
height: 100%;
img{
    height: 100%;
}
`;
const Items = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
li{
    list-style: none;
    margin: 10px;
    padding: 10px;
    font-weight: 700;
    font-size: 1.5rem;
}
li:hover{
    color: #18B977;
}
a{
    text-decoration: none;
    color: #fff
}

`;
const ChatBtn = styled.div`
    font-family: 'Raleway', 'Segoe UI', sans-serif;

    position: absolute;
    right: 70px;
    top: 30px;
`;
const MenuArea = styled.div`
    font-family: 'Raleway', 'Segoe UI', sans-serif;

    position: absolute;
    right: 10px;
    top: 30px;
`;
