import React, { FC, useContext, useState, useEffect, useRef, useCallback } from 'react'
import clsx from 'clsx';
import { AppBar, Button, CssBaseline, FormControl, IconButton, InputLabel, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { signout } from '../../../store/actions/authActions';
import { LangContext } from '../../../context/lang';

import { useStyles } from './styles';

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
  component: any;
}

const Header: FC<HeaderProps> = ({ fixed, transparent, component: Sidebar }) => {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const chooseLanguageHandler = (e:React.ChangeEvent<{value: unknown}>) => {
    setLanguage(e.target.value as string);
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
          <FormControl variant="outlined" className="header__nav_lang">
            <InputLabel>{translate('language')}</InputLabel>
            <Select
              label="Language"
              value={language}
              onChange={chooseLanguageHandler}
            >
              <MenuItem value={'KO'}>{translate('korean')}</MenuItem>
              <MenuItem value={'EN'}>{translate('english')}</MenuItem>
            </Select>
          </FormControl>
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
      <Sidebar open={open} handleClose={handleClose} translate={translate}/>
    </div>
  )
}

export default Header;
