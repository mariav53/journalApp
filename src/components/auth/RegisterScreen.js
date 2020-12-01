import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const { msgErr } = useSelector((state) => state.ui);

	const [formValues, handleInputChange] = useForm({
		name: 'Maria',
		email: 'maria@email.com',
		password: '123456',
		password2: '123456',
	});

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(startRegisterWithEmailPassword(email, password, name));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('email is not valid'));
			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(setError('password is not valid'));
			return false;
		}
		dispatch(removeError());
		return true;
	};

	return (
		<>
			<h3 className='auth__title'>Register</h3>

			<form
				className='animate__animated animate__fadeIn animate__fast'
				onSubmit={handleRegister}>
				{msgErr && <div className='auth__alert-error'>{msgErr}</div>}
				<input
					type='text'
					placeholder='Name'
					name='name'
					className='auth__input'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>

				<input
					type='text'
					placeholder='Email'
					name='email'
					className='auth__input'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
					value={password}
					onChange={handleInputChange}
				/>

				<input
					type='password'
					placeholder='Confirm password'
					name='password2'
					className='auth__input'
					value={password2}
					onChange={handleInputChange}
				/>

				<button type='submit' className='btn btn-primary btn-block mb-5'>
					Register
				</button>

				<Link to='/auth/login' className='link'>
					Already registered?
				</Link>
			</form>
		</>
	);
};
