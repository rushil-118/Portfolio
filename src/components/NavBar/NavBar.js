import Menu from './Menu';
import './NavBar.css';
import { useRef ,useEffect, useState } from 'react';
function NavBar(){
    let mRef = useRef(0);
    const[showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        mRef.current.addEventListener("click", () => {
            setShowMenu(true);
        });
    },[]);

    useEffect(() => {
        if(showMenu){
            if(document.querySelector(".close-btn")){
                document.querySelector(".close-btn").addEventListener("click", () => {
                    const menuTable = document.querySelector(".menu-table");
                    const menuPopup = document.querySelector(".Menu");
                    menuTable.classList.add("hidden");
                    menuPopup.classList.add("hidden");
                    setTimeout(() => {
                        document.querySelector(".Screen").style.display = "none";
                        setShowMenu(false);
                    }, 400);
                });
            }
        }
    },[showMenu]);
    return(
        <div className="navBar">
            {showMenu && <Menu />}
            <h1>Rushil Choudhary</h1>
            <svg ref={mRef} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path></svg>
        </div>
    )
}
export default NavBar;