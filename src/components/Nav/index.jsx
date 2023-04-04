import {NavLink} from "react-router-dom";
import './nav.css'
const Nav=()=>{
    return(
        <div className='navbar'>
            <NavLink activeclassname='active' to='/get' className='navbar__link'>Get Photos</NavLink>
            <NavLink to='/upload' className='navbar__link'>Upload</NavLink>
        </div>
    )
}
export default Nav