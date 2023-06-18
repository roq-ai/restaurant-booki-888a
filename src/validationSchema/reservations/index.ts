import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  number_of_guests: yup.number().integer().required(),
  customer_id: yup.string().nullable().required(),
  table_layout_id: yup.string().nullable().required(),
});
