"use client";
import React , { useState, useEffect , useRef}from "react";
import { AlertCircle, Send,ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const NewsItem = ({ date, type, title, imageUrl, index }) => {
  // インデックスに基づいてスライドインの方向を決定
  const isEven = index % 2 === 0;
  const xInitial = isEven ? -100 : 100; // 左からか右からか
  const xAnimate = 0;

  return (
    <motion.div
      className="flex flex-col sm:flex-row mb-12 pb-12 border-b border-gray-300 bg-white text-black w-11/12 sm:w-4/5 mx-auto"
      initial={{ opacity: 0, x: xInitial }}
      whileInView={{ opacity: 1, x: xAnimate }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full sm:w-48 h-48 sm:h-28 object-cover mr-0 sm:mr-8 mb-4 sm:mb-0"
      />
      <div>
        <div className="text-sm text-gray-600 mb-2">{date}</div>
        <span className="inline-block px-2 py-1 bg-gray-200 text-xs mr-2 mb-2 text-black">
          {type}
        </span>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
      </div>
    </motion.div>
  );
};

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

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
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
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideInLeft');
          imageObserver.unobserve(entry.target);
        }
      });
    }, options);

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideInRight');
          textObserver.unobserve(entry.target);
        }
      });
    }, options);

    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-underline');
          headingObserver.unobserve(entry.target);
        }
      });
    }, options);

    imageRefs.current.forEach((ref) => ref && imageObserver.observe(ref));
    textRefs.current.forEach((ref) => ref && textObserver.observe(ref));
    headingRef.current && headingObserver.observe(headingRef.current);

    return () => {
      imageRefs.current.forEach((ref) => ref && imageObserver.unobserve(ref));
      textRefs.current.forEach((ref) => ref && textObserver.unobserve(ref));
      headingRef.current && headingObserver.unobserve(headingRef.current);
    };
  }, []);
  const partners = [
    { name: "GROP", logo: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/GROP.png" },
    { name: "IBM", logo: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/IBM.png" },
    { name: "Robicon", logo: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/Robicon.png" },
    { name: "SHIFTAI", logo: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/SHIFTAI.png" },
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

  const newsItems = [
    {
      id: 1,
      index: 1,
      date: '2024.8.31',
      type: 'プレスリリース',
      title: '株式会社GROP様と協業を開始しました。',
      imageUrl: 'https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/GROP.png'

    },
    {
      id: 2,
      index: 2,
      date: '2024.8.1',
      type: 'プレスリリース',
      title: '代表の灘波が、SHIFTAI様の教材開発を担当しました。',
      imageUrl:"https://s3.ap-northeast-3.amazonaws.com/testunity1.0/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88+2024-08-08+22.28.32.png",
    },
    {
      id: 3,
      index: 3,
      date: '2024.4.1',
      type: 'プレスリリース',
      title: '弊社プロダクト「AIぼう」が日本IBM様のBlue Hub Nextに採択されました。',
      imageUrl: "https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/IMG_2819.PNG",
    },
  
  ];

 
 

  return (
    <div
  className={`font-sans min-h-screen flex flex-col transition-opacity-0 `}
>
      <section id="hero" className="relative h-screen flex items-center">
  <div
    className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
    style={{
      backgroundImage:
        "url('https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/image_fx_+(2).jpg')",
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -1,
    }}
  ></div>

  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="text-center text-white space-y-4 max-w-3xl px-4">
      <p className="text-base md:text-lg lg:text-xl font-extralight leading-relaxed text-shadow-lg">
        <Typewriter
          words={['我々と、持続可能な社会を実現しませんか。']}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </div>
  </div>
</section>


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

      <section className="p-8 bg-white text-black pt-32 pb-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-16 text-black ml-4 sm:ml-8 md:ml-16">
          News
        </h1>
        <div>
          {newsItems.map((item) => (
            <NewsItem key={item.id} {...item} />
          ))}
        </div>
        <div className="text-center mt-10 mb-16">
          <Link
            to="/news"
            className="inline-block bg-gray-800 text-white font-bold py-3 px-6 rounded hover:brightness-110 transition-all"
          >
            もっと見る
          </Link>
        </div>
      </section>

      {/* サービス Content */}
      <section className="bg-[#F5F5F5] text-black">
        <div className="px-4 sm:px-8 md:px-12 py-16 max-w-7xl mx-auto">
          <h2 className="text-sm mb-2 text-gray-600 uppercase tracking-widest mt-20">
            サービス一覧
          </h2>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-16 tracking-tight underline-animation text-gray-800"
            ref={headingRef}
          >
            Our Services_
          </h1>

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
              生成AI活用支援事業
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></span>
              </h2>
              <p className="text-base leading-relaxed mb-12 text-gray-700">
                研修、コンサルティング、システム開発など、さまざまな手段で生成AI活用をご支援。
                E-Learningや、自社開発のAIエージェントの提供も可能で、多岐にわたるソリューションをご提供。
              </p>
              <Link
  to="/services"
  className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-bold transition-all duration-300 hover:bg-gray-700 hover:shadow-lg whitespace-nowrap"
>
  <span>サービスページ</span>
  <ArrowRight className="ml-2 h-4 w-4" />
</Link>
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
                src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/software-development-6523979_1920.jpg"
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
                システム開発事業
                <span className="absolute bottom-0 right-0 w-full h-px bg-gray-300"></span>
              </h2>
              <p className="text-base leading-relaxed mb-12 text-gray-700">
                Webアプリ〜AIの領域まで幅広くシステムを開発。特に生成AIの領域に強みを持ち、さまざまなエージェント開発を行う。マーケティング領域に長けている。
              </p>
              <Link
  to="/services"
  className="inline-flex items-center justify-center bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-bold transition-all duration-300 hover:bg-gray-700 hover:shadow-lg whitespace-nowrap"
>
  <span>サービスページ</span>
  <ArrowRight className="ml-2 h-4 w-4" />
</Link>
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
                src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88+2024-05-06+7.12.01.png"
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
                AIキャリアコーチングサービス<br />『AIぼう』
                <span className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></span>
              </h2>
              <p className="text-base leading-relaxed mb-12 text-gray-700">
                Comingsoon...
              </p>
              <button className="flex items-center bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-bold transition-all duration-300 hover:bg-gray-700 hover:shadow-lg">
                サービスページ
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* サービス 4 */}
         

            {/* 左側：サービス説明 */}
            

        </div>
      </section>

      <section className="py-40 px-4 min-h-screen flex items-center">
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

<style jsx global>{`
.header-blur-gradient {
    mask-image: linear-gradient(to bottom, 
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }
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

        .underline-animation {
  position: relative;
  display: inline-block;
}

.underline-animation::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 2px;
  background-color: currentColor;
  width: 0%;
}

.animate-underline {
  animation: underlineExpand 0.5s ease-out forwards;
}
      `}</style>
</div>

);
}

export default Home;