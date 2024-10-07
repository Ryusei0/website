import React, { useState } from 'react';

const InputField = ({ label, type, placeholder, required, value, onChange, name }) => (
  <div className="mb-8">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      name={name}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="max-w-3xl mx-auto py-24 px-6 font-sans">
         <div className="w-full">
          <div className="relative w-full h-64 md:h-96 overflow-hidden">
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
            <div className="relative z-10 p-6 h-full flex flex-col justify-center">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <p className="text-sm mb-1 opacity-80 text-white">お問い合わせ</p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
                Contact
                </h1>
              </div>
            </div>
          </div>
        </div>
      <div className="bg-white p-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          お問い合わせ
        </h1>
        <div className="w-24 h-1 bg-gray-500 mx-auto mb-12"></div>
        <p className="text-lg mb-12 text-center text-gray-600">
          弊社サービスに関するお問い合わせは、<br/>下記フォームをご入力の上、送信してください。
          <br />
          <span className="text-red-500 font-medium">*</span> は必須項目です。
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <InputField
            label="会社名"
            type="text"
            placeholder="会社名を入力してください"
            required={true}
            value={formData.company}
            onChange={handleChange}
            name="company"
          />
          <InputField
            label="氏名"
            type="text"
            placeholder="氏名を入力してください"
            required={true}
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          <InputField
            label="電話番号"
            type="tel"
            placeholder="電話番号を入力してください"
            required={true}
            value={formData.phone}
            onChange={handleChange}
            name="phone"
          />
          <InputField
            label="メールアドレス"
            type="email"
            placeholder="メールアドレスを入力してください"
            required={true}
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="お問い合わせ内容を入力してください"
              required
              value={formData.message}
              onChange={handleChange}
              name="message"
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;