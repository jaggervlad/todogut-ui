import React, { useState } from 'react';
import { StyledTableCell } from '../table/StyledTableCell';
import { StyledTableRow } from '../table/StyledTableRow';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import PrintIcon from '@material-ui/icons/Print';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import { useStatusChange } from '@/hooks/useStatusChange';
import StatusChange from './StatusChange';
import { handlePdf } from '@/utils/events/pdf';
import { useDeleteOrder } from '@/hooks/useDeleteOrder';
import AddPaidType from './AddPaidType';

export default function BodyTable({ order }) {
  const products = order.pedido.map(({ __typename, ...product }) => product);
  const { id, total, cliente, estado, direccion } = order;
  const { nombre } = cliente;
  const { setStatus, status } = useStatusChange(estado);
  const [open, setOpen] = useState(false);
  const { handleDelete } = useDeleteOrder(id);
  return (
    <StyledTableRow>
      <StyledTableCell>{id.slice(5, 10)}</StyledTableCell>
      <StyledTableCell align="center">{nombre} </StyledTableCell>
      <StyledTableCell align="center">{direccion}</StyledTableCell>
      <StyledTableCell align="center">S/ {total.toFixed(2)}</StyledTableCell>
      <StyledTableCell align="center">
        <StatusChange
          id={id}
          status={status}
          setStatus={setStatus}
          client={cliente}
          products={products}
        />
      </StyledTableCell>

      {/* Ver */}
      <StyledTableCell align="center">
        <Link href="/seeorder/[id]" as={`/seeorder/${id}`}>
          <Button variant="contained" color="primary">
            <VisibilityIcon />
          </Button>
        </Link>
      </StyledTableCell>

      {/* Editar  */}
      <StyledTableCell align="center">
        <Button variant="contained" onClick={() => setOpen(true)}>
          <EditIcon />
        </Button>
        <AddPaidType id={id} open={open} setOpen={setOpen} />
      </StyledTableCell>

      {/* Generar Pdf */}
      <StyledTableCell align="center">
        <Button
          variant="contained"
          color="text"
          onClick={(e) => handlePdf(id, e)}
        >
          <PrintIcon />
        </Button>
      </StyledTableCell>

      <StyledTableCell align="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => handleDelete(e)}
        >
          <DeleteIcon />
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
}
