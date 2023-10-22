import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-screen-2xl mt-7 mx-auto px-4 flex-1 w-full">
        <div className="flex gap-x-8">
          <Navigation />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
