import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white text-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/">
              <img
                src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/logo2.png"
                alt="Company Logo"
                className="h-20 md:h-40"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:flex md:space-x-4 items-center text-center">
            <Link to="/company" className="hover:text-gray-600">会社概要</Link>
            <Link to="/news" className="hover:text-gray-600">お知らせ</Link>
            <Link to="/services" className="hover:text-gray-600">サービス</Link>
            <Link to="/recruit" className="hover:text-gray-600">採用情報</Link>
            <Link to="/contact" className="hover:text-gray-600">お問い合わせ</Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; 2024 First AI All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
