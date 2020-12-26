import React from 'react';
import Grid from '@material-ui/core/Grid';
import AuthLayout from '../layout/AuthLayout';
import { Title } from '../customs/Title';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Search from '../customs/Search';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

export default function ReportsView() {
  const [search, setSearch] = React.useState('');
  const searchRef = React.useRef();

  const handleSearch = React.useCallback(() => {
    setSearch(searchRef.current.value);
  }, []);
  return (
    <AuthLayout>
      <Grid item container xs={12} md={8} lg={12}>
        <Title>Reportes</Title>

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
              onClick={() => router.push('/neworder')}
            >
              Mensual
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: '5px' }}
              onClick={() => router.push('/orderspaid')}
            >
              Diario
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
      </Grid>
    </AuthLayout>
  );
}
