"use client";
import React, { useState, useEffect, useRef } from 'react';

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const newsRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);
  const ourCompanyRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (newsRef.current) observer.observe(newsRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (blogRef.current) observer.observe(blogRef.current);
    if (ourCompanyRef.current) observer.observe(ourCompanyRef.current);

    return () => {
      if (newsRef.current) observer.unobserve(newsRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (blogRef.current) observer.unobserve(blogRef.current);
      if (ourCompanyRef.current) observer.unobserve(ourCompanyRef.current);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (e) => setIsSmallScreen(e.matches);

    mediaQuery.addListener(handleMediaQueryChange);
    setIsSmallScreen(mediaQuery.matches);

    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, []);

  let navigationContent;
  if (isSmallScreen) {
    navigationContent = <i className="fa fa-bars"></i>;
  } else {
    navigationContent = (
      <nav className="flex gap-4">
        <a href="#" className="px-3 py-2 hover:bg-white hover:text-black">news</a>
        <a href="#" className="px-3 py-2 hover:bg-white hover:text-black">services</a>
        <a href="#" className="px-3 py-2 hover:bg-white hover:text-black">company</a>
        <a href="#" className="px-3 py-2 hover:bg-white hover:text-black">contact</a>
      </nav>
    );
  }
  return (
    <div className="font-roboto">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black text-white flex justify-between items-center p-4 z-50">
        <div className="text-lg ml-30">First AI</div>
        {navigationContent}
      </header>

      {/* Company Overview */}
      <div className="w-screen h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/technology-7111799_1920.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-roboto tracking-wider animate-fade-in-down">
            First AI
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#00ffff] animate-fade-in-up font-roboto tracking-wider">
            AI＆3DCG
          </h2>
          <p className="text-xl md:text-2xl text-white mt-8 font-light tracking-wider text-center animate-fade-in font-noto-sans-jp">
            人を"いかす"テクノロジーを
          </p>
        </div>
        <div className="absolute w-[200vw] h-[200vw] bg-[#00ffff] rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-circle"></div>

        <style jsx global>{`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes circle {
            0% {
              opacity: 0;
              transform: scale(0);
            }
            100% {
              opacity: 0.4;
              transform: scale(1);
            }
          }

          .animate-fade-in-down {
            animation: fadeInDown 1s ease-out;
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out;
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-out;
          }

          .animate-circle {
            animation: circle 2s ease-out;
          }
        `}</style>
      </div>

      {/* News */}
      <section ref={newsRef} className="py-16 px-4 transition-opacity duration-500 mx-4 md:mx-32">
        <h2 className="text-3xl font-bold mb-8">最新ニュース</h2>
        <div className="space-y-8">
          <div className="border-b pb-4">
            <div className="text-[#666] mb-2">2024/03/15 お知らせ</div>
            <div className="text-xl font-bold">新オフィスオープンのお知らせ</div>
          </div>
          <div className="border-b pb-4">
            <div className="text-[#666] mb-2">2024/05/15 お知らせ</div>
            <div className="text-xl font-bold">インターン募集のお知らせ</div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="btn-primary">
            View All
          </a>
        </div>
      </section>

      {/* Our Company */}
<section
  ref={ourCompanyRef}
  className="bg-[#2d2d2d] min-h-screen flex flex-col justify-center items-center text-white transition-opacity duration-500 py-8 px-4 md:py-16 md:px-32"
>
  <h2 className="text-4xl font-bold mb-8 animate-fade-in-down">Our Mission</h2>
  <div className="flex justify-center items-center mb-8 gap-4 md:gap-10">
    <div className="text-center">
      <h3 className="text-5xl font-bold animate-fade-in-up">人</h3>
    </div>
    <div className="text-center text-2xl font-bold animate-fade-in">と</div>
    <div className="text-center">
      <h3 className="text-6xl font-bold animate-fade-in-up">AI</h3>
    </div>
  </div>
  <p className="text-center leading-relaxed px-4 animate-fade-in">
    私たちが目指す世界は、"人"と"AI"が"共存"する世界です。
    <br />
    急速な変化の中で、組織や個人のあり方が見直される現代において、
    <br />
    最新のテクノロジーを駆使し、"人"が提供する価値と幸福度を最大限に引き出します。
    <br />
    "人"と"AI"が共に手を取り合い、喜びと成果を分かち合うことで、誰もが豊かさと充実感を感じられる未来を目指します。
  </p>
  <style jsx global>{`
    .animate-fade-in-down {
      animation: fadeInDown 2s forwards;
    }
    .animate-fade-in-up {
      animation: fadeInUp 1.5s forwards;
    }
    .animate-fade-in {
      animation: fadeIn 2s forwards;
    }
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}</style>
</section>

      {/* Services */}
      <div className="bg-white min-h-screen flex flex-col items-center text-[#2d2d2d] font-sans mx-4 md:mx-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 mt-8 md:mt-16 self-start ml-6">Service</h2>

        <section className="flex flex-col md:flex-row items-center justify-center w-full px-8 py-8 md:py-16 gap-8 md:gap-16 shadow-lg min-h-[66vh]">
          <div className="md:flex-1 md:pr-8 ml-4 md:ml-16 md:order-1 order-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">AIソリューション事業</h3>
            <p className="text-base md:text-lg mb-8">
              お客様の課題に合わせたAIソリューションを提供します。
              <br />
              PoC開発から運用まで一貫してサポートします。
            </p>
            <button className="border border-[#2d2d2d] px-6 py-2 rounded-full font-medium hover:bg-[#2d2d2d] hover:text-white transition">
              View Details →
            </button>
          </div>
          <div className="md:flex-1 md:pl-8 md:order-2 order-1">
            <img
              src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/software-development-6523979_1920.jpg"
              alt="AIソリューションのイメージ"
              className="w-full max-w-[500px]"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center w-full px-8 py-8 md:py-16 gap-8 md:gap-16 shadow-lg min-h-[66vh]">
          <div className="md:flex-1 md:pr-8 ml-4 md:ml-16 md:order-1 order-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">チャットbot開発</h3>
            <p className="text-base md:text-lg mb-8">
              対話型のチャットbotを開発します。顧客対応の自動化や社内の問い合わせ対応などにご活用ください。
            </p>
            <button className="border border-[#2d2d2d] px-6 py-2 rounded-full font-medium hover:bg-[#2d2d2d] hover:text-white transition">
              View Details →
            </button>
          </div>
          <div className="md:flex-1 md:pl-8 md:order-2 order-1">
            <img
              src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88+2024-05-14+15.48.44.png"
              alt="チャットボットのイメージ"
              className="w-full max-w-[500px]"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center w-full px-8 py-8 md:py-16 gap-8 md:gap-16 shadow-lg min-h-[66vh]">
          <div className="md:flex-1 md:pr-8 ml-4 md:ml-16 md:order-1 order-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">キャリアAI</h3>
            <p className="text-base md:text-lg mb-8">Coming Soon...</p>
            <button className="border border-[#2d2d2d] px-6 py-2 rounded-full font-medium hover:bg-[#2d2d2d] hover:text-white transition">
              View Details →
            </button>
          </div>
          <div className="md:flex-1 md:pl-8 md:order-2 order-1">
            <img
              src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/FirstAI.jpg"
              alt="データ分析のイメージ"
              className="w-full max-w-[500px]"
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center w-full px-8 py-8 md:py-16 gap-8 md:gap-16 shadow-lg min-h-[66vh]">
          <div className="md:flex-1 md:pr-8 ml-4 md:ml-16 md:order-1 order-2">
            <h3 className="text-xl md:text-2xl font-bold mb-4">メタバースイベント事業</h3>
            <p className="text-base md:text-lg mb-8">
              Coming Soon...
            </p>
            <button className="border border-[#2d2d2d] px-6 py-2 rounded-full font-medium hover:bg-[#2d2d2d] hover:text-white transition">
              View Details →
            </button>
          </div>
          <div className="md:flex-1 md:pl-8 md:order-2 order-1">
            <img
              src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/FirstAI.jpg"
              alt="コンサルティングのイメージ"
              className="w-full max-w-[500px]"
            />
          </div>
        </section>
      </div>

      {/* Blog */}
      <section
        ref={blogRef}
        className="py-16 px-4 transition-opacity duration-500 mx-4 md:mx-32"
      >
        <h2 className="text-3xl font-bold mb-8">ブログ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md">
            <img
              src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/image/river-6175173_1920.jpg"
              alt="ブログ記事2のサムネイル"
              className="w-full"
            />
            <div className="p-4">
              <div className="text-[#666] mb-2">2024/03/15 お知らせ</div>
              <h3 className="text-xl font-bold mb-2">
                新オフィスオープンのお知らせ
              </h3>
              <p className="text-[#666]">
                事業拡大に伴い、大阪市内に新オフィスをオープンしました。
                より一層サービス向上に努めてまいります。
              </p>
              <div className="mt-4">
                <a href="#" className="btn-primary">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

   {/* Contact */}
<section className="py-16 px-4 bg-[#EEE]">
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



      <footer className="bg-[#2c2c2c] py-4">
        <div className="container mx-auto text-center text-gray-400">
          &copy; 2024 株式会社First AI All rights reserved.
        </div>
      </footer>

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        .btn-primary {
          display: inline-block;
          padding: 12px 24px;
          background-color: #333;
          color: white;
          font-weight: bold;
          text-decoration: none;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Home;
