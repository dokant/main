import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Scale, Building, FileText } from 'lucide-react';
import { ADMIN_HEADER } from '../src/images/assets';

const GeneralAdmin: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services = [
    {
      title: "행정심판 구제",
      icon: Scale,
      content: [
        "영업정지 구제: 청소년 주류 판매, 위생법 위반 등 영업정지 처분에 대한 집행정지 및 심판 청구",
        "음주운전 구제: 면허 취소/정지 처분에 대한 이의신청 및 행정심판",
        "토지보상/수용: 공익사업으로 인한 토지 수용 시 정당한 보상금 청구",
        "국가유공자 등록: 요건 심사 탈락 시 재심 신청 및 행정심판 대응"
      ]
    },
    {
      title: "인허가 및 법인 설립",
      icon: Building,
      content: [
        "법인 설립: 주식회사, 사단법인, 재단법인 설립 허가 및 등기 절차 자문",
        "공장 등록: 공장 설립 승인, 제조시설 설치 신고, 직접생산확인 증명",
        "의약외품/화장품: 제조업 등록, 품목 허가, 수입 판매업 신고",
        "사내근로복지기금: 기금 법인 설립 인가 및 운영 규정 작성"
      ]
    },
    {
      title: "민원 및 권리 구제",
      icon: FileText,
      content: [
        "탄원서/반성문: 형사 사건, 행정 처분 시 선처를 위한 설득력 있는 서면 작성",
        "진정서/내용증명: 억울한 사정을 호소하거나 의사를 명확히 통지",
        "학교폭력 재심: 학폭위 처분에 대한 불복 절차 및 재심 청구",
        "농가 피해 보상: 기상재해 등으로 인한 농작물 피해 보상금 청구 대행"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative h-64 md:h-80 bg-gray-900">
        <img src={ADMIN_HEADER} alt="General Admin" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">행정 서비스</h1>
            <p className="text-lg text-gray-200">개인과 기업의 정당한 권리를 지켜드립니다.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`border rounded-xl transition-all duration-300 ${
                    isOpen ? 'border-primary bg-white shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg mr-4 ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xl font-bold ${isOpen ? 'text-primary' : 'text-gray-700'}`}>
                        {service.title}
                      </span>
                    </div>
                    {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-400" />}
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 border-t border-gray-100 mx-6 mt-2">
                      <ul className="space-y-3 mt-4">
                        {service.content.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralAdmin;