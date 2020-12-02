import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Materia from '../../img/materia.png'

const Navbar = () => {
    
    return (
            <StyledNav>
                <StyledLogo>
                    <img src={Materia} alt="Logo"/>
                    <h1>Weather App</h1>
                </StyledLogo>        
            </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
`
const StyledLogo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 2.5rem;
    cursor: pointer;
    img{
        height: 3rem;
        width: 3rem;
    }
`
export default Navbar