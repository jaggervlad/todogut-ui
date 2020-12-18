import React from 'react';
import { StyledTableCell } from '../table/StyledTableCell';
import { StyledTableRow } from '../table/StyledTableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import EditCategorie from './EditCategorie';
import DeleteButton from './DeleteButton';

export default function BodyTable({ categorie }) {
  const { id, nombre } = categorie;
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  return (
    <StyledTableRow>
      <StyledTableCell>{nombre}</StyledTableCell>
      <StyledTableCell align="center">
        <DeleteButton id={id} />
      </StyledTableCell>
      <StyledTableCell align="center">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          <EditIcon />
        </Button>

        <EditCategorie id={id} open={open} setOpen={setOpen} />
      </StyledTableCell>
    </StyledTableRow>
  );
}
