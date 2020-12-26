import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Title } from '../customs/Title';
import ChartUser from './ChartUser';
import { Paper, Typography } from '@material-ui/core';
import ChartClient from './ChartClient';

export default function Records() {
  return (
    <Grid item container xs={12} md={8} lg={12}>
      <Title>Indicadores</Title>

      <Grid item xs={12} style={{ marginTop: '25px' }}>
        <Typography color="primary" variant="h5" align="center">
          USUARIOS
        </Typography>
        <Paper style={{ height: 'auto' }}>
          <ChartUser />
        </Paper>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '25px' }}>
        <Typography color="primary" variant="h5" align="center">
          CLIENTES
        </Typography>
        <Paper style={{ height: 'auto' }}>
          <ChartClient />
        </Paper>
      </Grid>
    </Grid>
  );
}
