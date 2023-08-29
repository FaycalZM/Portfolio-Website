/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { CgMenuLeftAlt, CgClose } from 'react-icons/cg'
import { useData } from '../context/DataProvider';


const toggleMenuOpen = (menuOpened, setMenuOpened) => {
    setMenuOpened(!menuOpened);
}
const MenuBtn = () => {

    const { menuOpened, setMenuOpened } = useData();

    const sidebarNav = document.querySelector('.sidebar-nav');
    const menuButton = document.querySelector('.menu__btn');

    useEffect(
        () => {
            if (sidebarNav) {
                sidebarNav.style.display = menuOpened ? 'flex' : 'none';
                menuButton.style.position = menuOpened ? 'fixed' : 'absolute';
            }
        }, [menuOpened]
    )


    return (
        <button
            className='menu__btn tablet:hidden absolute z-50 right-0 top-0 text-primary-yellow text-5xl'
            onClick={() => {
                toggleMenuOpen(menuOpened, setMenuOpened);
            }}
        >
            {
                menuOpened
                    ? <CgClose />
                    : <CgMenuLeftAlt />
            }
        </button>
    )
}

export default MenuBtn