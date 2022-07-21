import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { logOut } from '../../authentication/firebase';
import Home from './Home';

function UserApp() {
  const navigate = useNavigate();

  useEffect(() => {
    const headerHeight = document.querySelector('header').clientHeight;
    const footerHeight = document.querySelector('footer').clientHeight;
    const mainSection = document.querySelector('main');
    mainSection.style.paddingBlockStart = `${headerHeight}px`;
    mainSection.style.minHeight = `calc(100vh - ${headerHeight + footerHeight}px)`;
  }, []);

  const signOutHandler = async () => {
    const response = await logOut();
    if (response) {
      navigate('/login');
    }
  };

  return (
    <div className="bg-black text-white">
      <header className="shadow-md shadow-white">
        <div id="header" className="py-3">
          <div className="container py-0 flex justify-between">
            <div>
              <img src="https://placekitten.com/60/60" alt="Placeholder" className="object-cover" />
            </div>
            <div>
              <button type="button" onClick={signOutHandler}>
                LogOut
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container mx-auto py-4 px-4">
          <Routes>
            <Route path="/movie/:movieId" element={<Home />} />
          </Routes>
        </div>
      </main>

      <footer>
        <div className="container mx-auto text-center py-4">Movie Web App | DTS PROA | React2</div>
      </footer>
    </div>
  );
}

export default UserApp;
