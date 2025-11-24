import { Navbar } from './Navbar';
import { Footer } from './Footer';

import { ReactNode } from 'react';

import '../styles/layout.css';

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className='layout'>
      <Navbar />
      <div className='layout__content'>
        <nav></nav>

        <main className='main__content'>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
