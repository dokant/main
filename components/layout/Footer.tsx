import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">청솔행정사사무소</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              외국인과 함께하는 든든한 파트너.<br />
              고객의 권익을 최우선으로 생각하며,<br />
              최상의 행정 서비스를 제공합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-secondary">주요 서비스</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/immigration" className="hover:text-white">출입국/비자</Link></li>
              <li><Link to="/general-admin" className="hover:text-white">행정심판 구제</Link></li>
              <li><Link to="/general-admin" className="hover:text-white">법인/기업 설립</Link></li>
              <li><Link to="/general-admin" className="hover:text-white">인허가 업무</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-secondary">연락처</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>강남구 강남대로 320<br/>황화빌딩 1202호</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>010-7128-8192</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>cirrus01@naver.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-secondary">업무 시간</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex justify-between">
                <span>평일</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>점심시간</span>
                <span>12:00 - 13:00</span>
              </li>
              <li className="text-gray-500 mt-2 text-xs">
                * 토요일, 일요일 및 공휴일은 예약 상담만 가능합니다.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 청솔행정사사무소. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">개인정보처리방침</span>
            <span className="cursor-pointer hover:text-white">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;