import React from 'react';
import Popup from '../customs/Popup';
import AddForm from './AddForm';

export default function NewOrder(props) {
  const { open, setOpen } = props;

  return (
    <Popup title="Añadir Pedido" openPopup={open} setOpenPopup={setOpen}>
      <AddForm setOpen={setOpen} />
    </Popup>
  );
}
