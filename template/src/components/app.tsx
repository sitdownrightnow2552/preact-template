import { FunctionalComponent, h } from 'preact';
import Home from '../routes/home';
import Header from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'preact/compat';

const Profile = lazy(() => import('../routes/profile'));
const App: FunctionalComponent = () => {
  return (
    <div id="app">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/profile/:user" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
