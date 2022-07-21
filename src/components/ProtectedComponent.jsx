// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

// Untuk bisa menggunakan useAuthState, kita membutuhkan auth dari authentication/firebase
import { auth } from '../authentication/firebase';

// Karena di sini akan nge-slot, maka harus menerima props children
const ProtectedComponent = ({ children }) => {
  // Kita gunakan hooksnya di sini
  const navigate = useNavigate();

  // Karena di sini kita hanya mengecek dari user, kita hanya gunakan [user] saja
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (isLoading) {
    return;
  }
  // eslint-disable-next-line consistent-return
  return children;
};

export default ProtectedComponent;
