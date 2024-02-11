import { NavLink } from "react-router-dom";
import './Header.css'
export default function header(){

    return (
        <>
        
        <div className="header">
            <div className="designation">
                <div className="box"></div>
                <div className="name">Mohammad Shahnawaz Malik/Software Quality Enginner</div>
            </div>
            <div className="navigation">
            <div className="navLink">
            <NavLink
            to='/'
            style={({isActive})=>({color:isActive?"blue":"black",textDecoration:"none"})}
            >
            ABOUT ME
            </NavLink>
            </div>
            <div className="navLink">
            <NavLink
            to='resume'
            style={({isActive})=>({color:isActive?"blue":"black",textDecoration:"none"})}
            >
            RESUME
            </NavLink>
            </div>
            <div className="navLink">
            <NavLink
            to='project'
            style={({isActive})=>({color:isActive?"blue":"black",textDecoration:"none"})}
            >
           PROJECT
            </NavLink>
            </div>
            <div className="navLink">
            <NavLink
            to='contact'
            style={({isActive})=>({color:isActive?"blue":"black",textDecoration:"none"})}
            >
           CONTACT
            </NavLink>
            </div>
            </div>
            
        </div>
        
        </>
    )
}