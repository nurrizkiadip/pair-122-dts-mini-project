// Di sini kita akan import beberapa fungsi dari package firebase
import { initializeApp } from 'firebase/app';

// Di sini kita akan import beberapa fungsi dari package firebase/auth
// Firebase ini sebenarnya memungkinkan kita untuk bisa login dengan banyak sekali
// Provider (Google, Github, Meta, dsb).
// Tapi pada pembelajaran ini kita akan menggunakannya via Email saja yah
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Ini adalah konfigurasi yang di-copy dari halaman Firebase (SDK Setup and Configuration)
// Kita pilih yang versi "config" saja

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQxHHfg1kdP8s_JVVvN-4BpzswtWx7iPA',
  authDomain: 'movie-web-app-dts-rea2.firebaseapp.com',
  projectId: 'movie-web-app-dts-rea2',
  storageBucket: 'movie-web-app-dts-rea2.appspot.com',
  messagingSenderId: '628234454143',
  appId: '1:628234454143:web:80fb0a7284bef85661ab4a',
  measurementId: 'G-W4849J6C0Z',
};

// Sekarang di sini kita akan membuat seluruh fungsi yang digunakan untuk melakukan Register / Login

// Inisialisasi Firebase dan menggunakan Authentcation
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ---
// DALAM PEMBELAJARAN INI NAMA FUNGSI DITULIS DALAM BAHASA INDONESIA UNTUK MEMUDAHKAN PEMBELAJARAN
// PADA REAL CASE, MOHON GUNAKAN BAHASA INGGRIS DEMI KEMUDAHAN MEMBACA SECARA UNIVERSAL
// ---

// Fungsi untuk Register
// Kita gunakan versi async / await untuk memudahkan yah
const registerWithEmailAndPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    console.log('error code auth', err.code);
    console.log('error message auth', err.message);
    return null;
  }
};

// Fungsi untuk Login
// Kita gunakan versi async / await untuk memudahkan yah
const loginWithEmailAndPassword = async (email, password) => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);

    // Sama dengan register
    console.log('error code auth', err.code);
    console.log('error message auth', err.message);
    return null;
  }
};

// Fungsi untuk sign out
const logOut = async () => {
  // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
  try {
    return await signOut(auth);
  } catch (err) {
    console.log(err);
    return null;
  }
};

// Export seluruh fungsi yang dibuat + auth
export {
  auth, // Nanti akan digunakan untuk hooks react-hooks-firebase
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logOut,
};
