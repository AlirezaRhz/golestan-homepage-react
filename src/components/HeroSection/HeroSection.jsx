const HeroSection = () => {
  return (
    <>
      <section className="flex justify-center py-10 px-4 items-center bg-[linear-gradient(190deg,#FBFBFB_0%,#D2D2D2_100%)] w-full min-h-110">
        <div className="flex flex-col-reverse text-center md:flex-row md:text-start lg:ml-40 items-center gap-20 ">
          <div className="max-w-xl">
            <h1 className="text-custom-red text-3xl mb-4">
              قرعه‌کشی ویژه مصرف‌کنندگان
            </h1>
            <h2 className="text-custom-hero-gray text-xl mb-6">
              قرعه‌کشی چای و ناتس گلستان
            </h2>
            <p className="text-custom-text-gray text-sm mb-8 max-w-md leading-8 animate-fade-in-down-text">
              با خرید محصولات چای و ناتس گلستان، کد روی بسته را به شماره
              30007405 ارسال کنید و در قرعه‌کشی‌های دوره‌ای ما شرکت کنید.
            </p>
            <a href="#" className="custom-btn">
              اطلاعات بیشتر
            </a>
          </div>

          <div className="animate-fade-in-down">
            <img src="Images/tea-image.png" alt="Golestan Tea Image" />
          </div>
        </div>
      </section>

      <section className="mt-4 px-4 leading-8">
        <hr className="text-gray-300" />

        <div className="mx-auto mt-20 lg:w-2xl animate-fade-in-left px-4 md:px-0">
          <div>
            <hr className="text-custom-gray border-t-2" />
            <h3 className="text-xl text-custom-red mt-10 font-semibold">
              معرفی گلستان
            </h3>

            <p className="mt-4 text-custom-text-gray text-[16px]">
              آنچه که امروز با نام مجموعه{" "}
              <span className="text-custom-red">گلستان</span> می‌شناسیم در سال
              1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با
              بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد
              کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های
              «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش
              پیدا کرد. <span className="text-custom-red">گلستان</span> پس از
              سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این
              سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید.
            </p>

            <p className="mt-8 text-custom-text-gray text-[16px]">
              هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
              تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های
              نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی{" "}
              <span className="text-custom-red">شرکت گلستان</span> است.
            </p>

            <hr className="text-custom-gray border-t-2 mt-8" />
          </div>

          <div className="mt-12">
            <h3 className="text-xl text-custom-red mt-10 font-semibold">
              محصولات گلستان
            </h3>

            <p className="mt-4 text-custom-text-gray text-[16px]">
              <span className="text-custom-red">نام تجاری گلستان</span> قدمتی به
              اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با
              این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از
              این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان
              از نهایت کیفیت این نام تجاری حمایت می‌کنند
            </p>

            <hr className="text-custom-gray border-t-2 mt-6" />
          </div>
        </div>

        <div className="mt-40 *:flex *:justify-center text-custom-text-gray flex justify-center items-center flex-wrap gap-8 *:border-b-2 *:border-custom-gray *:px-8 *:py-2 *:min-w-50 animate-fade-scale">
          <div>
            <p>سرمایه انسانی</p>
          </div>

          <div>
            <p>مراکز فروشی</p>
          </div>

          <div>
            <p>محصولات گلستان</p>
          </div>

          <div>
            <p>مشتریان گلستان</p>
          </div>
        </div>

        <hr className="text-gray-300 mt-36" />
      </section>
    </>
  );
};

export default HeroSection;
