import { ReactNode } from 'react';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen cursor-custom">
      <CustomCursor />
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;