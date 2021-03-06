import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

export const LoginScreen = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.ui);

	const [formValues, handleInputChange] = useForm({
		email: 'maria@email.com',
		password: '123456',
	});

	const { email, password } = formValues;
	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(email, password));
	};

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	return (
		<>
			<h3 className='auth__title'>Sign in</h3>

			<form
				className='animate__animated animate__fadeIn animate__fast'
				onSubmit={handleLogin}>
				<div className='input-group'>
					<label>Email</label>
					<input
						type='text'
						placeholder='Email'
						name='email'
						className='auth__input'
						autoComplete='off'
						value={email}
						onChange={handleInputChange}
					/>
				</div>
				<div className='input-group'>
					<label>Email</label>
					<input
						type='password'
						placeholder='Password'
						name='password'
						className='auth__input'
						value={password}
						onChange={handleInputChange}
					/>
				</div>

				<button
					type='submit'
					className='btn btn-primary btn-block submit mt-5'
					disabled={loading}>
					Sign in
				</button>

				<div id='or' className='mt-1'>
					OR
				</div>

				<div className='auth__social-networks mb-5'>
					<p>Login with social networks</p>

					<div className='google-btn' onClick={handleGoogleLogin}>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								alt='google button'
							/>
						</div>
						<p className='btn-text'>
							<b>Sign in with google</b>
						</p>
					</div>
				</div>

				<Link to='/auth/register' className='link'>
					Don't have an acount? <span>Sign up</span>
				</Link>
			</form>
		</>
	);
};
