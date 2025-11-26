import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Button from '../ui/Button';
import { LOGO_IMG } from '../../src/images/assets';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: '홈', path: '/' },
    { label: '출입국 업무', path: '/immigration' },
    { label: '일반 행정', path: '/general-admin' },
    { label: '사무소 소개', path: '/about' },
    { label: '상담 문의', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={LOGO_IMG} alt="청솔행정사사무소 로고" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-none">청솔행정사사무소</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium hover:text-secondary transition-colors ${
                  location.pathname === item.path ? 'text-secondary font-bold' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" onClick={() => window.location.href='/contact'}>
              <Phone className="w-4 h-4 mr-2" />
              무료 상담
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium py-2 border-b border-gray-50 ${
                  location.pathname === item.path ? 'text-secondary' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button fullWidth onClick={() => window.location.href='/contact'}>
              <Phone className="w-4 h-4 mr-2" />
              상담하기
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;