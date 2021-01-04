import React from 'react';
import useTable from '../table/useTable';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

const headCells = [
  { id: 'nombre', label: 'Nombre' },
  { id: 'eliminar', label: 'Eliminar', disableSorting: true },
  { id: 'editar', label: 'Editar', disableSorting: true },
];
export default function CategorieTable({ categories, filterFn }) {
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagination,
  } = useTable(categories, headCells, filterFn);

  const TblBody = (props) => (
    <TableBody>
      {recordsAfterPagination().map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.nombre}</TableCell>
          <TableCell align="center">
            <DeleteButton id={item.id} />
          </TableCell>
          <TableCell align="center">
            <EditButton id={item.id} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );

  return (
    <>
      <TblContainer>
        <TblHead />
        <TblBody />
      </TblContainer>
      <TblPagination />
    </>
  );
}
