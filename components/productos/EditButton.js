import { Button } from '@material-ui/core';
import React from 'react';
import EditProduct from './EditProduct';
import EditIcon from '@material-ui/icons/Edit';

export default function EditButton(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        <EditIcon />
      </Button>
      <EditProduct id={props.id} open={open} setOpen={setOpen} />
    </>
  );
}
