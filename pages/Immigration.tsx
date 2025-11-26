import React, { useState } from 'react';
import { Check, FileText, Globe, Users } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { IMMIGRATION_HEADER } from '../src/images/assets';

const Immigration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visa' | 'investigation' | 'business'>('visa');

  const tabs = [
    { id: 'visa', label: '비자 발급/연장', icon: Globe },
    { id: 'investigation', label: '사범 심사 대응', icon: FileText },
    { id: 'business', label: '외국인 고용', icon: Users },
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative h-64 md:h-80 bg-gray-900">
        <img src={IMMIGRATION_HEADER} alt="Immigration" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">출입국 민원 서비스</h1>
            <p className="text-lg text-gray-200">복잡한 출입국 절차, 전문가와 함께라면 쉽습니다.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-4 rounded-lg text-lg font-medium transition-all ${
                  isActive 
                    ? 'bg-primary text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-secondary' : 'text-gray-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          {activeTab === 'visa' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-primary mb-6">주요 비자 업무 안내</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-secondary">E-7 (특정활동)</h3>
                  <p className="text-gray-600 text-sm mb-4">전문적인 지식이나 기술을 가진 외국인 인력을 도입하기 위한 비자입니다.</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2"/> 고용사유서 작성 대행</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2"/> 국민 고용 보호 심사 대응</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-secondary">F-2-7 (점수제 거주)</h3>
                  <p className="text-gray-600 text-sm mb-4">우수 인재를 위한 장기 체류 비자로, 점수 요건 충족이 핵심입니다.</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2"/> 점수표 모의 계산</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2"/> 소득 입증 서류 준비</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-secondary">F-5 (영주권)</h3>
                  <p className="text-gray-600 text-sm mb-4">한국에서의 영구적인 체류를 위한 최고의 신분입니다.</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2"/> 소득/자산 요건 검토</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2"/> 범죄경력증명서 아포스티유</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-secondary">국적 취득</h3>
                  <p className="text-gray-600 text-sm mb-4">일반 귀화, 간이 귀화 등 대한민국 국적 취득 절차입니다.</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2"/> 귀화 시험 면제 요건 확인</li>
                    <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2"/> 친속 관계 입증</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                 <Button variant="outline">필요 서류 체크리스트 다운로드</Button>
              </div>
            </div>
          )}

          {activeTab === 'investigation' && (
            <div className="animate-fadeIn">
               <h2 className="text-2xl font-bold text-primary mb-6">사범 심사 및 구제</h2>
               <p className="text-gray-600 mb-8">
                 출입국관리법 위반으로 인한 범칙금 부과, 강제 퇴거 명령 등의 위기 상황에서 
                 최선의 권익 보호를 받을 수 있도록 도와드립니다.
               </p>
               <div className="space-y-6">
                 <div className="border-l-4 border-red-500 pl-6 py-2">
                   <h3 className="text-lg font-bold text-gray-900">강제 퇴거 명령 구제</h3>
                   <p className="text-gray-600 mt-2">인도적 사유 입증 및 이의 신청을 통해 체류 허가를 지속할 수 있는 방안을 모색합니다.</p>
                 </div>
                 <div className="border-l-4 border-yellow-500 pl-6 py-2">
                   <h3 className="text-lg font-bold text-gray-900">벌금/범칙금 감경</h3>
                   <p className="text-gray-600 mt-2">법 위반 경위와 경제적 상황 등을 소명하여 처분 수위를 낮춥니다.</p>
                 </div>
                 <div className="border-l-4 border-green-500 pl-6 py-2">
                   <h3 className="text-lg font-bold text-gray-900">입국 규제 해제</h3>
                   <p className="text-gray-600 mt-2">과거 위반 사실로 인한 입국 금지 조치를 해제하고 재입국을 돕습니다.</p>
                 </div>
               </div>
            </div>
          )}

          {activeTab === 'business' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-primary mb-6">기업 외국인 고용 서비스</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    외국인 근로자 채용 시 복잡한 행정 절차로 고민이신가요?
                    채용 공고부터 비자 발급, 사후 관리까지 One-Stop 서비스를 제공합니다.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      E-9 근로자 E-7-4 숙련기능인력 전환
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      계절근로자(E-8) 초청 프로그램
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      외국인 투자 법인(D-8) 설립
                    </li>
                  </ul>
                  <Button>기업 상담 신청하기</Button>
                </div>
                <img 
                  src="https://picsum.photos/600/400?random=20" 
                  alt="Business meeting" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Immigration;