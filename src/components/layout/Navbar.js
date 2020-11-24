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
                <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <button type='button' className='btn btn-primary'>Search</button>
            </div>
                </form>
            </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        margin-top: 1.5rem;
        font-size: 1.5rem;
        padding: 0.5rem;
    }
`
const StyledLogo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img{
        height: 3rem;
        width: 3rem;
    }
`
export default Navbar