import React , { useState, useEffect , useRef}from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const ExecutiveProfile = ({ name, title, imageSrc, bio }) => (
    <div className="flex flex-col items-center bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
      <img
        src={imageSrc}
        alt={name}
        className="w-32 h-32 sm:w-48 sm:h-48 object-cover mb-4 sm:mb-6 border-4 border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105"
      />
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">{name}</h2>
      <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-gray-600">{title}</p>
      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-4 sm:mb-6"></div>
      <p className="text-sm sm:text-base text-center max-w-md text-gray-700 leading-relaxed">{bio}</p>
    </div>
  );
const Company = () => {
  const companyInfo = [
    { label: '社名', value: '株式会社First AI' },
    { label: '創業', value: '2024年3月' },
    {
      label: '所在地',
      value: [
        '本社',
        '〒542-0076 大阪府大阪市中央区難波5-1-60 なんばスカイオ27階',
      ],
    },
    { label: '電話番号', value: '080-5706-3397' },
    { label: '資本金', value: '1,000,000円' },
    { label: '代表取締役CEO', value: '灘波 竜星' },
    {
      label: '事業内容',
      value: ['生成AI活用支援事業', 'システム開発事業', 'AIキャリアコーチング事業'],
    },
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

 

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* ヘッダーセクション */}
      <div className="w-full">
        <div className="relative w-full h-80 md:h-120 overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/image_fx_+(2).jpg")',
            }}
          ></div>
          {/* 斜めのオーバーレイを追加 */}
          <div className="absolute inset-0 bg-black opacity-50 transform -skew-y-6 origin-top-left"></div>
          {/* テキストを前面に表示 */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-end">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
              <p className="text-sm mb-2 opacity-80 text-white">会社概要</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-white">
                Company
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ビジョン共有 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-8 sm:space-y-16">
  <div className="space-y-6">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 mb-8"
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
        Vision
      </h1>
      <div className="flex flex-col items-start mt-4 sm:mt-0">
        <span className="text-sm uppercase tracking-wider text-gray-500">
          ビジョン
        </span>
        <div className="w-16 h-1 bg-black mt-2"></div>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex items-center text-base md:text-lg mb-8 font-light"
    >
      <span className="mr-3 tracking-wider">the future we envision</span>
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

  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-16 leading-tight"
  >
    ひとりひとりが
    <br />
    幸福を追求できる持続可能な社会を創る
  </motion.h2>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
        },
      },
    }}
    className="space-y-6 sm:space-y-8 text-base md:text-lg font-light leading-relaxed"
  >
    {[
      "ひとりひとりが“自分の想い”を実現し、自分の人生に心から満足している世界。",
      "そんな世界が我々の目指す世界です。",
      "しかし、この世界はそう簡単には実現できるものでもありません。",
      "労働人口の減少、格差の拡大などにより、我々は満たされるどころか、今ある環境を維持することすら難しくなってきているところもあります。",
      "もうどうすることのできないのではないか。",
      "そこに、追い風にも向かい風にもなりうる、「生成AI」が現れました。",
      "「生成AI」は、人の能力を際限なく引き上げ、「今までできなかったことを、できるようにしてくれる能力」を秘めています。",
      "うまく活用できれば、格差を是正し、自己実現、満たされる人生を送ることができるのに対し、",
      "逆に使い方を間違えると、失業問題、能力格差、収入格差など、さまざまな格差をさらに深刻化する可能性も秘めています。",
      "では、これらを分岐路を間違えないためには、何が必要なのか。",
      "我々は、「人がAIを。そしてAIが人を正しく理解すること」が大切であると考えます。",
      "そのために、我々は、人とAIの本質に迫り続け、人とAIの摩擦を限りなく0に近づけていきます。",
      "そうした活動を通じて、",
      "「ひとりひとりが自分の想いを叶え、そして持続させる社会を実現する」",
      "これが我々のビジョンです。",
    ].map((text, index) => (
      <motion.p
        key={index}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {text}
      </motion.p>
    ))}
  </motion.div>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2, duration: 1 }}
    className="mt-8 sm:mt-16 text-sm text-gray-600 font-light leading-relaxed"
  >
    2024.3 First AI Inc.
  </motion.p>
</div>

      {/* リーダーシップセクション */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-gray-900">
          Leadership
        </h1>

        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
          <img
  src="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%81%AA%E3%82%93%E3%81%AF%E3%82%99.JPG"
  alt="灘波竜星"
  className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover object-top mx-auto shadow-lg"
/>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-6 sm:mt-8 text-center text-gray-800">
              灘波 竜星
            </h2>
            <p className="text-center text-gray-600 text-lg sm:text-xl mt-2">
              代表取締役 CEO
            </p>
            {/*  <div className="flex justify-center gap-6 mt-4 sm:mt-6">
             
              <svg
                xmlns="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%81%AA%E3%82%93%E3%81%AF%E3%82%99.JPG"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <Instagram
                size={28}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              />
              <Twitter
                size={28}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              />
            </div>*/}
            <p className="text-sm text-center mt-6 sm:mt-8 text-gray-600">
              2000年大阪生まれ。京都大学在学中。
              <br />
              AIコンサルタント、エンジニアとして
              <br />
              数々の開発、教材開発を牽引。
            </p>
          </div>

          {/* 縦の線を追加 */}
          <div className="hidden md:block border-l border-gray-300"></div>

          <div className="md:w-2/3">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-black">
              代表メッセージ
            </h3>
            <p className="font-semibold text-xl sm:text-2xl mb-6 sm:mb-8 text-black">
              「キャリアで不幸になる人をなくす」
            </p>
            <div className="space-y-4 sm:space-y-6 text-gray-600">
            <p>
          株式会社FirstAIは、人とテクノロジーの力で、「ひとりひとりが幸福を追求できる持続可能な社会」を実現するべく、2024年の3月に創業いたしました。
        </p>
        <p>
          少子高齢化に伴う労働人口の減少は、非常に深刻な問題であり、今現在も人々の営みや、安らぎが失われていっている地域がたくさんあります。
        </p>
        <p>
          そうした現実を目の当たりにし、自分の無力さを感じていたところに、「生成AI」に出会いました。
        </p>
        <p>
         「生成AIがひとりひとりの生活に浸透すれば、厳しい現実に争うことができるのではないか」そう思うようになり、FirstAIを立ち上げました。
        </p>
        <p>
         今はまず、人が人生において多くの時間を費やし、そして生活や感情に大きな影響を与える「キャリア」において、「どのように生成AIを活用するか」という観点から、現場の課題に向き合い、そしてAIを導入するということに注力しています。
        </p>
        <p>
          生成AIの普及によって、ビジネス、そして人々の生活は大きく変化します。
        </p>
        <p>
          弊社は現場の課題、そしてひとりひとりの幸福に向き合い続け、「ひとりひとりが幸福を追求できる持続可能な社会」を実現します。
        </p>
            </div>
          </div>
        </div>
      </div>

      {/* メンバー紹介 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <ExecutiveProfile
            name="山内 悠真"
            title="取締役 COO"
            imageSrc="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E5%B1%B1%E5%86%85.JPG"
            bio="京都大学 工学部在籍中。株式会社KOKUA 新規事業リーダー。大学時代に教育、就活支援、SNS広告事業で起業し、幅広い事業開発経験を持つ。事業立ち上げから外部との連携に至るまで、実務全般を担当。多様な分野での実績を活かし、事業の成長を牽引中。"
          />
          <ExecutiveProfile
            name="中村 慧"
            title="CSO"
            imageSrc="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E4%B8%AD%E6%9D%91.JPG"
            bio="カリフォルニア大学 サンディエゴ校 (UCSD) 国際社会学部在籍中。7年間にわたりアメリカに留学（ニューヨーク3年、カリフォルニア4年）。中小企業への技能実習生受け入れ支援の経験を持ち、総務全般および顧客課題のリサーチを担当。国際的な視野を活かし、企業の課題解決に貢献している。"
          />
          <ExecutiveProfile
            name="堀越 諒太"
            title="事業開発"
            imageSrc="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E5%A0%80%E8%B6%8A%E3%81%95%E3%82%93.jpg"
            bio="大手外資系コンサルティングファーム マネージャー。顧客体験（UX）の変革を軸に、戦略策定から開発まで一貫して従事。現在は、映像制作やAI関連事業（AIぼう、AI研修、システム開発）など幅広い業務も担当し、事業の成長に貢献している。"
          />
          <ExecutiveProfile
            name="シャルマボニー 仁"
            title="人材開発"
            imageSrc="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%9E%E3%81%95%E3%82%93.jpg"
            bio="大手外資系コンサルティングファーム出身。複数の企業でHRBP（人事ビジネスパートナー）として採用および教育設計に従事し、学生から第二新卒まで200名以上のキャリア支援を実施。現在はAIぼうのアルゴリズム設計を手がけ、AI分野でもその専門性を発揮している。"
          />
          <ExecutiveProfile
            name="田村 孝"
            title="技術アドバイザー"
            imageSrc="https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/%E7%94%B0%E6%9D%91%E3%81%95%E3%82%93.jpg"
            bio="日本IBM データサイエンティスト。医療や製造領域において、AIおよびデータ関連の事業を立ち上げ成功させる。生成AIを活用した伴走支援を提供するGarageworksを創業し、IT技術を中心にAIやデータ関連の幅広い業務を手がける。"
          />
        
        </div>
      </div>

      {/* 会社概要 */}
      <div className="bg-black text-white font-sans">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <motion.div 
      className="mb-8 sm:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        会社概要
      </h1>
      <div className="relative">
        <div className="absolute right-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
      </div>
    </motion.div>
    <motion.table 
      className="w-full border-collapse"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <tbody>
        {companyInfo.map((item, index) => (
          <motion.tr
            key={index}
            className={
              index !== companyInfo.length - 1
                ? 'border-b border-gray-700'
                : ''
            }
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <td className="py-4 sm:py-6 px-4 sm:px-6 align-top font-medium w-1/3 text-gray-300">
              {item.label}
            </td>
            <td className="py-4 sm:py-6 px-4 sm:px-6 text-gray-100">
              {Array.isArray(item.value) ? (
                <ul className="list-none p-0 m-0 space-y-2">
                  {item.value.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              ) : (
                item.value
              )}
            </td>
          </motion.tr>
        ))}
      </tbody>
    </motion.table>
  </div>
</div>


      {/* フッターセクション */}
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

export default Company;
