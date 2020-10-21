import React from 'react'
import Materia from '../../img/materia.png'
const Navbar = () => {
    return (
        <div className='ff7'>
            <nav className="navbar ff7">
                <a className="navbar-brand" href="#" style={{ margin: '0', padding: '0' }}>
                    <img src={Materia} alt='logo' style={{ width: '30%', padding: '0', margin: 'auto' }} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </nav>
        </div>
    )
}

export default Navbar