const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center">
        <div className="w-full text-custom-navbar-text flex items-center justify-center gap-8 py-3 bg-custom-black">
          <a href="/">
            <img src="logo-golestan.webp" alt="Golestan Logo" />
          </a>
          <ul className="desktop-navbar hidden lg:flex items-center *:min-h-7 *:flex *:items-center divide-x divide-custom-navbar-dividers *:px-5 text-[14px] font-light *:transition">
            <li className="hover:text-custom-gray">
              <a href="#">صفحه اصلی</a>
            </li>
            <li>
              <div className="relative group">
                <div className="navbar-dropdown__text">
                  <p>شرکت گلستان</p>
                  <span className="text-xl">▾</span>
                </div>
                <div className="navbar-dropdown__content">
                  <ul className="navbar-dropdown__list">
                    <li>معرفی شرکت</li>
                    <li>تاریخچه گلستان</li>
                    <li>اخبار و اطلاعیه ها</li>
                    <li>مسئولیت های اجتماعی</li>
                    <li>سازمان فروش</li>
                    <li>سازمان توزیع</li>
                    <li>برندها</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <div className="navbar-dropdown__text">
                  <p>محصولات</p>
                  <span className="text-xl">▾</span>
                </div>
                <div className="navbar-dropdown__content">
                  <ul className="navbar-dropdown__list">
                    <li>چای</li>
                    <li>ناتس</li>
                    <li>ادویه و چاشنی</li>
                    <li>برنج</li>
                    <li>زعفران و زرشک</li>
                    <li>دمنوش</li>
                    <li>حبوبات و غلات</li>
                    <li>عصاره و شربت گیاهی</li>
                    <li>قند و شکر</li>
                    <li>هاتی نودل</li>
                    <li>سایر محصولات</li>
                    <li>گل کیس</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="relative group">
                <div className="navbar-dropdown__text">
                  <p>وبلاگ</p>
                  <span className="text-xl">▾</span>
                </div>
                <div className="navbar-dropdown__content">
                  <ul className="navbar-dropdown__list">
                    <li>مجله گلستان</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hover:text-custom-gray">
              <a href="#">قرعه کشی</a>
            </li>
            <li className="hover:text-custom-gray">
              <a href="#">استخدام</a>
            </li>
            <li>
              <div className="relative group">
                <div className="navbar-dropdown__text">
                  <p>تماس با ما</p>
                  <span className="text-xl">▾</span>
                </div>
                <div className="navbar-dropdown__content">
                  <ul className="navbar-dropdown__list">
                    <li>دفتر مرکزی</li>
                    <li>صدای مصرف کنندگان</li>
                    <li>ارتباط با مشترکین</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hover:text-custom-gray">
              <a href="#">EN</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
