import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg py-2'  style={{backgroundColor: "#00FFFF"}} >
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand ml-5'>Contact List App</Link>
            </div>
        </nav >
    )
}

export default Navbar