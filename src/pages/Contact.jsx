import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto py-0 px-6 font-sans">
      {/* Hero */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://s3.ap-northeast-3.amazonaws.com/testunity1.0/website/image_fx_+(2).jpg")',
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
          <p className="text-sm mb-1 opacity-80 text-white">お問い合わせ</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
            Contact
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white/80 backdrop-blur-sm p-12 rounded-none text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          お問い合わせのお願い
        </h2>
        <div className="w-24 h-1 bg-gray-600/70 mx-auto mb-10 rounded" />

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
          大変お手数をおかけしますが、下記の電話番号までご連絡いただけますと幸いです。
        </p>

        <div>
          <div className="text-sm tracking-wide text-gray-500">代表取締役</div>
          <div className="mt-1 text-2xl font-semibold text-gray-900">灘波 竜星</div>

          <div className="mt-6">
            <div className="text-sm text-gray-500">お電話</div>
            <a
              href="tel:08057063397"
              className="block mt-2 text-2xl md:text-3xl font-bold tracking-wide text-gray-900"
            >
              080-5706-3397
            </a>
          </div>

          <a
            href="tel:08057063397"
            aria-label="電話をかける"
            className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold bg-gray-800 text-white shadow hover:shadow-md hover:bg-gray-900 transition"
          >
            電話する
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          ※ 営業時間外の場合は折り返しご連絡いたします。
        </p>
      </div>
    </div>
  );
};

export default Contact;
