import React, { FC, Fragment } from 'react';
import clsx from 'clsx';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@material-ui/core';
import { Dashboard, ChevronRight, ChevronLeft } from '@material-ui/icons';

import useStyles from './styles';

interface SidebarProps {
  open: boolean;
  handleClose: () => void;
  translate: (key: string) => string;
}

const Sidebar: FC<SidebarProps>  = ({ open ,handleClose, translate }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
  <Fragment>
    <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText primary={translate('dashboard')} />
          </ListItem>
        </List>
      </Drawer>
  </Fragment>
  )
}

export default Sidebar;
