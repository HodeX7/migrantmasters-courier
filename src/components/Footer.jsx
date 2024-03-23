import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background p-20 flex flex-col items-start text-white">
      <h1 className="text-2xl font-black mb-8">Mail Booth</h1>
      <div className="flex justify-center items-start space-x-[6rem]">
        <div className="flex flex-col footer-item space-y-2">
          <h2 className="font-semibold text-xl mb-2 w-[10rem]">Links</h2>
          <a href="#" className="text-sm">Home</a>
          <a href="#" className="text-sm">Our Mission</a>
          <a href="#" className="text-sm">How It Works</a>
          <a href="#" className="text-sm">Why Choose Us?</a>
          <a href="#" className="text-sm">Our Partnerships</a>
        </div>
        <div className="footer-item space-y-2">
          <h2 className="font-semibold text-xl mb-2">Find Us!</h2>
          <p className="text-sm">Explore our growing network of mailbooth locations across India and Canada. Easily locate the nearest mailbooth in your city or neighborhood.</p>
        </div>
        <div className="footer-item space-y-2">
          <h2 className="font-semibold text-xl mb-2">Have Questions? Contact Us</h2>
          <p className="text-sm">Have inquiries, feedback, or interested in partnership opportunities? Reach out to us via our <a href="#" className="underline font-bold cursor-pointer">inquiry form</a>, email, phone, or visit us at our physical address. We're here to assist you every step of the way.</p>
        </div>
      </div>
      <span className="text-gray-400 text-sm text-center mt-8">
        Copyright © 2024 | Developed by{" "}
        <Link href={"https://www.computeitsolutions.com"}>Devvebs</Link>
      </span>
    </footer>
  );
};

export default Footer;
