import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AuthLayout from '../layout/AuthLayout';
import { Title } from '../customs/Title';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { ALL_CATEGORIES } from '@/graphql/categories';
import { NewCategorie } from './NewCategorie';
import CategorieTable from './CategorieTable';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment, TextField } from '@material-ui/core';

export default function ListCategorie() {
  const { data, loading, error } = useQuery(ALL_CATEGORIES);

  const [open, setOpen] = useState(false);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == '') return items;
        else
          return items.filter((x) =>
            x.nombre.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <AuthLayout>
      <Grid item container xs={12} md={8} lg={12}>
        <Title>Categorias</Title>

        <Grid
          item
          container
          spacing={4}
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: '5px' }}
              onClick={() => setOpen(true)}
            >
              <AddIcon />
            </Button>

            <NewCategorie open={open} setOpen={setOpen} />
          </Grid>

          <Grid item>
            <TextField
              onChange={handleSearch}
              label="Buscar"
              type="text"
              variant="outlined"
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {loading && <CircularProgress />}
        {error && <Alert severity="error">{error.message}</Alert>}
        {data && (
          <CategorieTable
            categories={data.obtenerCategorias}
            filterFn={filterFn}
          />
        )}
      </Grid>
    </AuthLayout>
  );
}
