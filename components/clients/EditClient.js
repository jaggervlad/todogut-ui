import React from 'react';
import EditForm from './EditForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_CLIENT, UPDATE_CLIENT } from '@/graphql/clients';
import { useMutation, useQuery } from '@apollo/client';
import Popup from '../customs/Popup';

export default function EditClient(props) {
  const { id, open, setOpen } = props;

  const [actualizarCliente] = useMutation(UPDATE_CLIENT);
  const { data, loading, error } = useQuery(GET_CLIENT, { variables: { id } });
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;
  return (
    <>
      {data.obtenerCliente && (
        <Popup
          title="Actualizar Cliente"
          openPopup={open}
          setOpenPopup={setOpen}
        >
          <EditForm
            setOpen={setOpen}
            id={id}
            updateClient={actualizarCliente}
            client={data.obtenerCliente}
          />
        </Popup>
      )}
    </>
  );
}
