import React, { useState } from 'react';
import Button from './Button';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Linear Algebra', path: '/linear-algebra' },
    { name: 'Machine Learning', path: '/machine-learning' },
    { name: 'About', path: '/about' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark bg-opacity-90 backdrop-blur-sm border-b border-gray-dark">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-accent-blue">LinOasis</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-gray hover:text-accent-blue transition-colors link-hover font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2"
            >
              {isSidebarOpen ? 'Close' : 'Menu'}
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-medium bg-opacity-95 backdrop-blur-md border-l border-gray-dark transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-accent-blue">Menu</h2>
            <Button
              variant="text"
              size="sm"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✕
            </Button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-gray hover:text-accent-blue transition-colors link-hover font-medium py-2 border-b border-gray-dark"
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8">
              <Button variant="primary" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
