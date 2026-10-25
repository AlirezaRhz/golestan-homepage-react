const HomepageProduct = ({
  image,
  imageAlt,
  name,
  tagline,
  description,
  buttons = [],
}) => {
  return (
    <>
      <section className="mt-4">
        <div className="relative">
          <div className="w-full">
            <img src={image} alt={imageAlt} className="block w-full" />
          </div>
          <div className="bg-orange-200 min-h-5"></div>
          <div className="md:absolute md:left-auto md:right-3/12 md:bottom-0 py-4 pl-36 pr-6 bg-custom-red-product text-white ">
            <h3 className="text-2xl mb-3">{name}</h3>
            <p>معرفی محصول</p>
          </div>
        </div>

        <hr className="text-gray-300 mt-8 mx-4" />

        <div className="mx-auto max-w-xl px-6 md:px-0">
          <h3 className="text-custom-red text-xl font-semibold mt-12 mb-4">
            {tagline}
          </h3>

          <p className="text-custom-text-gray leading-8 mb-12">{description}</p>

          <div className="flex items-center gap-3">
            {buttons.map((btn) => (
              <a key={btn.label} href={btn.href} className="custom-btn">
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        <hr className="text-gray-300 mt-24 mx-4" />
      </section>
    </>
  );
};

export default HomepageProduct;
