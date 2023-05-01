import React from 'react'
import { Button } from 'react-bootstrap'
import { Cart2 } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <>
            <header className='bg-dark'>
                <div className='container'>
                    <div className='row align-item-center p-3'>
                        <div className='logo col-2 text-white'>
                            <h2 className='m-0'>
                                Ecommerce
                            </h2>
                        </div>
                        <nav className='col'>
                            <ul className='list-unstyled d-flex justify-content-end m-0'>
                                <li className='p-2'>
                                    <NavLink to='/' className='text-decoration-none text-white mx-1'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/about' className='text-decoration-none text-white mx-1'>
                                        About
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/product' className='text-decoration-none text-white mx-1'>
                                        Product
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/' className='text-decoration-none text-white mx-1'>
                                        Blog
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/' className='text-decoration-none text-white mx-1'>   
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className='cta col-2 mx-1' >
                            <Button variant='primary' >
                                <Cart2 />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header