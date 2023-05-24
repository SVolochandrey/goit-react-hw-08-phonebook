import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { register } from 'redux/auth/authOperations';
import css from './SignUpForm.module.css';

const scheme = object({
  name: string().min(2).required(),
  email: string().email().required(),
  password: string().min(5).max(10).required(),
});

const initialValuesForm = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValuesForm}
      onSubmit={handleSubmit}
      validationSchema={scheme}
    >
      <Form autoComplete="off" className={css.form}>
        <div className={css.formField}>
          <label htmlFor="name" className={css.formLabel}>
            Name
          </label>
          <Field
            autoComplete="name"
            type="text"
            name="name"
            className={css.input}
          />
          <ErrorMessage name="name" component={'div'} />
        </div>
        <div className={css.formField}>
          <label htmlFor="email" className={css.formLabel}>
            Email
          </label>
          <Field
            autoComplete="email"
            type="email"
            name="email"
            className={css.input}
          />
          <ErrorMessage name="email" component={'div'} />
        </div>
        <div className={css.formField}>
          <label htmlFor="password" className={css.formLabel}>
            Password
          </label>
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage name="password" component={'div'} />
        </div>

        <button type="submit" className={css.formButton}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;