import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";


function Header({ backButton }) {

    const history = useHistory();

    return (
        <div className="header">
            { backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon"></ArrowBackIosIcon>
                </IconButton>
                
            ) : (
                 <IconButton>
                     <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            
            )}
          
            <Link to="/">
            <img  className="header__logo"
            src="https://i2.wp.com/i.pinimg.com/originals/98/69/5d/98695d460910fb6ceeaf8e80805d9aa0.jpg"
            alt="tinder logo"></img>
            </Link>

            <Link to="/chat">
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
            </Link>
           
            
        </div>
    );
}

export default Header;