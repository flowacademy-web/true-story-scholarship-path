
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-400 shadow-sm border-b border-blue-300 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Name */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold text-white">Flow Prep</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">홈</Link>
            <Link to="/success-stories" className="text-white hover:text-gray-200 transition-colors">합격사례</Link>
            <Link to="/blog" className="text-white hover:text-gray-200 transition-colors">블로그</Link>
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.dispatchEvent(new CustomEvent('openChatbot'))}
            >
              <MessageCircle className="w-4 h-4" />
              채팅 상담
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              무료 상담
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-500 text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-300">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-white hover:text-gray-200 transition-colors">홈</Link>
              <Link to="/success-stories" className="text-white hover:text-gray-200 transition-colors">합격사례</Link>
              <Link to="/blog" className="text-white hover:text-gray-200 transition-colors">블로그</Link>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2 w-fit border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.dispatchEvent(new CustomEvent('openChatbot'))}
              >
                <MessageCircle className="w-4 h-4" />
                채팅 상담
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-gray-100 w-fit">
                무료 상담
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
