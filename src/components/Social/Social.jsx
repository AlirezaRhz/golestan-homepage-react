import {
  FaInstagram,
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";

const Social = () => {
  return (
    <>
      <section className="bg-[#105153] w-full py-36 text-center">
        <div className="flex flex-col justify-center items-center relative top-56">
          <h3 className="text-[#D5ECE1] text-xl">
            مسئوليت‌های اجتماعی شركت گلستان
          </h3>
          <hr className="w-full my-2" />
          <h3 className="text-3xl text-[#00d8df] my-2">
            <span className="text-[#009da2]">Golestan</span> Social
            Responsibility
          </h3>
          <p className="text-xl text-[rgb(188,190,192)] mb-3">Mahdi Hospital</p>
          <img src="Images/buildings.jpg" alt="Buildings" />
        </div>
      </section>
      <div className="bg-[#FFD6A7] min-h-6"></div>

      <hr className="w-full mt-8 text-custom-gray" />

      <section className="flex justify-center items-center mt-28 leading-8 text-center px-8 md:text-start md:px-0">
        <div className="max-w-3xl">
          <h3 className="text-xl text-custom-red font-semibold mb-4">
            مسئوليت‌های اجتماعی گلستان
          </h3>

          <p className="text-custom-text-gray mb-8">
            كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
            قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر
            از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و
            امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.
            <span className="text-custom-red font-bold">گلستان</span> در
            فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را
            در دستوركار خود قرار داده است.
          </p>

          <a href="#" className="custom-btn">
            اطلاعات بیشتر
          </a>
        </div>
      </section>

      <section className="bg-[#EEEFEF] py-10 mt-24">
        <div className="flex justify-center items-center gap-2 text-2xl text-custom-text-gray">
          <a
            href="https://instagram.com/golestanco"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:bg-pink-500 transition p-3 bg-gray-600/30 rounded-full"
          >
            <FaInstagram className="text-white" />
          </a>
          <a
            href="https://facebook.com/golestanco"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:bg-blue-500 transition p-3 bg-gray-600/30 rounded-full"
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="hover:bg-blue-300 transition p-3 bg-gray-600/30 rounded-full"
          >
            <FaTelegramPlane className="text-white" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:bg-blue-700 transition p-3 bg-gray-600/30 rounded-full"
          >
            <FaLinkedinIn className="text-white" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Social;
