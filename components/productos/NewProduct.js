import React from 'react';
import Popup from '../customs/Popup';
import AddForm from './AddForm';

export default function NewProduct({ open, setOpen }) {
  return (
    <Popup title="Añadir Producto" openPopup={open} setOpenPopup={setOpen}>
      <AddForm setOpen={setOpen} />
    </Popup>
  );
}
