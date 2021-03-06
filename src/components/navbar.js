import * as React from 'react';
import { Link } from "gatsby"
import styled from "styled-components"

//navbar container styling
const navStyles = {
    width: '100%',
    height: '5vh',
    minHeight: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
}
//navbar link component styling
const StyledLink = styled(props => <Link {...props} />)`
    width: 33.33%;
    color: 'white';
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111111;
    color: white;
    border: 2px solid black;
    text-decoration: none;
    font-size: 1.1em;
    
    &:hover{
        color:pink;
        font-size: 1.2em;
    }
`;

//component is the container for the navbar - used in the Main component
export default function Navbar(){
    return (
        <div style={navStyles}>
            <StyledLink to="/">
                <h3>Home</h3>
            </StyledLink>
            <StyledLink to="/news">
                <h3>News</h3>
            </StyledLink>
            <StyledLink to="/guns">
                <h3>Guns</h3>
            </StyledLink>
        </div>
    )
}