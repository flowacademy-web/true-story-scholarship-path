
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
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Name */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Flow Prep</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">홈</Link>
            <Link to="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">합격사례</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">블로그</Link>
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={() => window.dispatchEvent(new CustomEvent('openChatbot'))}
            >
              <MessageCircle className="w-4 h-4" />
              채팅 상담
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold">
              무료 상담
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">홈</Link>
              <Link to="/success-stories" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">합격사례</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">블로그</Link>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2 w-fit border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                onClick={() => window.dispatchEvent(new CustomEvent('openChatbot'))}
              >
                <MessageCircle className="w-4 h-4" />
                채팅 상담
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold w-fit">
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
