import React from 'react';
import { StyledTableCell } from '../table/StyledTableCell';
import { StyledTableRow } from '../table/StyledTableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import { DELETE_PRODUCT, ALL_PRODUCTS } from '@/graphql/products';
import EditProduct from './EditProduct';
import EditButton from './EditButton';

export default function BodyTable({ product }) {
  const { id, nombre, precio, existencia, categoria, presentacion } = product;
  const [eliminarProducto] = useMutation(DELETE_PRODUCT, {
    update(cache) {
      const { allProducts } = cache.readQuery({ query: ALL_PRODUCTS });

      cache.writeQuery({
        query: ALL_PRODUCTS,
        data: {
          allProducts: allProducts.filter((current) => current.id !== id),
        },
      });
    },
  });

  function handleDelete() {
    Swal.fire({
      title: 'Deseas eliminar este producto?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await eliminarProducto({ variables: { id } });
          Swal.fire('Correct', 'Se elimino el producto', 'success');
        } catch (error) {
          const errorMessage = error.message.replace('Graphql error: ', '');
          Swal.fire('Error', errorMessage, 'error');
        }
      }
    });
  }
  return (
    <StyledTableRow>
      <StyledTableCell>{nombre}</StyledTableCell>
      <StyledTableCell align="center">{existencia}</StyledTableCell>
      <StyledTableCell align="center">S/ {precio}</StyledTableCell>
      <StyledTableCell align="center"> {categoria.nombre}</StyledTableCell>
      <StyledTableCell align="center"> {presentacion}</StyledTableCell>
      <StyledTableCell align="center">
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          <DeleteIcon />
        </Button>
      </StyledTableCell>
      <StyledTableCell align="center">
        <EditButton id={id} />
      </StyledTableCell>
    </StyledTableRow>
  );
}
