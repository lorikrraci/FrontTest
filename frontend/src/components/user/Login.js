import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';
import { login, clearErrors } from '../../actions/userActions';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }

        if (error) {
            dispatch(clearErrors());
        }
    }, [dispatch, isAuthenticated, error, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title={'Login'} />
                    <div
                        className="row wrapper"
                        style={{
                            backgroundImage: "src=./images/KB-Vellaznimi-logo.png" ,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg" onSubmit={submitHandler}>
                                <h1 className="mb-3">Login</h1>
                                <div className="form-group">
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Password</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <Link to="/password/forgot" className="float-right mb-4">
                                    Forgot Password?
                                </Link>

                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    style={{
                                        backgroundColor: '#e11b22',
                                        color: '#fff',
                                        border: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    LOGIN
                                </button>

                                <Link to="/register" className="float-right mt-3">
                                    New User?
                                </Link>
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Login;
