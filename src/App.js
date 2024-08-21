import './app.css';
import MainPage from './pages/main';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactProfile from './pages/contact-profile';

function App() {
  axios.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_USER_TOKEN}`;

  return (
    <div className="App">
      <div className="text-black max-w-screen-xl m-auto h-screen">
        <BrowserRouter>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="contact/:id" element={<ContactProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
