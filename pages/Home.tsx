import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { HERO_BG, TRUST_IMG, SERVICE_ICON_VISA, SERVICE_ICON_LAW } from '../src/images/assets';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Cityscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              외국인과 함께하는<br />
              <span className="text-secondary">든든한 파트너</span>,<br />
              청솔행정사사무소
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
              비자 연장부터 영주권 취득, 복잡한 행정심판까지.<br />
              강남역 4번 출구에서 시작하는 새로운 기회를 만나보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  무료 상담 신청하기 <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
                  오시는 길 보기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="무엇을 도와드릴까요?" 
            subtitle="청솔행정사사무소는 고객의 상황에 맞는 최적의 솔루션을 제공합니다." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '출입국 비자 대행', desc: 'E-7, F-2, 영주권 등 비자 발급 및 연장', icon: SERVICE_ICON_VISA },
              { title: '행정심판 구제', desc: '영업정지, 음주운전 등 부당한 처분 구제', icon: SERVICE_ICON_LAW },
              { title: '기업 인허가', desc: '법인 설립, 공장 등록, 인허가 대행', icon: 'https://picsum.photos/400/300?random=10' },
              { title: '산재 및 보상', desc: '외국인 근로자 산재 처리 및 보상 청구', icon: 'https://picsum.photos/400/300?random=11' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <Link to={idx === 0 ? "/immigration" : "/general-admin"} className="text-secondary font-medium text-sm flex items-center hover:underline">
                    자세히 보기 <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                  src={TRUST_IMG} 
                  alt="Trust" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                수많은 성공 사례가 증명합니다.
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                복잡한 서류 준비와 까다로운 심사 과정, 혼자 고민하지 마세요.
                청솔행정사사무소는 수년간의 경험과 노하우를 바탕으로 고객님의 문제를
                가장 빠르고 정확하게 해결해 드립니다.
              </p>
              
              <Link to="/contact">
                <Button variant="primary">상담 예약하기</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="고객 후기" subtitle="청솔과 함께 새로운 시작을 하신 분들의 이야기입니다." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "김** 대표", role: "제조업 운영", text: "E-7 비자 초청이 까다로워 막막했는데, 꼼꼼한 서류 준비 덕분에 한 번에 허가받았습니다." },
              { name: "Michael T.", role: "영어 강사", text: "Professional service! They helped me with my visa extension quickly and efficiently." },
              { name: "이** 님", role: "영주권 취득", text: "F-5 영주권 취득 요건이 복잡해서 걱정했는데, 소득 요건부터 서류까지 완벽하게 가이드해주셨습니다." }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Preview CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 상담을 시작하세요</h2>
          <p className="text-gray-300 mb-8">강남역 4번 출구 도보 5분 거리. 방문 상담 시 더 자세한 안내가 가능합니다.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="lg">010-7128-8192 전화하기</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">오시는 길 안내</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;