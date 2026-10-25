import "./HomepageVideos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const HomepageVideos = () => {
  return (
    <>
      <section>
        <div className="flex justify-center items-center flex-wrap gap-3 *:bg-white *:max-w-xs *:border *:border-gray-300 *:shadow-lg text-custom-text-gray text-sm py-14 leading-6">
          <div className="bg-white">
            <div className="relative">
              <img
                src="https://static.cdn.asset.aparat.com/avt/5839414-3004-l__6636.jpg?width=900&quality=90&secret=AUdIO3-SAV4cq7YDDy-2KQ"
                alt="ماکارونی با سبزیجات"
                className="w-full inline-block cursor-pointer"
              />

              <div className="absolute left-6/12 top-6/12 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl text-white p-6 bg-gray-700/80 rounded-full transition-all cursor-pointer hover:bg-pink-600">
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>

            <div className="mx-4 my-8">
              <h3 className="text-xl text-custom-red font-semibold inline-block">
                ماکارونی با سبزیجات
              </h3>

              <p className="mt-4">
                نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با
                كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و
                خوشمزه لذت ببرید.
              </p>

              <a href="#" className="custom-btn mt-8 inline-block">
                ویدیوهای بیشتر
              </a>
            </div>
          </div>

          <div className="bg-white">
            <div className="relative">
              <img
                src="https://static.cdn.asset.aparat.com/avt/5839467-5073-l__6997.jpg?width=900&quality=90&secret=JFgEbUuCMmrx98mARIyM8Q"
                alt="ماکارونی با سبزیجات"
                className="w-full inline-block cursor-pointer"
              />

              <div className="absolute left-6/12 top-6/12 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl text-white p-6 bg-gray-700/80 rounded-full transition-all cursor-pointer hover:bg-pink-600">
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>

            <div className="mx-4 my-8">
              <h3 className="text-xl text-custom-red font-semibold inline-block">
                سوپ مکزیکی
              </h3>

              <p className="mt-4">
                نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
                دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
                سالم و كاملی ساخته است.
              </p>

              <a href="#" className="custom-btn mt-8 inline-block">
                ادامه مطلب
              </a>
            </div>
          </div>

          <div className="bg-white">
            <div className="relative">
              <img
                src="https://static.cdn.asset.aparat.com/avt/1660793-9774-l__9774.jpg?width=900&quality=90&secret=sqgKj8YEevqmCuQ027y7FA"
                alt="ماکارونی با سبزیجات"
                className="w-full inline-block cursor-pointer"
              />

              <div className="absolute left-6/12 top-6/12 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl text-white p-6 bg-gray-700/80 rounded-full transition-all cursor-pointer hover:bg-pink-600">
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>

            <div className="mx-4 my-8">
              <h3 className="text-xl text-custom-red font-semibold inline-block">
                چیلاکیله
              </h3>

              <p className="mt-4">
                عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه
                نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه
                مشتریان گلستان؛‌ لایق بهترین ها هستند.
              </p>

              <a href="#" className="custom-btn mt-8 inline-block">
                مشاهده محصولات
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageVideos;
