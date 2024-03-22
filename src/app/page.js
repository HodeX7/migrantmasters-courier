import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

export default function Home() {

  const services = [
    {
      image: "",
      title: "Swift Delivery",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "",
      title: "Swift Delivery",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "",
      title: "Swift Delivery",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "",
      title: "Swift Delivery",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center h-screen bg-background text-white">
        <div className="w-1/2 flex flex-col gap-y-5">
          <h1 className="text-6xl font-black">Reliable Service <br /> Every Time</h1>
          <p className="w-[70%]">
            Nullam ac aliquam purus. Donec tempor, metus sed porttitor posuere,
            elit sapien rutrum elit, eget tincidunt nisl tortor nec metus. Donec
            tempor rhoncus convallis.
          </p>
          <div className="flex gap-x-2 mt-6 w-2/3">
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

      {/* 2nd Section */}
      <div className="w-full flex py-20 px-24">
        <div className="w-1/2">Image</div>
        <div className="w-1/2 flex flex-col gap-y-5">
          <h1 className="text-4xl font-extrabold">
            Do You Want A Fast <br /> Service? Just Call Us.
          </h1>
          <h4 className="text-gray-400 text-md">
            Aenean quis sagittis sem. Sed volutpat quam a imperdiet volutpat.
            Quisque maximus nibh elit, nec molestie erat tincidunt sit amet.
            Duis nec ante molestie, volutpat mi ac, convallis quam. Fusce
            laoreet bibendum luctus. Maecenas malesuada fermentum mi.
          </h4>
          <Button text="Call Us" classes={'w-[40%] mt-6'} />
        </div>
      </div>

      {/* 3rd Section */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-background relative py-20 px-24">
        <h1 className="text-4xl font-extrabold text-center text-white">
          Try Us And See How Good <br />
          Our Services Are.
        </h1>
        <Button text="Call Us" classes={'w-32 mt-6'} />
        <div className="flex items-center justify-center space-x-8 mt-auto z-[2] px-20">
          {services.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-y-4 x-6">
              <div className="w-42 h-42 bg-gray flex items-center justify-center">image</div>
              <h2 className="text-2xl font-medium">{item.title}</h2>
              <p className="text-md text-center">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="curve absolute bottom-0 bg-white w-[115%] h-[14rem] rounded-t-full"></div>
      </div>

      {/* 4th Section */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white py-20 px-24">
        <h1 className="text-4xl font-extrabold text-center mt-4">
          We Deliver Everything
        </h1>
        <p className="w-[35%] text-center mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
        </p>
        <div className="flex items-center justify-center space-x-8 mt-auto z-2 px-20">
          {services.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-y-4 x-6">
              <div className="w-42 h-42 bg-gray flex items-center justify-center">image</div>
              <h2 className="text-2xl font-medium">{item.title}</h2>
              <p className="text-md text-center">{item.content}</p>
              <Button text="Order Now" classes={'w-32 mt-4'} />
            </div>
          ))}
        </div>
      </div>

      {/* 5th Section */}
      <div
        className="w-full h-screen flex flex-col items-center justify-center bg-white relative text-white"
        style={{ backgroundImage: "url(https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/young-asian-male-courier-with-thermo-bag-wearing-f-2021-09-03-20-53-03-utc-copy.jpg)" }}
      >
        <div className="tint absolute top-0 left-0 w-full h-full bg-background opacity-80"></div>
        <div className="z-[2] w-full h-full flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-extrabold text-center mt-12">
            Join The Crew
          </h1>
          <div className="flex items-center justify-center space-x-8 z-2 px-20 mt-auto">
            {services.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex flex-col items-start relative gap-y-4 x-6 bg-background px-[2rem] py-[3rem] max-w-[22rem]">
                <div className="w-[6rem] h-[6rem] absolute bg-gray flex items-center justify-center bg-red-500"
                  style={{ top: "-3rem" }}
                >image</div>
                <h2 className="text-3xl font-medium mt-4">{item.title}</h2>
                <p className="text-md">{item.content}</p>
                <Button text="Order Now" classes={'w-32 mt-4'} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6th Section */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white relative py-20">
        <div className="curve absolute top-0 bg-background w-[115%] h-[60vh] rounded-b-full"></div>
        <div className="z-[2] w-full flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-center text-white">
            Customer Testimonials
          </h1>
          <Button text="Get More" classes={'w-32 mt-4'} />
        </div>
        <div className="flex items-center justify-center space-x-8 mt-12 z-[2] px-20">

          <div className="flex flex-col items-center px-6 bg-white rounded-xl">
            <div className="w-[6rem] h-[6rem] bg-gray flex items-center justify-center rounded-full bg-red-500">image</div>
            <h2 className="text-xl font-medium mt-4 mb-1">Emily Rose</h2>
            <h2 className="text-md font-medium">Teacher</h2>
            <div className="stars flex items-center justify-center space-x-2 my-4">
              {Array.from({length: 5}).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FF8A65"><path d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z" stroke="#FF8A65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              ))}
            </div>
            <p className="text-md text-center">Sed sollicitudin magna sit amet lacinia consectetur. Vivamus rhoncus accumsan facilisis. Praesent mi mi, placerat eu metus ac, porttitor laoreet sem. Praesent sed sem sed augue semper iaculis eu in eros. Morbi sed enim at risus semper placerat. Ut non enim vitae elit sagittis bibendum venenatis sed nunc.</p>
          </div>

        </div>
      </div>
    </main>
  );
}
