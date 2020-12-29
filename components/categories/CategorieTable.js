import React, { useState } from 'react';
import useTable from '../table/useTable';
import {
  TableBody,
  TableCell,
  TableRow,
  Button,
  Toolbar,
  TextField,
  InputAdornment,
  makeStyles,
  Grid,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import DeleteButton from './DeleteButton';
import EditCategorie from './EditCategorie';
import { NewCategorie } from './NewCategorie';
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
