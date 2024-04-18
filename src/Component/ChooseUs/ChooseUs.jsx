const ChooseUs = () => {
  return (
    <div className="mt-12">
      <h2 className="text-4xl font-bold uppercase">
        Why do you <span className="text-[#486df0]">Choose Us</span>
      </h2>
      <div className="hero min-h-screen text-left container mx-auto lg:px-8 px-3">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex flex-1">
            <img
              src="https://i.ibb.co/xgrMqvc/3d-rendering-house-model-1.jpg"
              className="max-w-lg rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <div className="mb-3">
              <h3 className="text-3xl font-semibold my-3">Affordable Prices</h3>
              <p className="font-medium">
                At Residence Realm, we believe in providing our clients with
                affordable prices without compromising on quality. Our pricing
                structures are designed to ensure that you get the best value
                for your investment, allowing you to achieve your dream home
                within your budget.
              </p>
            </div>

            <div className="mb-3">
              <h3 className="text-3xl font-semibold my-3">Easy Payments</h3>
              <p className="font-medium">
                We understand the importance of flexibility when it comes to
                payments. That is why we offer easy payment options tailored to
                suit your needs. Whether it is installment plans, financing
                options, or other payment arrangements, we strive to make the
                payment process hassle-free and convenient for you.
              </p>
            </div>

            <div className="mb-3">
              <h3 className="text-3xl font-semibold my-3">
                Property Insurance
              </h3>
              <p className="font-medium">
                Protecting your investment is paramount, which is why we offer
                comprehensive property insurance solutions. Our insurance
                packages are designed to safeguard your property against
                unforeseen events, giving you peace of mind knowing that your
                investment is protected. With our reliable insurance coverage,
                you can confidently enjoy your home knowing that you are covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
