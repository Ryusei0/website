import React, { useState, useEffect, useRef } from "react";
import { Instagram, Twitter, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const ExecutiveProfile = ({ name, imageSrc }) => (
    <div className="flex flex-col items-center bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
      <img
        src={imageSrc}
        alt={name}
        className="w-32 h-32 sm:w-48 sm:h-48 object-cover mb-4 sm:mb-6 transition-transform duration-300 hover:scale-105"
      />
      <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800 text-center whitespace-pre-wrap">{name}</h2>
    </div>
  );

  const InfiniteLogoSlider = ({ partners }) => {
    return (
      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="inline-block"
          animate={{
            x: [0, -100 * partners.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {partners.concat(partners).map((partner, index) => (
            <div key={index} className="inline-block mx-8">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 md:h-16 object-contain transition-all duration-300 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

const Services = () => {
  const companyInfo = [
    { label: '社名', value: '株式会社First AI' },
    { label: '創業', value: '2024年3月' },
    {
      label: '所在地',
      value: ['本社', '〒542-0076 大阪府大阪市中央区難波5-1-60 なんばスカイオ27階'],
    },
    { label: '電話番号', value: '080-5706-3397' },
    { label: '資本金', value: '1,000,000円' },
    { label: '代表取締役CEO', value: '灘波 竜星' },
    {
      label: '事業内容',
      value: ['生成AI活用支援事業', 'システム開発事業', 'AIキャリアコーチング事業'],
    },
  ];

  const partners = [
    { name: "GROP", logo: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/GROP.png" },
    { name: "IBM", logo: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/IBM.png" },
    { name: "Robicon", logo: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/Robicon.png" },
    { name: "SHIFTAI", logo: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/SHIFTAI.png" },
  ];

  const personaData = [
    {
      text: 'とにかく\n人が足りないけど、\nテクノロジーなんて\nわからない。',
      imageSrc: 'https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/3.jpg'
    },
    {
      text: 'AI活用したいけど\n何から\nはじめていいのか\nわからない。',
      imageSrc: 'https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/2.jpg'
    },
    {
      text: 'AIを使って\nやりたいことは\nあるけど、\n社内のリソースが\n足りない。',
      imageSrc: 'https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/4.jpg'
    }
  ];

  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      setStartTyping(true);
    }
  }, [inView]);

  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.1 };
    const animateOnScroll = (entries, observer, animationClass) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    };

    const imageObserver = new IntersectionObserver((entries) => {
      animateOnScroll(entries, imageObserver, 'animate-slideInLeft');
    }, options);

    const textObserver = new IntersectionObserver((entries) => {
      animateOnScroll(entries, textObserver, 'animate-slideInRight');
    }, options);

    const headingObserver = new IntersectionObserver((entries) => {
      animateOnScroll(entries, headingObserver, 'animate-underline');
    }, options);

    imageRefs.current.forEach(ref => ref && imageObserver.observe(ref));
    textRefs.current.forEach(ref => ref && textObserver.observe(ref));
    headingRef.current && headingObserver.observe(headingRef.current);

    return () => {
      imageRefs.current.forEach(ref => ref && imageObserver.unobserve(ref));
      textRefs.current.forEach(ref => ref && textObserver.unobserve(ref));
      headingRef.current && headingObserver.unobserve(headingRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* ヒーローセクション */}

<section id="hero" className="h-screen relative overflow-hidden flex items-center">
  <motion.div 
    className="absolute inset-0 z-0"
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
       <img
      src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/image_fx_+(2).jpg"
      alt="Background"
      className="object-cover object-bottom w-full h-full"
    />
    <div className="absolute inset-0 bg-black opacity-10"></div>
  </motion.div>

  <div className="w-full relative z-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="w-full lg:w-2/3 xl:w-1/2">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            AIで、
          </motion.span>
          <br />
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            ビジネスを
          </motion.span>
          <br />
          <motion.span 
            className="text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            進化させる
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-white text-lg sm:text-xl md:text-2xl mb-4 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          最先端のAI技術を活用し、
        </motion.p>
        <motion.p 
          className="text-white text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          ビジネスの可能性を広げます
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <Link
            to="/contact"
            className="bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            お問い合わせ
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
</section>
      {/* パートナーセクション */}
      <section
      id="partners"
      className="bg-white flex flex-col justify-center items-center py-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
            お取り組み<br/>パートナー企業様
          </span>
        </motion.h2>
        <InfiniteLogoSlider partners={partners} />
      </div>
    </section>

      {/* ビジョン共有 */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-16 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                AI活用、
              </span>
              <br />
              <span className="text-gray-900">始めてみませんか</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
              最先端のAI技術を活用し、ビジネスの可能性を広げましょう。
              <br className="hidden sm:block" />
              私たちが、あなたのビジネスに最適なAIソリューションをご提案します。
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              無料相談を申し込む
            </Link>
          </div>
        </div>
      </section>

      {/* ペルソナ */}
      <div className="bg-gray-100 py-16 sm:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-center mb-12 sm:mb-16">
      <span className="text-2xl sm:text-3xl text-gray-600">こんな</span>
      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mx-2">課題</span>
      <span className="text-2xl sm:text-3xl text-gray-600">はありませんか？</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
      {personaData.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ExecutiveProfile name={item.text} imageSrc={item.imageSrc} />
        </motion.div>
      ))}
    </div>
  </div>
</div>

      {/* FirstAIのサポートセクション */}

      <section className="bg-gradient-to-r from-blue-600 to-teal-400 py-16 sm:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        First AIが貴社のAI活用を徹底サポート
      </motion.h2>
      <motion.p 
        className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        課題の特定から業務定着まで、FirstAIが徹底的にサポートします。
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
        {[
          {
            title: 'AI戦略立案',
            description: '貴社の課題に最適なAIソリューションを提案し、導入戦略を策定します。',
          },
          {
            title: 'カスタム開発',
            description: 'ビジネスニーズに合わせたAIシステムを開発し、既存のプロセスに統合します。',
          },
          {
            title: '継続的サポート',
            description: '導入後も定期的な評価と改善を行い、AIの効果を最大化します。',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white text-sm sm:text-base">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Link
          to="/contact"
          className="inline-block mt-6 sm:mt-8 bg-white text-blue-600 px-8 sm:px-10 py-3 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          無料相談を申し込む
        </Link>
      </motion.div>
    </div>
  </div>
</section>



      {/* サービス一覧 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16 sm:space-y-32">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
            Our Services
          </h1>
          <div className="flex items-center text-base sm:text-lg md:text-xl mb-4 sm:mb-8 font-light">
            <span className="mr-2 sm:mr-3 tracking-wider">3つのソリューション</span>
            <ArrowRight size={20} />
          </div>
        </div>

        {/* サービス 1 */}
        <div className="flex flex-col md:flex-row md:space-x-16 mb-32">
            {/* 左側：画像セクション */}
            <div
              className="md:w-2/3 relative opacity-0 mb-8 md:mb-0"
              ref={(el) => (imageRefs.current[0] = el)}
            >
              <img
                src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%81%82%E3%81%82%E3%81%82+(1).png"
                alt="サービス1のプレビュー"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* 右側：サービス説明 */}
            <div
              className="md:w-1/3 opacity-0"
              ref={(el) => (textRefs.current[0] = el)}
            >
              <div className="text-sm mb-4 tracking-widest text-gray-600">
                SERVICE 01
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight text-gray-800 relative pb-4">
                AI研修サービス
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></span>
              </h2>
              <p className="text-base leading-relaxed mb-12 text-gray-700">
              企業様や組織向けに、最新の生成AI技術の活用方法を学ぶ研修プログラムをご提供いたします。実践的なワークショップやケーススタディ、e-learningを通じて、生成AIとは何か、そのツールの効果的な使用法、ビジネスプロセスへの統合、倫理的な配慮事項などを学びます。自社の業務に即した生成AIの活用、戦略を立案できるようになることを目指します。
              </p>
              <button className="flex items-center bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-bold transition-all duration-300 hover:bg-gray-700 hover:shadow-lg">
                サービスページ
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* サービス 2 */}
          <div className="flex flex-col md:flex-row-reverse md:space-x-16 md:space-x-reverse mb-32">
            {/* 右側：画像セクション */}
            <div
              className="md:w-2/3 relative opacity-0 mb-8 md:mb-0"
              ref={(el) => (imageRefs.current[1] = el)}
            >
              <img
                src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%81%82%E3%81%82%E3%81%82+(2).png"
                alt="サービス2のプレビュー"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* 左側：サービス説明 */}
            <div
              className="md:w-1/3 opacity-0"
              ref={(el) => (textRefs.current[1] = el)}
            >
              <div className="text-sm mb-4 tracking-widest text-gray-600">
                SERVICE 02
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight text-gray-800 relative pb-4">
                AIコンサルティング<br/>サービス
                <span className="absolute bottom-0 right-0 w-full h-px bg-gray-300"></span>
              </h2>
              <p className="text-base leading-relaxed mb-12 text-gray-700">
              企業の生成AI導入・活用戦略の策定から実装まで、包括的なサポートをご提供いたします。業界や企業様特有の課題・ニーズを分析し、最適な生成AIソリューションをご提案。ROI分析、プロトタイピング、パイロットプロジェクトの実施など、段階的なアプローチで確実な成果を実現します。組織、業務プロセスの変革や社内AIリテラシー向上もサポートし、企画〜業務定着まで徹底的にサポートします。
              </p>
              <button className="flex items-center bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-bold transition-all duration-300 hover:bg-gray-700 hover:shadow-lg">
                サービスページ
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* サービス 3 */}
          <div className="flex flex-col md:flex-row md:space-x-16 mb-32">
            {/* 左側：画像セクション */}
            <div
              className="md:w-2/3 relative opacity-0 mb-8 md:mb-0"
              ref={(el) => (imageRefs.current[2] = el)}
            >
              <img
                src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/software-development-6523979_1920.jpg"
                alt="サービス3のプレビュー"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* 右側：サービス説明 */}
            <div
              className="md:w-1/3 opacity-0"
              ref={(el) => (textRefs.current[2] = el)}
            >
              <div className="text-sm mb-4 tracking-widest text-gray-600">
                SERVICE 03
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight text-gray-800 relative pb-4">
                AI開発サービス
                <span className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></span>
              </h2>
              <p className="text-base leading-relaxed mb-12 text-gray-700">
              お客様のニーズに合わせた、カスタム生成AIソリューションの開発を行います。
              スクラッチ開発だけでなく、弊社独自開発システムやエージェントを活用したソリューションのご提供、既存システムとの統合、スケーラビリティの確保、セキュリティ対策など、企業様レベルの要件に対応した堅牢なソリューションをご提供いたします。
              </p>
              <button className="flex items-center bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-bold transition-all duration-300 hover:bg-gray-700 hover:shadow-lg">
                サービスページ
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </div>
          </div>
      </div>

        {/*できること */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="space-y-6">
      <motion.h2
        className="text-5xl md:text-7xl font-bold tracking-tight text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why First AI
      </motion.h2>
      <motion.div
        className="flex items-center text-base md:text-lg mb-8 font-light"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="mr-3 tracking-wider">First AIの強み</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.div>
    </div>

    <div className="w-full bg-white bg-opacity-20 my-16"></div>

    {/* セクション1 */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-4xl md:text-5xl font-bold mb-16 leading-tight text-white relative pb-4">
        01 — テクノロジー
      </h3>
      <div className="w-full h-px bg-white mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {[
          {
            title: '豊富な実績',
            points: [
              '黎明期の生成AIの領域において多数の実績がある。',
              '国内最大級のAIコミュニティにおいて教材開発も担当。',
            ],
            image: 'https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/5.jpg',
          },
          {
            title: '優秀な研究チーム',
            points: [
              '進化の早いAIの領域を京大のエンジニアが日々キャッチアップ。',
              '現場で使えることにこだわった活用法を日々研究。',
            ],
            image: 'https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/1.jpg',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-6 text-white">{item.title}</h4>
            <ul className="list-disc pl-5 mb-8 text-lg text-white space-y-3">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center shadow-inner overflow-hidden">
              <img
                src={item.image}
                alt="Avatar images"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* セクション2 */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* 左側 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold mb-16 leading-tight text-white relative pb-4">
            02 — 現場理解
          </h3>
          <div className="w-full h-px bg-white mb-12"></div>

          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-6 text-white">パートナーとの協業体制</h4>
            <ul className="list-disc pl-5 mb-8 text-lg text-white space-y-3">
              <li>現場の課題を理解するパートナー企業様との協業体制の確立。</li>
              <li>業界トップレベルの人材のサポート。</li>
            </ul>
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center shadow-inner overflow-hidden">
              <img
                src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/6.jpg"
                alt="Avatar images"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* 右側 */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold mb-16 leading-tight text-white relative pb-4">
            03 — 開発力
          </h3>
          <div className="w-full h-px bg-white mb-12"></div>

          <motion.div
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-6 text-white">自社AIシステムの開発</h4>
            <ul className="list-disc pl-5 mb-8 text-lg text-white space-y-3">
              <li>自社でも最新のAI技術を活用したプロダクト開発を行っている。</li>
              <li>自社開発システムを利用したカスタムソリューションのご提供が可能。</li>
            </ul>
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center shadow-inner overflow-hidden">
              <img
                src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88+2024-09-22+16.44.53.png"
                alt="Avatar images"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
{/*導入事例 */}

<div className="bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <motion.h1 
      className="text-5xl md:text-6xl font-bold mb-24 text-center text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      導入事例
    </motion.h1>
  
    {[
      {
        company: "マーケティング支援事業会社様",
        industry: "",
        image: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/3.jpg",
        challenge: "人材不足で業務が回らない。上流工程を指揮できる人材を確保できない。他者との差別化や、ニーズに合わせた効果的な企画を生み出し続けることが難しい。",
        solution: [
          "AI研修サービスによる社内教育",
          "AI活用を想定した業務プロセス改善コンサルティング",
          "カスタムAIツールの開発と導入支援"
        ],
        effect: [
          "業務全体の効率が30%向上",
          "属人性の排除による教育、人材不足の改善",
          "データを活用した分析、コンテンツの制作が可能に",
          "ナレッジ、AIの活用による差別化、新規ビジネスの展開"
        ]
      },
      {
        company: "BPO系の会社様",
        industry: "製造業",
        image: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/2.jpg",
        challenge: "労働集約型のビジネスで、利益率が上がらず、かつ人手不足。AIの導入を検討しているが、具体的な方法がわからない。",
        solution: [
          "具体的業務における生成AI活用研修",
          "生成AIを最大限に活用するための組織環境の構築支援",
          "業務特化型のAIエージェントの開発"
        ],
        effect: [
          "業務全体の効率が40%向上",
          "業務の20%を自動化",
          "対応可能業務の増加",
          "AIを活用した業務改善（内製化支援）提案が可能に"
        ]
      },
      {
        company: "地方中小企業様",
        industry: "バックオフィス関連業務",
        image: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/4.jpg",
        challenge: "人手不足が深刻。テクノロジーを活用していく必要があるが、そもそも社内にテクノロジー活用できる人材がおらず、もはや打つ手がない。",
        solution: [
          "DX研修、生成AI活用研修",
          "社内DX戦略の策定コンサルティング",
          "業務プロセス、事業戦略再構築コンサルティング"
        ],
        effect: [
          "テクノロジー活用の必要性、可能性の認知",
          "文書の作成など、一人当たりの生産性が50%向上",
          "DXの取り組みを継続的に行える体制の確立"
        ]
      }
    ].map((case_study, index) => (
        <motion.div 
          key={index} 
          className="flex flex-col md:flex-row gap-16 mb-32 bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
         
       
                     <motion.div 
              className="md:w-1/3 flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src={case_study.image}
                alt={`${case_study.company}の導入事例`}
                className="rounded-lg w-full h-64 object-cover shadow-lg mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">{case_study.company}</h2>
              <motion.div 
                className="bg-gray-300 p-6 rounded-lg w-full text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-black">課題</h3>
                <p className="text-lg text-gray-900">{case_study.challenge}</p>
              </motion.div>
            </motion.div>
            
            <div className="hidden md:block border-l border-gray-300"></div>

            
            <motion.div 
                 className="md:w-2/3 space-y-8"
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
               >
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text">提供ソリューション</h3>
                  <ul className="list-none space-y-3">
                    {case_study.solution.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <span className="inline-block bg-gradient-to-r from-blue-600 to-teal-400 text-transparent bg-clip-text mr-2">&#10148;</span>
                        <span className="text-black font-semibold">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
  className="flex justify-center items-center"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</motion.div>

              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-teal-400 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-3xl font-bold mb-6 text-white">導入効果</h3>
                <ul className="list-none space-y-4">
                  {case_study.effect.map((item, i) => (
                  <motion.li 
                  key={i} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white mr-3 text-2xl">&#10004;</span>
                  <span className="text-lg font-semibold text-white">{item}</span>
                </motion.li>
              ))}
            </ul>
              </motion.div>
            </motion.div>
            

  </motion.div>
  
    ))}
  </div>
</div>
   {/*} <div className="flex flex-col md:flex-row-reverse gap-16">
      <div className="md:w-1/3">
        <img 
          src="/api/placeholder/300/300" 
          alt="Another Company" 
          className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
        />
        <h2 className="text-3xl font-semibold mt-8 text-center text-gray-800">株式会社Example様</h2>
        <p className="text-center text-gray-600 text-xl mt-2">IT＆システム開発</p>
      </div>

      <div className="hidden md:block border-r border-gray-300"></div>

      <div className="md:w-2/3">
        <h3 className="text-3xl font-semibold mb-6 text-black">CTO メッセージ</h3>
        <p className="font-semibold text-2xl mb-8 text-black">「AIで業務効率を劇的に改善」</p>
        <div className="space-y-6 text-gray-600">
          <p>
            FirstAIのAIコンサルティングサービスを利用して、我々の業務プロセスを大幅に改善することができました。
          </p>
          <p>
            特に、自然言語処理技術を活用したドキュメント管理システムの導入により、情報の検索と共有が格段に効率化されました。FirstAIのチームは常に最新のAI技術に精通しており、我々のビジネスニーズに合わせた最適なソリューションを提案してくれました。
          </p>
        </div>
      </div>
    </div>*/}
  
   {/*導入までの流れ*/ }

<section className="py-16 sm:py-24 bg-[#F5F5F5]">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2 
      className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      サービスの流れ
    </motion.h2>
    <motion.p 
      className="text-center text-gray-600 mb-16"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      一般的な例
    </motion.p>
    
    {[
      { step: "01", title: "ご要望確認", description: "生成AIで解決したい課題や実現したいことなど、ご提案前にヒアリングさせていただきます。" },
      { step: "02", title: "ご提案（見積り提出）", description: "ヒアリングをもとに、AI活用法、お取り組み内容、スケジュール、お見積りなどをご提案いたします。" },
      { step: "03", title: "ご契約", description: "サービス規約に同意いただいたうえで契約書を締結いただきます。" },
      { step: "04", title: "キックオフ", description: "お取り組みを始めるにあたって、初回ミーティングを実施いたします。" },
      { step: "05", title: "お取り組み実施", description: "貴社の課題を基に完全カスタマイズしたご支援を実施。" },
      { step: "06", title: "更なる活用計画のご提案", description: "お取り組み終了後も効果を最大化するために徹底サポートをいたします。" },
    ].map((item, index) => (
      <motion.div 
        key={item.step} 
        className="mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="pb-2">
            <h3 className="flex items-center text-xl font-bold">
              <span className="text-blue-600 mr-3">STEP {item.step}</span>
              <span>{item.title}</span>
            </h3>
          </div>
          <div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
        {index < 5 && (
          <motion.div 
            className="flex justify-center my-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index * 0.2) + 0.4 }}
            viewport={{ once: true }}
          >
            <ChevronDown className="text-gray-400" size={24} />
          </motion.div>
        )}
      </motion.div>
    ))}
  </div>
</section>


    {/* お問い合わせ */}
    <section className="py-40 px-4 min-h-screen flex items-center bg-black text-white">
  <div className="max-w-6xl mx-auto flex flex-col items-center">
   
        <h2 
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-8 leading-tight"
        >
          {startTyping ? (
            <Typewriter
              words={['AIの力で、ビジネスを次のレベルへ']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          ) : (
            <span>&nbsp;</span> // プレースホルダー
          )}
        </h2>
          <p className="text-lg md:text-xl text-white text-center max-w-2xl leading-relaxed mb-4">
            まずは無料相談から。
          </p>
          <p className="text-lg md:text-xl text-white text-center mb-16 max-w-2xl leading-relaxed">
            あなたのビジネスに最適なAIソリューションを提案します。
          </p>
          <Link
            to="/contact"
            className="bg-white text-black font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-[#E3F2FD] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-8"
          >
            無料相談を予約する
          </Link>
          <Link
            to="/services"
            className="text-white text-sm underline hover:no-underline hover:opacity-80 transition-opacity duration-300"
            aria-label="サービス詳細を見る"
          >
            サービス詳細はこちら
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;