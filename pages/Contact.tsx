import React, { useState } from 'react';
import { Send, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { CONTACT_HEADER } from '../src/images/assets';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: 'visa',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email subject and body
    const subject = `[청솔행정사사무소] 온라인 상담 신청 - ${formData.name}님`;
    const body = `이름: ${formData.name}
연락처: ${formData.phone}
상담분야: ${formData.type}
문의내용:
${formData.message}`;

    // Use mailto link to open email client (simulates sending mail form)
    window.location.href = `mailto:cirrus01@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Show success screen
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Input style for better readability and confirmation
  const inputClassName = "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium placeholder-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all shadow-sm";

  return (
    <div className="pt-20">
      <div className="relative h-64 bg-primary flex items-center justify-center">
         <img src={CONTACT_HEADER} alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-20" />
         <div className="relative z-10 text-center text-white px-4">
           <h1 className="text-4xl font-bold mb-4">상담 문의</h1>
           <p className="text-gray-200">빠르고 정확한 상담을 위해 최선을 다하겠습니다.</p>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form Area */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">온라인 상담 신청</h2>
            
            {isSubmitted ? (
              <div className="bg-white border border-green-200 rounded-xl p-8 text-center shadow-lg animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">신청이 접수되었습니다.</h3>
                <p className="text-gray-600 mb-6">
                  보내주신 내용이 담당자에게 메일로 전달되었습니다.<br />
                  빠른 시일 내에 연락드리겠습니다.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">
                  추가 문의하기
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-1">이름 / 회사명</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClassName}
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-1">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClassName}
                    placeholder="010-1234-5678"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-bold text-gray-800 mb-1">상담 분야</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={inputClassName}
                  >
                    <option value="출입국/비자">출입국/비자 (Visa)</option>
                    <option value="행정심판/구제">행정심판/구제 (Appeal)</option>
                    <option value="기업 인허가">기업 인허가 (Business)</option>
                    <option value="기타 문의">기타 문의 (Etc)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-1">문의 내용</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClassName}
                    placeholder="현재 상황과 궁금하신 점을 간략히 적어주세요."
                  />
                </div>
                <Button type="submit" size="lg" fullWidth>
                  <Send className="w-4 h-4 mr-2" /> 신청하기
                </Button>
              </form>
            )}
          </div>

          {/* Quick Contact & FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">간편 상담 안내</h2>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <a 
                href="https://open.kakao.com/o/gPYHmEEh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-50 p-6 rounded-xl text-center border border-yellow-100 cursor-pointer hover:bg-yellow-100 transition-colors block"
              >
                <MessageCircle className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800">카카오톡 상담</h3>
                <p className="text-xs text-gray-500 mt-1">오픈채팅 바로가기</p>
              </a>
              <a 
                href="tel:010-7128-8192"
                className="bg-blue-50 p-6 rounded-xl text-center border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors block"
              >
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-gray-800">전화 상담</h3>
                <p className="text-xs text-gray-500 mt-1">010-7128-8192</p>
              </a>
            </div>

            <SectionTitle title="자주 묻는 질문" align="left" />
            <div className="space-y-4">
              {[
                { q: "상담 비용은 어떻게 되나요?", a: "기본 전화 상담은 무료이며, 방문 심층 상담 시 소정의 비용이 발생할 수 있으나 수임 시 공제해 드립니다." },
                { q: "주말에도 상담이 가능한가요?", a: "주말 및 공휴일은 100% 예약제로 운영됩니다. 평일 중 미리 예약 부탁드립니다." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5">
                  <h4 className="font-bold text-primary mb-2 flex items-start">
                    <span className="text-secondary mr-2">Q.</span> {faq.q}
                  </h4>
                  <p className="text-gray-600 text-sm pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;