"use client";
import React , { useState, useEffect }from "react";
import { AlertCircle, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // APIコールをここに実装
      console.log('送信されたデータ:', formData);
      setIsSubmitted(true);
    } catch (err) {
      setError('送信に失敗しました。後でもう一度お試しください。');
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-md">
        <p className="font-bold">送信完了</p>
        <p>お問い合わせありがとうございます。内容を確認の上、後ほどご連絡いたします。</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8 w-full">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">お問い合わせ</div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">弊社サービスについて</h2>
        <p className="mt-2 text-gray-500">ご質問やご要望がございましたら、以下のフォームよりお気軽にお問い合わせください。</p>
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="your-email@example.com"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">企業名</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="株式会社Example"
            />
          </div>
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">役職</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="マーケティング部長"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="ご質問やご要望をお書きください"
            ></textarea>
          </div>
          {error && (
            <div className="sm:col-span-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
              <p className="font-bold">エラー</p>
              <p>{error}</p>
            </div>
          )}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              送信 <Send className="ml-2 h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function Home() {
  const [isVisible, setIsVisible] = React.useState({});
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentCaseIndex, setCurrentCaseIndex] = React.useState(0);
  const [selectedCase, setSelectedCase] = React.useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const successCases = [
    {
      company: "新オフィス開設のお知らせ",
      industry: "Blog",
      date:"2024/03/01",
      challenge: "大阪に新オフィスを置きました。",
      url:"https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/river-6175173_1920.jpg",
    },
    {
      company: "インターン生の募集",
      industry: "プレスリリース",
      date:"2024/06/01",
      challenge: "大学生インターンの募集を開始いたしました。",
      url:"https://s3.ap-northeast-3.amazonaws.com/testunity1.0/digital-marketing-1725340_1920.jpg",
    },
    {
      company: "代表の灘波が教材開発を担当",
      industry: "プレスリリース",
      date:"2024/08/01",
      challenge: "国内最大のAIコミュニティSHIFT AI様の下で、弊社代表が「AIエンジニアコース」を作成いたしました。",
      url:"https://s3.ap-northeast-3.amazonaws.com/testunity1.0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88+2024-08-08+22.28.32.png",
    },
   
  ];
  const [activeService, setActiveService] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      title: '生成AI活用研修事業',
      description: '企業様や組織向けに、最新の生成AI技術の活用方法を学ぶ研修プログラムを提供します。',
      details: '実践的なワークショップやケーススタディ、e-learningを通じて、生成AIツールの効果的な使用法、ビジネスプロセスへの統合、倫理的な配慮事項などを学びます。参加者は、自社の業務に即した生成AIの活用、戦略を立案できるようになります。',
      imageUrl: 'https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%81%82%E3%81%82%E3%81%82+(1).png'
    },
    {
      id: 2,
      title: '生成AIコンサルティング事業',
      description: '企業の生成AI導入・活用戦略の策定から実装まで、包括的なサポートを提供します。',
      details: '業界や企業様特有のニーズを分析し、最適な生成AIソリューションを提案します。ROI分析、プロトタイピング、パイロットプロジェクトの実施など、段階的なアプローチで確実な成果を実現します。また、組織の変革管理や社内AIリテラシー向上もサポートします。',
      imageUrl: 'https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%81%82%E3%81%82%E3%81%82+(2).png'
    },
    {
      id: 3,
      title: '生成AI受託開発事業',
      description: 'お客様のニーズに合わせた、カスタム生成AIソリューションの開発を行います。',
      details: '自然言語処理、画像生成、音声合成など、多様な生成AI技術を活用したアプリケーションやシステムを開発します。既存システムとの統合、スケーラビリティの確保、セキュリティ対策など、企業様レベルの要件に対応した堅牢なソリューションを提供します。',
      imageUrl: 'https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/software-development-6523979_1920.jpg'
    },
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const partners = [
    { name: "Google", icon: "fab fa-google" },
    { name: "Microsoft", icon: "fab fa-microsoft" },
    { name: "Amazon", icon: "fab fa-amazon" },
    { name: "IBM", icon: "fab fa-ibm" },
    { name: "Apple", icon: "fab fa-apple" },
    { name: "Facebook", icon: "fab fa-facebook" },
    { name: "Twitter", icon: "fab fa-twitter" },
    { name: "GitHub", icon: "fab fa-github" },
  ];
  

  const servicesvideo = [
    {
      icon: "fas fa-robot",
      title: "営業部門",
      description:
        "営業組織の生産性を飛躍させる生成AI活用について解説します",
      image: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%86%E3%82%99%E3%82%B5%E3%82%99%E3%82%A4%E3%83%B3.png",
    },
    {
      icon: "fas fa-chart-line",
      title: "マーケティング部門",
      description:
        "マーケティングの内製化、効率化を実現する生成AI活用について解説します。",
      image: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%86%E3%82%99%E3%82%B5%E3%82%99%E3%82%A4%E3%83%B3+(8).png",
    },
    {
      icon: "fas fa-cogs",
      title: "マネージャー部門",
      description:
        "マネージャー層が生産性を飛躍させる生成AI活用について解説します。",
      image: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%86%E3%82%99%E3%82%B5%E3%82%99%E3%82%A4%E3%83%B3+(9).png",
    },
    {
      icon: "fas fa-chart-pie",
      title: "広告運用",
      description:
        "広告運用の内製化、効率化に役立つ生成AI活用について解説します。。",
      image: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%81%82%E3%81%82%E3%81%82.png",
    },
  ];

  const features = [
    {
      icon: "fas fa-robot",
      problem: "生成AIの導入に踏み切れない",
      solution: "専門家による受託開発とコンサルティング",
      details:
        "お客様のビジネスニーズに合わせた生成AIソリューションの設計から実装まで、専門家がトータルサポートします。導入の障壁を取り除き、スムーズな AI 活用を実現します。",
    },
    {
      icon: "fas fa-chalkboard-teacher",
      problem: "社内に生成AI活用のノウハウがない",
      solution: "カスタマイズされた企業研修プログラム",
      details:
        "生成AIの基礎から実践的な活用方法まで、御社のニーズに合わせた研修プログラムを提供。社員のAIリテラシー向上と業務効率化を同時に実現します。",
    },
    {
      icon: "fas fa-chart-line",
      problem: "既存業務への生成AI統合が難しい",
      solution: "業務プロセス最適化コンサルティング",
      details:
        "現行の業務フローを分析し、生成AIを効果的に統合するための最適な方法を提案。コスト削減と生産性向上を両立する戦略を立案します。",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCaseIndex((prevIndex) => (prevIndex + 1) % successCases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const displayedCases = [
    successCases[currentCaseIndex],
    successCases[(currentCaseIndex + 1) % successCases.length],
    successCases[(currentCaseIndex + 2) % successCases.length]
  ];

  const openModal = (caseItem) => {
    setSelectedCase(caseItem);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev >= services.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesvideo.length);
    }, 5000); // 自動で切り替わるように設定
    return () => clearInterval(interval);
  }, []);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className={`font-sans transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <header className="bg-white flex justify-between items-center p-4">
      <img 
  src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/logo2.png" 
  alt="Company Logo" 
  className="h-40 mx-auto md:mx-0"
/>
        <nav className="hidden md:flex space-x-4">
          <a href="#services" className="text-gray-600 hover:text-[#4CAF50]">
            サービス
          </a>
          <a href="#news" className="text-gray-600 hover:text-[#4CAF50]">
            ニュース
          </a>
          <a href="#contact" className="text-gray-600 hover:text-[#4CAF50]">
            会社概要
          </a>
          <button onClick={toggleContactForm} className="text-gray-600 hover:text-[#4CAF50]">
            お問い合わせ
          </button>
        </nav>
        <button 
  className="hidden md:block bg-gradient-to-r from-[#4CAF50] to-[#00BCD4] text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
  onClick={toggleContactForm}
>
  無料で相談
</button>
      </header>

      <section id="hero" className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Left side content */}
          <div className="w-full lg:w-2/5 mb-12 lg:mb-0 lg:sticky lg:top-24 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">生成AIで、</span>
              <br />
              <span className="text-gradient">ビジネスの未来を</span>
              <br />
              <span className="text-black">創造する</span>
            </h1>
            <p className="text-[#333333] text-lg md:text-xl max-w-md mx-auto lg:mx-0">
              貴社のニーズに合わせた、
            </p>
            <p className="text-[#333333] text-lg md:text-xl mb-8 max-w-md mx-auto lg:mx-0">
              カスタムAIソリューションを提供
            </p>
            <button 
              className="bg-gradient-to-r from-[#4CAF50] to-[#00BCD4] text-white px-8 py-4 rounded-full text-lg font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              onClick={toggleContactForm}
            >
              無料で相談
            </button>
          </div>

          {/* Right side slider */}
<div className="w-full lg:w-1/2 flex items-center justify-center relative">
  <div className="w-full overflow-hidden rounded-lg shadow-md">
    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`,
        width: `${services.length * 100}%`
      }}
    >
      {services.map((service, index) => (
        <div key={index} className="w-full flex-shrink-0">
          <div className="bg-white rounded-lg overflow-hidden w-full">
            <img
              src={service.imageUrl || "/api/placeholder/400/200"}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-[#666] mb-2">{service.industry || 'サービス'}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gradient">
                {service.title}
              </h3>
              <p className="text-[#666] mb-2 line-clamp-3 sm:line-clamp-none">
                {service.description.split(' ').reduce((acc, word, i) => {
                  if (i % 5 === 0 && i !== 0) {
                    return [...acc, <br key={i} />, word];
                  }
                  return [...acc, ' ', word];
                }, [])}
              </p>
              <div className="mt-4">
                <button 
                  className="self-end text-[#4CAF50] border border-[#4CAF50] rounded-full px-4 py-2 text-sm font-bold hover:bg-[#4CAF50] hover:text-white transition-colors"
                >
                  詳細を見る
                </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation buttons */}
            
          </div>
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${
                index === currentSlide ? 'bg-[#333333]' : 'bg-[#CCCCCC]'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`View service ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      </div>
    </section>

  {/*    <section
        id="partners"
        className="py-10 px-4 border-t border-b border-[#F0F0F0]"
      >
        <h2 className="text-xl font-semibold text-[#333333] text-center mb-6">
          パートナー企業・お取引先
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {partners.map((partner, index) => (
            <div key={index} className="mx-4 my-2">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className={`h-8 object-contain transition-all hover:scale-105 ${
                  index >= 4 ? "grayscale" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </section> */}

      <section id="servicesvideo" className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gradient mb-3">
  <span className="block sm:inline">幅広いコンテンツで</span>{' '}
  <span className="block sm:inline">「現場」の</span>{' '}
  <span className="block sm:inline">生成AI活用をサポート</span>
</h2>
            <p className="text-lg text-[#666666]">
              様々なジャンルに特化したコンテンツを順次追加予定です
            </p>
          </div>
          <div className="relative overflow-hidden">
          <div
    className="flex transition-transform duration-300 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {servicesvideo.map((service, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-full flex items-center justify-center"
      >
                  <div className="bg-white border border-[#E0E0E0] rounded-2xl shadow-md p-6 h-[500px] flex flex-col max-w-2xl mx-auto">
                    <div className="flex items-center mb-4">
                      <i
                        className={`${service.icon} text-4xl text-[#4CAF50] mr-4`}
                      ></i>
                      <h3 className="text-2xl font-bold text-[#1A1A1A]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#666666] mb-6 flex-grow">
                      {service.description}
                    </p>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <button className="self-end text-[#4CAF50] border border-[#4CAF50] rounded-full px-4 py-2 text-sm font-bold hover:bg-[#4CAF50] hover:text-white transition-colors">
                      詳細を見る
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 bottom-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10"></div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-[#1A1A1A] hover:bg-[#F5F5F5] z-20"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-[#1A1A1A] hover:bg-[#F5F5F5] z-20"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="flex justify-center mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  currentSlide === index ? "bg-[#4CAF50]" : "bg-[#E0E0E0]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#F6F9FC] py-20 px-4">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-black mb-4">
        現場の課題を解決
      </h2>
      <p className="text-lg text-[#666666]">
        生成AIの導入〜定着にとどまらず、新たな価値の創出までサポートします。
      </p>
    </div>
    <div className="space-y-12">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center md:items-start"
        >
          <div className="w-full md:w-[45%] flex flex-col md:flex-row justify-center md:justify-end items-center mb-4 md:mb-0 md:pr-8">
            <i
              className={`${feature.icon} text-5xl text-[#04D0FF] mb-4 md:mb-0 md:mr-6`}
            ></i>
            <h3 className="text-center md:text-right text-lg font-bold text-black max-w-[220px]">
              {feature.problem}
            </h3>
          </div>
          <div className="text-[#666666] bg-[#FCFFFC] max-w-[380px] text-center md:text-left p-6 rounded-lg shadow-md">
          <p className="text-gradient font-bold mb-2 text-lg md:text-xl">
  {feature.solution}
</p>
            <p>
              {feature.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="services" className="bg-white py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-gradient">サービス内容</h2>
    <div className="space-y-16">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl ${
            animate ? `animate-[fadeIn_0.5s_ease-out_${index * 0.2}s_forwards]` : 'opacity-0'
          }`}
          onClick={() => setActiveService(index)}
        >
          <div className={`w-full md:w-1/2 h-64 md:h-auto relative ${index % 2 === 1 ? 'md:order-last' : ''}`}>
            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover brightness-110" />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center md:items-start justify-center bg-white">
            <div className="flex flex-col md:flex-row items-center mb-6 md:mb-8">
              <i className={`${service.icon} text-5xl md:text-6xl text-[#4CAF50] mb-4 md:mb-0 md:mr-6`}></i>
              <h3 className="text-2xl md:text-3xl font-bold text-gradient text-center md:text-left">{service.title}</h3>
            </div>
            <p className="mb-6 md:mb-8 text-[#212121] leading-relaxed text-lg md:text-xl font-semibold text-center md:text-left">{service.description}</p>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-inner mb-6 md:mb-8 w-full">
              <p className="text-sm md:text-base text-[#424242] leading-relaxed font-medium text-center md:text-left">{service.details}</p>
            </div>
            <button className="bg-gradient-to-r from-[#4CAF50] to-[#00BCD4] text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg md:self-start">
              詳細を見る
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


  <section id="news" className="bg-white py-60 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-[#333333] text-center mb-10">ニュース</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {displayedCases.map((caseItem, index) => (
        <div key={index} className="bg-white shadow-md">
          <img
            src={caseItem.url}
            alt={`${caseItem.company}のサムネイル`}
            className="w-full"
          />
          <div className="p-4">
            <div className="text-[#666] mb-2">{caseItem.industry}</div>
            <h3 className="text-xl font-bold mb-2">{caseItem.company}</h3>
            <p className="text-[#666] mb-2">
              {caseItem.challenge}
            </p>
            
            <div className="mt-4">
              <button 
                onClick={() => openModal(caseItem)} 
                className="self-end text-[#4CAF50] border border-[#4CAF50] rounded-full px-4 py-2 text-sm font-bold hover:bg-[#4CAF50] hover:text-white transition-colors"
              >
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      {successCases.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 mx-1 rounded-full ${
            index === currentCaseIndex ? 'bg-[#333333]' : 'bg-[#CCCCCC]'
          }`}
          onClick={() => setCurrentCaseIndex(index)}
          aria-label={`View case ${index + 1}`}
          aria-current={index === currentCaseIndex}
        />
      ))}
    </div>
    <div className="text-center mt-10">
      <a href="#" className="inline-block bg-gradient-to-r from-[#4CAF50] to-[#00BCD4] text-white font-bold py-3 px-6 rounded hover:brightness-110 transition-all">
        もっと見る
      </a>
    </div>
  </div>
</section>

<section className="bg-gradient-to-r from-[#1E88E5] to-[#4CAF50] py-20 px-4">
  <div className="max-w-6xl mx-auto flex flex-col items-center">
  <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-5 leading-tight">
  <span className="block sm:inline">AIの力で、</span>{' '}
  <span className="block sm:inline">ビジネスを次のレベルへ</span>
</h2>
    <p className="text-lg md:text-xl text-white text-center max-w-2xl leading-relaxed">
      まずは無料相談から。
    </p>
    <p className="text-lg md:text-xl text-white text-center mb-10 max-w-2xl leading-relaxed">
      あなたのビジネスに最適なAIソリューションを提案します。
    </p>
    <button
      className="bg-white text-[#1E88E5] font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-[#E3F2FD] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-5"
      onClick={toggleContactForm}
    >
      無料相談を予約する
    </button>
    <a
      href="#services"
      className="text-white text-sm underline hover:no-underline hover:opacity-80 transition-opacity duration-300"
      aria-label="サービス詳細を見る"
    >
      サービス詳細はこちら
    </a>
  </div>
</section>

<section id="contact" className="py-16 px-4 bg-[#F6FFF6]">
  <div className="container mx-auto py-16 px-6 text-center">
    <h1 className="text-4xl font-bold mb-8">About Us</h1>
    <div className="space-y-4 text-xl">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <span className="font-semibold">会社名</span>
        <span>株式会社First AI</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <span className="font-semibold">所在地</span>
        <span>〒542-0076 大阪市中央区難波5-1-60 なんばスカイオ 27F</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <span className="font-semibold">代表取締役</span>
        <span>灘波 竜星</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <span className="font-semibold">TEL</span>
        <span>080-5706-3397</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <span className="font-semibold">MAIL</span>
        <span>ryusei.namba@firstai-3d.com</span>
      </div>
    </div>
  </div>
</section>

<footer className="bg-white text-black py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/logo2.png" alt="Company Logo" className="h-40" />
            </div>
            <div className="flex space-x-4">
              <a href="#services" className="hover:text-[#4CAF50]">サービス</a>
              <a href="#news" className="hover:text-[#4CAF50]">ニュース</a>
              <a href="#contact" className="hover:text-[#4CAF50]">会社概要</a>
              <button onClick={toggleContactForm} className="hover:text-[#4CAF50]">お問い合わせ</button>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">&copy; 2024 First AI All rights reserved.</p>
          </div>
        </div>
      </footer>

{selectedCase && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-8">
        <button onClick={closeModal} className="float-right text-2xl text-[#999999] hover:text-[#333333]">&times;</button>
        <h2 className="text-2xl font-bold text-[#333333] mb-4">{selectedCase.company}</h2>
        <img src={selectedCase.url} alt={selectedCase.company} className="w-full h-64 object-cover rounded-lg mb-6" />
        <p className="text-[#666666] mb-6">{selectedCase.challenge}</p>
        <p className="text-[#666666] mb-6">{selectedCase.solution}</p>
        <p className="text-[#666666] mb-6">{selectedCase.result}</p>
      </div>
    </div>
  </div>
)}

{showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-xl w-full">
            <button 
              onClick={toggleContactForm}
              className="float-right text-gray-700 hover:text-gray-900"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
            <ContactForm />
          </div>
        </div>
      )}
<style jsx global>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        #hero > div:first-child {
          animation: fadeInLeft 0.5s ease-out;
        }
        #hero > div:last-child {
          animation: fadeInRight 0.5s ease-out;
        }
        @media (max-width: 768px) {
          #hero, #features > div > div {
            flex-direction: column;
          }
          #hero > div:first-child, #hero > div:last-child,
          #features > div > div > div {
            width: 100%;
          }
          #features > div > div > div:first-child {
            justify-content: center;
            text-align: center;
          }
          #features > div > div > div:last-child {
            border-left: none;
            padding-left: 0;
            text-align: center;
          }
        }
        @layer utilities {
          .text-gradient {
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(45deg, #4CAF50, #00E676, #00BCD4, #4CAF50);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
</div>
);
}

export default Home;