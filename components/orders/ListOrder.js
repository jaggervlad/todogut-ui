import React, { useCallback, useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import AuthLayout from '../layout/AuthLayout';
import { Title } from '../customs/Title';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import AddIcon from '@material-ui/icons/Add';
import CustomTable from './CustomTable';
import Search from '../customs/Search';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { ALL_ORDERS } from '@/graphql/orders';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import NewOrder from './NewOrder';
export default function ListOrder() {
  const { data, loading, error } = useQuery(ALL_ORDERS);
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const searchRef = useRef();

  const handleSearch = useCallback(() => {
    setSearch(searchRef.current.value);
  }, []);

  return (
    <AuthLayout>
      <Grid item container xs={12} md={8} lg={12}>
        <Title>Pedidos</Title>

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
            <NewOrder open={open} setOpen={setOpen} />

            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: '5px' }}
              onClick={() => router.push('/orderspaid')}
            >
              <MonetizationOnIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: '5px' }}
              onMouseEnter={() => 'Pedidos Despachados'}
              onClick={() => router.push('/ordersdispatched')}
            >
              <LocalShippingIcon />
            </Button>
          </Grid>

          <Grid item>
            <Search
              search={search}
              handleSearch={handleSearch}
              searchRef={searchRef}
            />
          </Grid>
        </Grid>

        {loading && <CircularProgress />}
        {error && <Alert severity="error">{error.message}</Alert>}
        {data && <CustomTable rows={data.obtenerPedidos} search={search} />}
      </Grid>
    </AuthLayout>
  );
}
