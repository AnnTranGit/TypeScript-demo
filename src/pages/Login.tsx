import { useFormik } from 'formik'
import React from 'react'
import { AppDispatch } from '../redux/store'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { signinActionApi } from '../redux/reducers/userReducer'

type Props = {}

export interface UserSignInForm {
  email: string,
  password: string
}

const Login = (props: Props) => {

  const dispatch: AppDispatch = useDispatch()

  const signInFrm = useFormik<UserSignInForm>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Email cannot be blank '),
      password: yup.string().required('Password cannot be blank')
    }),

    onSubmit: (values: UserSignInForm) => {
      //dua du lieu len redux
      const action = signinActionApi(values)
      dispatch(action)
    }
  })
  return (
    <form className='container' onSubmit={signInFrm.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input id='email' name='email' className='form-control' onChange={signInFrm.handleChange} onBlur={signInFrm.handleBlur} />
        <p className='text text-danger'>{signInFrm.errors.email && signInFrm.errors.email}</p>
      </div>
      <div className="form-group">
        <p>Password</p>
        <input type='password' id='password' name='password' className='form-control' onChange={signInFrm.handleChange} />
        <p className='text text-danger'>{signInFrm.errors.password && signInFrm.errors.password}</p>
      </div>
      <div className="form-group">
        <button type='submit' className='btn btn-success' >Sign in </button>
      </div>
    </form>
  )
}

export default Login