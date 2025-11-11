import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [, forceUpdate] = useState();

  useLayoutEffect(() => {
    forceUpdate({});
  }, []);

  const menuItems = [
    { to: '/company', label: '会社概要', subLabel: '[ COMPANY ]' },
    { to: '/news', label: 'お知らせ', subLabel: '[ NEWS ]' },
    {
      to: '/services',
      label: 'サービス',
      subLabel: '[ SERVICE ]',
      subItems: [
        { to: '/services#service1', label: '生成AI活用支援事業' },
        { to: '/services#service2', label: 'システム開発事業' },
        { to: '/services#service3', label: 'Comingsoon...' },
      ],
    },
    { to: '/recruit', label: '採用情報', subLabel: '[ RECRUIT ]' },
    { to: '/contact', label: 'お問い合わせ', subLabel: '[ CONTACT ]' },
  ];

 {/*  { to: '/cases', label: '導入事例', subLabel: '[ CASE ]' },*/}

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white bg-opacity-90">
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
   
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/logo4+(1).jpg" 
              alt="Company Logo" 
              className="h-20"
            />
          </Link>
          {/* モバイルメニューのトグルボタン */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {/* デスクトップメニュー */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link to={item.to} className="text-black hover:text-gray-600 text-center group">
                  <span className="block text-sm group-hover:text-gray-600">{item.label}</span>
                  <span className="block text-xs text-gray-500 group-hover:text-gray-600">{item.subLabel}</span>
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-white bg-opacity-80 backdrop-blur-sm shadow-lg rounded-md overflow-hidden">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link key={subIndex} to={subItem.to} className="block px-4 py-2 text-sm text-black hover:bg-gray-200 border-b border-gray-200 last:border-b-0" role="menuitem">{subItem.label}</Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-sm shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.to} className="text-black hover:text-gray-600 text-center group" onClick={() => setIsOpen(false)}>
                <span className="block text-sm group-hover:text-gray-600">{item.label}</span>
                <span className="block text-xs text-gray-500 group-hover:text-gray-600">{item.subLabel}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
