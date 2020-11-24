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
                <form className='searchCity'>
                <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <button type='button' className='btn btn-primary'>Search</button>
            </div>
                </form>
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