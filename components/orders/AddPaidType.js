import { NotSignIn } from '@/components/layout/AuthLayout';
import FormPay from '@/components/orders/FormPay';
import { GET_ORDER } from '@/graphql/orders';
import { useQuery } from '@apollo/client';
import { CircularProgress } from '@material-ui/core';
import Popup from '../customs/Popup';

export default function AddPaidType({ id, open, setOpen }) {
  const { data, loading, error } = useQuery(GET_ORDER, {
    variables: { id },
  });

  return (
    <>
      {loading && <CircularProgress />}
      {error && <NotSignIn />}
      {data && (
        <Popup title="Tipo de Pago" openPopup={open} setOpenPopup={setOpen}>
          <FormPay order={data.obtenerPedido} id={id} setOpen={setOpen} />
        </Popup>
      )}
    </>
  );
}
