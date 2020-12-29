import React from 'react';
import AddForm from './AddForm';
import Popup from '../customs/Popup';

export default function NewClient(props) {
  const { open, setOpen } = props;
  return (
    <Popup title="Añadir Cliente" openPopup={open} setOpenPopup={setOpen}>
      <AddForm setOpen={setOpen} />
    </Popup>
  );
}
