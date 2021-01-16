import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { List, ListSubheader, Typography, ListItem, ListItemIcon, ListItemText, Icon, } from '@material-ui/core';
import { ListItemData } from '../LlistItemData';


import { useStyles } from '../userPageElements';

interface MenuListProps {
  open: boolean;
}
 
const MenuList: FC<MenuListProps> = ({ open }) => {
  const classes = useStyles();

  return (
    <>
      <List>
        <ListSubheader className={classes.subMenuTitle}>
          <Typography 
            color="secondary"
            className={ open ? '' : classes.closeNone}
          >Reports
          </Typography>
        </ListSubheader>
        {ListItemData.map((item) => (
          <ListItem key={item.id} button style={{ marginTop: 10, alignItems: 'center' }}>
            <Link to={item.path} style={{ flexDirection: 'column' }}>
              <ListItemIcon className={classes.icon}>
                <Icon component={item.icon} />
                <ListItemText>
                  <Typography 
                    color="secondary"
                    className={ open ? '' : classes.closeNone}
                    style={{ marginLeft: 10 }}
                    >{item.id}
                  </Typography>
                  </ListItemText>
                </ListItemIcon>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default MenuList
