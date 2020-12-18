import React from 'react';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import { useFormStyles } from '../../styles/makeStyles/forms';
import FormInput from '../forms/FormInput';
import { FormProvider, useForm } from 'react-hook-form';
import { CategorieSchema } from 'validationSchemas/categories';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery } from '@apollo/client';
import { GET_CATEGORIE, UPDATE_CATEGORIE } from '@/graphql/categories';
import Swal from 'sweetalert2';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Form } from '../forms/Form';
import Controls from '../controls/Controls';

export default function EditForm(props) {
  const { setOpen, id, actualizarCategoria, categoria } = props;
  const methods = useForm({
    defaultValues: {
      nombre: categoria.nombre,
    },
    resolver: yupResolver(CategorieSchema),
  });

  async function onSubmit(data) {
    const input = {
      ...data,
    };

    try {
      await actualizarCategoria({
        variables: { id, input },
      });

      setOpen(false);
    } catch (error) {
      const errorMsg = error.message.replace('Graphql error:', '');
      Swal.fire('Error', errorMsg, 'error');
    }
  }
  const { handleSubmit, formState, errors } = methods;
  const { isSubmitting } = formState;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormInput name="nombre" label="Nombre" errorobj={errors} />
          </Grid>
        </Grid>

        <div>
          <Controls.Button
            text="actualizar"
            type="submit"
            disabled={isSubmitting}
          >
            Actualizar
          </Controls.Button>
        </div>
      </Form>
    </FormProvider>
  );
}
