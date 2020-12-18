import React from 'react';
import Popup from '../customs/Popup';
import { AddForm } from './AddForm';

export function NewCategorie(props) {
  const { open, setOpen } = props;

  return (
    <Popup title="Añadir Categoria" openPopup={open} setOpenPopup={setOpen}>
      <AddForm setOpen={setOpen} />
    </Popup>
  );
}
