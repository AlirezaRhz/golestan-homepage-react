const Footer = () => {
  return (
    <>
      <div className="bg-custom-red h-6"></div>

      <section className="bg-custom-black text-sm text-[#BCBEC0] pt-8 pb-16">
        <div className="flex justify-center items-center flex-wrap gap-6">
          <div>
            <img
              src="Images/footer-icon1.png"
              alt="tea"
              className="mx-auto mb-4"
            />

            <hr />
            <h4 className="text-white text-center text-lg my-2 px-10">
              چای گلستان
            </h4>
            <hr />

            <ul className="space-y-3 mt-4 *:transition-all *:hover:text-white">
              <li>
                <a href="#">چای ممتاز هندوستان</a>
              </li>
              <li>
                <a href="#">چای ممتاز ارل گری</a>
              </li>
              <li>
                <a href="#">چای سيلان عطری</a>
              </li>
              <li>
                <a href="#">چای ممتاز سيلان</a>
              </li>
              <li>
                <a href="#">چای صبحانه گلستان</a>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="Images/footer-icon2.png"
              alt="tea"
              className="mx-auto mb-4"
            />

            <hr />
            <h4 className="text-white text-center text-lg my-2 px-10">
              تی بگ گلستان
            </h4>
            <hr />

            <ul className="space-y-3 mt-4 *:transition-all *:hover:text-white">
              <li>
                <a href="#">تی بگ بلک لاين</a>
              </li>
              <li>
                <a href="#">تی بگ ارل گری</a>
              </li>
              <li>
                <a href="#">دمنوش نعناع</a>
              </li>
              <li>
                <a href="#">دمنوش بابونه</a>
              </li>
              <li>
                <a href="#">دمنوش چای سبز</a>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="Images/footer-icon3.png"
              alt="tea"
              className="mx-auto mb-4"
            />

            <hr />
            <h4 className="text-white text-center text-lg my-2 px-10">
              ادويه گلستان
            </h4>
            <hr />

            <ul className="space-y-3 mt-4 *:transition-all *:hover:text-white">
              <li>
                <a href="#">زعفران ممتاز خراسان</a>
              </li>
              <li>
                <a href="#">ادویه کاری</a>
              </li>
              <li>
                <a href="#">ادویه ماست و خیار</a>
              </li>
              <li>
                <a href="#">فلفل سياه خالص</a>
              </li>
              <li>
                <a href="#">زردچوبه ممتاز</a>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="Images/footer-icon4.png"
              alt="tea"
              className="mx-auto mb-4"
            />

            <hr />
            <h4 className="text-white text-center text-lg my-2 px-10">
              حبوبات گلستان
            </h4>
            <hr />

            <ul className="space-y-3 mt-4 *:transition-all *:hover:text-white">
              <li>
                <a href="#">لوبيا قرمز ممتاز</a>
              </li>
              <li>
                <a href="#">لوبيا چيتی گلستان</a>
              </li>
              <li>
                <a href="#">عدس كانادايی</a>
              </li>
              <li>
                <a href="#">نخود زودپز كرمانشاه</a>
              </li>
              <li>
                <a href="#">لوبيا سفيد گلستان</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 mt-16">
          <p className="text-[#9F9F9F]">
            All Right Reserved Golestan Company 2022-2025
          </p>

          <p className="text-[#7B7B7B]">Design By: Golestan Studio</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
