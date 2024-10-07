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
      className="object-cover w-full h-full"
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




{/*導入事例 */}

<div className="bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <h1 className="text-5xl md:text-6xl font-bold mb-24 text-gray-900">導入事例</h1>
  
    <div className="flex flex-col md:flex-row gap-16 mb-32">
      <div className="md:w-1/3">
        <img 
          src="/api/placeholder/300/300" 
          alt="Ryota Kushima" 
          className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
        />
        <h2 className="text-3xl font-semibold mt-8 text-center text-gray-800">株式会社GROP様</h2>
        <p className="text-center text-gray-600 text-xl mt-2">人材＆BPO</p>
      </div>

      <div className="hidden md:block border-l border-gray-300"></div>

      <div className="md:w-2/3">
        <h3 className="text-3xl font-semibold mb-6 text-black">代表メッセージ</h3>
        <p className="font-semibold text-2xl mb-8 text-black">「キャリアで不幸になる人をなくす」</p>
        <div className="space-y-6 text-gray-600">
          <p>
            株式会社FirstAIは、人とテクノロジーの力で、「一人一人が幸福を追求できる持続可能な社会」を実現するべく、2024年の3月に創業いたしました。
          </p>
          <p>
            少子高齢化に伴う労働人口の減少は、人々の生成AIを中心とするテクノロジーの発展は。またにWEB全盛期、大半のマーケティング予算はWEBに割かれている状態のなか、右も左も分からないまま当社を起業いたしました。
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row-reverse gap-16">
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
    </div>
  </div>
</div>
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


    {/*問い合わせ*/ }

<section className="py-40 px-4 min-h-screen flex items-center bg-black">
  <div className="max-w-6xl mx-auto flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 leading-tight">
      <span className="block sm:inline">AIの力で、</span>{' '}
      <span className="block sm:inline">ビジネスを次のレベルへ</span>
    </h2>
    <p className="text-lg md:text-xl text-white text-center max-w-2xl leading-relaxed mb-4">
      まずは無料相談から。
    </p>
    <p className="text-lg md:text-xl text-white text-center mb-16 max-w-2xl leading-relaxed">
      あなたのビジネスに最適なAIソリューションを提案します。
    </p>
    <Link to="/contact" className="bg-white text-black font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-[#E3F2FD] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-8">
      無料相談を予約する
      </Link>
    <Link to="/services"
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