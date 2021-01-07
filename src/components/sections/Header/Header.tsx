import React, { FC, useContext, useState, useEffect, useRef, useCallback } from 'react'
import clsx from 'clsx';
import { AppBar, Button, CssBaseline, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { signout } from '../../../store/actions/authActions';
import { LangContext } from '../../../context/lang';

import { useStyles } from './styles';
import Sidebar from '../Sidebar/Sidebar';

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}

const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  }
  
  const logoutClickHandler = () => {
    dispatch(signout());
  }

  // language
  const { state: { language }, dispatch: { setLanguage, translate } } = useContext(LangContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLUListElement>(null); 

  let headerClass = 'header';

  if(fixed) {
    headerClass += ' header--fixed';
  }

  if(transparent) {
    headerClass += ' header--transparent'
  }

  const handleClickOutside = useCallback((e) => {
    if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(false);
    }
  }, [showDropdown, setShowDropdown, dropdownEl]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [handleClickOutside]);

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false);
    setLanguage(value);
  }
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Menu />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link to={!authenticated ? "/" : "/dashboard"}>{translate('driving mate')}</Link>
          </Typography>
          <div className="header__nav_lang">
            <p className="selected" onClick={() => setShowDropdown(!showDropdown)}>{language}</p>
            {showDropdown && <ul className="dropdown" ref={dropdownEl}>
                <li onClick={() => chooseLanguageHandler('KO')}>KO</li>
                <li onClick={() => chooseLanguageHandler('EN')}>EN</li>
              </ul>}
          </div>
          {
            !authenticated ? <div className="buttons">
              <Button onClick={() => history.push('/signup')}>{translate('sign up')}</Button>
              <Button onClick={() => history.push('/signin')}>{translate('sign in')}</Button>
            </div>
            :
            <Button onClick={logoutClickHandler}>{translate('sign out')}</Button>
          }
        </Toolbar>
      </AppBar>
      <Sidebar open={open} handleClose={handleClose} />
    </div>
  )
}

export default Header;
