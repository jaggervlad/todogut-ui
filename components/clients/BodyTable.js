import React from 'react';
import { StyledTableCell } from '../table/StyledTableCell';
import { StyledTableRow } from '../table/StyledTableRow';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteButton from './DeleteButton';
import EditClient from './EditClient';

export default function BodyTable({ client }) {
  const { id, cedula, nombre, mail, telefono } = client;
  const [open, setOpen] = React.useState(false);

  return (
    <StyledTableRow>
      <StyledTableCell>{nombre}</StyledTableCell>
      <StyledTableCell align="center">{cedula} </StyledTableCell>
      <StyledTableCell align="center">{telefono}</StyledTableCell>
      <StyledTableCell align="center"> {mail}</StyledTableCell>
      <StyledTableCell align="center">
        <DeleteButton id={id} />
      </StyledTableCell>
      <StyledTableCell align="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
        >
          <EditIcon />
        </Button>

        <EditClient open={open} setOpen={setOpen} id={id} />
      </StyledTableCell>
    </StyledTableRow>
  );
}
