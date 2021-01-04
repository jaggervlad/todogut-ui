import React from 'react';
import EditForm from './EditForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ALL_CATEGORIES } from '@/graphql/categories';
import { GET_PRODUCT } from '@/graphql/products';
import { useQuery } from '@apollo/client';
import Popup from '../customs/Popup';

export default function EditProduct(props) {
  const { id, open, setOpen } = props;

  const {
    data: categorias,
    loading: loadingCategories,
    error: errorCatergories,
  } = useQuery(ALL_CATEGORIES);
  const {
    data: product,
    loading: loadingProduct,
    error: errorProduct,
  } = useQuery(GET_PRODUCT, { variables: { id } });

  if (loadingCategories || loadingProduct) return <CircularProgress />;
  if (errorCatergories || errorProduct)
    return (
      <Alert severity="error">
        {errorCatergories.message || errorProduct.message}
      </Alert>
    );
  const categoriesMap = categorias?.obtenerCategorias.map((item, i) => ({
    id: item.id,
    label: item.nombre,
  }));

  return (
    <>
      {product.obtenerProducto && (
        <Popup
          title="Actulizar Producto"
          openPopup={open}
          setOpenPopup={setOpen}
        >
          <EditForm
            product={product.obtenerProducto}
            id={id}
            categories={categoriesMap}
            setOpen={setOpen}
          />
        </Popup>
      )}
    </>
  );
}
