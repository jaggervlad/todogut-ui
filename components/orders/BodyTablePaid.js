import React from 'react';
import { StyledTableCell } from '../table/StyledTableCell';
import { StyledTableRow } from '../table/StyledTableRow';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Link from 'next/link';
import { handlePdf } from '@/utils/events/pdf';
import PrintIcon from '@material-ui/icons/Print';
import StatusChange from './StatusChange';
import { useStatusChange } from '@/hooks/useStatusChange';

export default function BodyTablePaid({ order }) {
  const products = order.pedido.map(({ __typename, ...product }) => product);
  const { id, total, cliente, estado, direccion } = order;
  const { nombre } = cliente;
  const { status, setStatus } = useStatusChange(estado);

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
    </StyledTableRow>
  );
}
