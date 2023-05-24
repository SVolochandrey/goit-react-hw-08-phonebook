import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

const initialValuesForm = {
  email: '',
  password: '',
};

const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValuesForm} onSubmit={handleSubmit}>
      <Form autoComplete="off" className={css.form}>
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
        </div>

        <div className={css.formField}>
          <label htmlFor="password" className={css.formLabel}>
            Password
          </label>
          <Field type="password" name="password" className={css.input} />
        </div>

        <button type="submit" className={css.formButton}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LogInForm;