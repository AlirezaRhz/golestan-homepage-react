import "./News";

const News = () => {
  return (
    <>
      <div className="min-h-32 "></div>
      <section className="mt-16">
        <h3 className="text-xl text-custom-red font-semibold lg:max-w-5xl mx-auto my-12 px-4">
          مجله گلستان
        </h3>

        <div className="bg-[#CDE4B0] flex justify-center items-center flex-wrap gap-3 *:bg-white *:max-w-xs *:shadow-2xl text-custom-text-gray text-sm py-28 leading-8">
          <div className="bg-white">
            <img
              src="Images/news3.jpg"
              alt="ماکارونی با سبزیجات"
              className="w-full inline-block cursor-pointer transition-all hover:opacity-50"
            />

            <div className="mx-4 my-8">
              <h3 className="text-xl text-custom-red font-semibold inline-block">
                ماکارونی با سبزیجات
              </h3>

              <p className="mt-4">
                ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
                می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
                روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
              </p>

              <a href="#" className="custom-btn mt-8 inline-block">
                ادامه مطلب
              </a>
            </div>
          </div>

          <div className="bg-white">
            <img
              src="Images/news2.jpg"
              alt="ماکارونی با سبزیجات"
              className="w-full inline-block cursor-pointer transition-all hover:opacity-50"
            />

            <div className="mx-4 my-8">
              <h3 className="text-xl text-custom-red font-semibold inline-block">
                سوپ مکزیکی
              </h3>

              <p className="mt-4">
                گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا
                روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع
                آن بیرون آورده…
              </p>

              <a href="#" className="custom-btn mt-8 inline-block">
                ادامه مطلب
              </a>
            </div>
          </div>

          <div className="bg-white">
            <img
              src="Images/news1.jpg"
              alt="ماکارونی با سبزیجات"
              className="w-full inline-block cursor-pointer transition-all hover:opacity-50"
            />

            <div className="mx-4 my-8">
              <h3 className="text-xl text-custom-red font-semibold inline-block">
                چیلاکیله
              </h3>

              <p className="mt-4">
                احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
                فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
                فهرست
              </p>

              <a href="#" className="custom-btn mt-8 inline-block">
                ادامه مطلب
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
