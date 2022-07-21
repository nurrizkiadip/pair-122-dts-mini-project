import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './containers/guest/Login';
import UserApp from './containers/user/UserApp';
import ProtectedComponent from './components/ProtectedComponent';
import Register from './containers/guest/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedComponent>
              <Login />
            </ProtectedComponent>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <UserApp />
            </ProtectedComponent>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
