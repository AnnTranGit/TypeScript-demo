import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

type Props = {}

const HomeTemplate = (props: Props) => {
    return (
        <>
            <Header />
            <section style={{ minHeight: 550 }}>
                <Outlet></Outlet>
            </section>
            <footer className='bg-dark text-white text-center p-3'>
                Footer
            </footer>
        </>
    )
}

export default HomeTemplate