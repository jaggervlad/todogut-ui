import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CategoryIcon from '@material-ui/icons/Category';
import { useRouter } from 'next/router';
import BarChartIcon from '@material-ui/icons/BarChart';

export function MaintListItems() {
  const router = useRouter();
  return (
    <div>
      <ListItem button onClick={() => router.push('/profile')}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>

      <ListItem button onClick={() => router.push('/orders')}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Pedidos" />
      </ListItem>

      <ListItem button onClick={() => router.push('/clients')}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItem>

      <ListItem button onClick={() => router.push('/products')}>
        <ListItemIcon>
          <CardTravelIcon />
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItem>

      <ListItem button onClick={() => router.push('/categories')}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categorias" />
      </ListItem>
    </div>
  );
}

export const SecondaryListItems = () => {
  const router = useRouter();
  return (
    <div>
      <ListSubheader inset>Resultados</ListSubheader>

      <ListItem button onClick={() => router.push('/indicadores')}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Indicadores" />
      </ListItem>

      <ListItem button onClick={() => router.push('/reports')}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Reportes" />
      </ListItem>

      <ListItem button onClick={() => router.push('/users')}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItem>
    </div>
  );
};
