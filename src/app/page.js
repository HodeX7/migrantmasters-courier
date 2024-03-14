import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#253138" }} className="">
      <Navbar />
      {/* Hero Section 1 */}
      <div className="flex">
        <div className="w-1/2 flex flex-col gap-5 pl-16 mt-40">
          <h1 className="text-6xl">Reliable Service Every Time</h1>
          <h4>
            Nullam ac aliquam purus. Donec tempor, metus sed porttitor posuere,
            elit sapien rutrum elit, eget tincidunt nisl tortor nec metus. Donec
            tempor rhoncus convallis.
          </h4>
          <div className="flex gap-2 w-full">
            <input
              placeholder="Enter Delivery Address"
              className="rounded-md p-2 flex-1"
            />
            <Button text="Go" />
          </div>
        </div>
        <iframe
          className="pl-16"
          src="https://giphy.com/embed/sGmuFYNbvmGiZPITN6"
          width="480"
          height="480"
        ></iframe>
      </div>
      {/* Hero Section 2 */}
      <div className="bg-white flex py-40 text-black">
        <div className="w-3/4">Image</div>
        <div className="w-2/3 flex flex-col gap-5 pr-16">
          <h1 className="text-4xl font-semibold">
            Do You Want A Fast Service? Just Call Us.
          </h1>
          <h4 className="text-gray-400 text-sm">
            Aenean quis sagittis sem. Sed volutpat quam a imperdiet volutpat.
            Quisque maximus nibh elit, nec molestie erat tincidunt sit amet.
            Duis nec ante molestie, volutpat mi ac, convallis quam. Fusce
            laoreet bibendum luctus. Maecenas malesuada fermentum mi.
          </h4>
          <Button text="Call Us" />
        </div>
      </div>
    </div>
  );
}
