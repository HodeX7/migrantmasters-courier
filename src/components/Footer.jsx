import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background p-10 gap-y-6 flex flex-col items-start text-white w-fit">
      <h1 className="text-6xl lg:text-3xl font-black mb-8">Mail Booth</h1>
      <div className="flex justify-center flex-col-reverse lg:flex-row gap-y-12 lg:gap-y-6 items-start ">
        <div className="flex flex-col footer-item space-y-2">
          <h2 className="font-semibold text-4xl lg:text-2xl mb-2 w-[10rem]">
            Links
          </h2>
          <a href="#" className="text-3xl lg:text-sm">
            Home
          </a>
          <a href="#" className="text-3xl md: text-l lg:text-sm">
            Our Mission
          </a>
          <a href="#" className="text-3xl md: text-l lg:text-sm">
            How It Works
          </a>
          <a href="#" className="text-3xl md: text-l lg:text-sm">
            Why Choose Us?
          </a>
          <a href="#" className="text-3xl md: text-l lg:text-sm">
            Our Partnerships
          </a>
        </div>
        <div className="flex w-full gap-x-4">
          <div className="flex flex-col footer-item space-y-2">
            <h2 className="font-semibold text-4xl md:text-2xl mb-2">
              Find Us!
            </h2>
            <p className="text-3xl font-light lg:text-sm">
              Explore our growing network of mailbooth locations across India
              and Canada. Easily locate the nearest mailbooth in your city or
              neighborhood.
            </p>
          </div>
          <div className="footer-item space-y-2">
            <h2 className="font-semibold text-4xl md:text-2xl mb-2">
              Have Questions? Contact Us
            </h2>
            <p className="text-3xl font-light lg:text-sm">
              Have inquiries, feedback, or interested in partnership
              opportunities? Reach out to us via our{" "}
              <a href="#" className="underline font-bold cursor-pointer">
                inquiry form
              </a>
              , email, phone, or visit us at our physical address. We're here to
              assist you every step of the way.
            </p>
          </div>
        </div>
      </div>
      <span className="text-gray-400 text-3xl lg:text-base text-center mt-10">
        Copyright © 2024 | Developed by{" "}
        <Link href={"https://www.computeitsolutions.com"}>Devvebs</Link>
      </span>
    </footer>
  );
};

export default Footer;
