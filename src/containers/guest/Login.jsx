import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginWithEmailAndPassword } from '../../authentication/firebase';

function Login() {
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    const response = await loginWithEmailAndPassword(credential.email, credential.password);

    if (response.user.uid) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-900">
      <div className="basis-1/2">
        <img
          src="https://placekitten.com/600/600"
          alt="Placeholder"
          className="min-h-screen object-cover"
        />
      </div>
      <div className="basis-1/2 flex">
        <form onSubmit={loginHandler} className="w-full px-8 m-auto">
          <div className="mb-3">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 text-2xl text-gray-300 bg-gray-900 border border-gray-300 text-gray-600"
              onChange={textFieldEmailOnChangeHandler}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 text-2xl text-gray-300 bg-gray-900 border border-gray-300 text-gray-600"
              onChange={textFieldPasswordOnChangeHandler}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-3 py-2 text-2xl text-gray-300 border border-gray-300 text-gray-600 bg-red-600 capitalize"
            >
              Login
            </button>
          </div>
          <p className="text-white">
            Belum punya akun? <Link to="/register">Daftar sekarang</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
