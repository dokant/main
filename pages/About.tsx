import React from 'react';
import { MapPin, Phone, Clock, Copy, Mail } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { ABOUT_PROFILE, LOCATION_MAP_PLACEHOLDER } from '../src/images/assets';

const About: React.FC = () => {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText("강남구 강남대로 320 황화빌딩 1202호");
    alert("주소가 복사되었습니다.");
  };

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="w-full md:w-1/3">
            <img 
              src={ABOUT_PROFILE} 
              alt="Representative" 
              className="rounded-xl shadow-lg w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h4 className="text-secondary font-bold tracking-widest mb-2">REPRESENTATIVE</h4>
            <h2 className="text-4xl font-bold text-primary mb-6">고객의 권익을<br/>최우선으로 생각합니다.</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                안녕하십니까, 청솔행정사사무소 대표 정충교입니다.
              </p>
              <p>
                낯선 땅에서의 생활, 복잡한 행정 절차로 인해 어려움을 겪고 계신가요?
                저희 사무소는 단순히 서류를 대행하는 것을 넘어, 
                고객님이 한국 사회의 당당한 일원으로 자리 잡을 수 있도록 
                든든한 다리가 되어드리고 있습니다.
              </p>
              <p>
                출입국 민원대행으로 실무 경험과 수많은 행정 심판 성공 사례를 바탕으로,
                가장 확실하고 안전한 해결책을 제시해 드립니다.
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <SectionTitle title="오시는 길" subtitle="강남구 강남대로 320 황화빌딩 1202호입니다." />
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-md relative">
            {/* Mock Map */}
            <img 
              src={LOCATION_MAP_PLACEHOLDER} 
              alt="Map" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 p-4 rounded-lg shadow-lg text-center backdrop-blur-sm">
                <p className="font-bold text-primary">지도 API 영역</p>
                <p className="text-xs text-gray-500">실제 구현 시 Naver/Kakao 지도 연동</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1 space-y-6">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <div className="flex items-start mb-4">
                 <MapPin className="w-6 h-6 text-secondary mr-3 mt-1" />
                 <div>
                   <h4 className="font-bold text-primary mb-1">주소</h4>
                   <p className="text-gray-600 text-sm mb-2">강남구 강남대로 320<br/>황화빌딩 1202호</p>
                   <button 
                    onClick={handleCopyAddress}
                    className="text-xs text-secondary flex items-center hover:underline"
                   >
                     <Copy className="w-3 h-3 mr-1" /> 주소 복사하기
                   </button>
                 </div>
               </div>
               
               <div className="flex items-start mb-4">
                 <Phone className="w-6 h-6 text-secondary mr-3 mt-1" />
                 <div>
                   <h4 className="font-bold text-primary mb-1">연락처</h4>
                   <p className="text-gray-600 text-sm">010-7128-8192</p>
                 </div>
               </div>

               <div className="flex items-start mb-4">
                 <Mail className="w-6 h-6 text-secondary mr-3 mt-1" />
                 <div>
                   <h4 className="font-bold text-primary mb-1">이메일</h4>
                   <p className="text-gray-600 text-sm">cirrus01@naver.com</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <Clock className="w-6 h-6 text-secondary mr-3 mt-1" />
                 <div>
                   <h4 className="font-bold text-primary mb-1">운영 시간</h4>
                   <p className="text-gray-600 text-sm">평일: 09:00 - 18:00</p>
                   <p className="text-gray-600 text-sm">점심: 12:00 - 13:00</p>
                   <p className="text-gray-400 text-xs mt-1">주말/공휴일 예약제</p>
                 </div>
               </div>
             </div>

             <div className="flex flex-col gap-3">
               <Button variant="primary" fullWidth onClick={() => window.open('https://map.naver.com', '_blank')}>네이버 지도 보기</Button>
               <Button variant="secondary" fullWidth onClick={() => window.open('https://map.kakao.com', '_blank')}>카카오맵 보기</Button>
             </div>
          </div>
        </div>

        {/* Parking Info */}
        <div className="bg-gray-50 p-6 rounded-lg text-sm text-gray-600 text-center">
          <p className="font-bold mb-2">🚗 주차 안내</p>
          <p>건물 내 지하 주차장 이용 가능 (상담 고객 1시간 무료)</p>
          <p>만차 시 인근 공영주차장 이용을 부탁드립니다.</p>
        </div>
      </div>
    </div>
  );
};

export default About;