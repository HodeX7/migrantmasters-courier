import Link from "next/link";
import Image from "next/image";

import Button from "@/components/ui/Button";

const howItWorksData = [
  {
    image: "howItWorks_01.png",
    title: "Insert Courier 📫",
    content:
      "Simply place your courier in one of our designated mailbooths located in partnered grocery stores.",
  },
  {
    image: "howItWorks_02.png",
    title: "Select Delivery Speed 📦",
    content:
      "Choose your preferred delivery speed from our available options displayed on the screen.",
  },
  {
    image: "howItWorks_03.png",
    title: "Relax and Track 😁",
    content:
      "Sit back and relax as our partnered courier companies, including Indian Post, Blue Dart, Porter, and Gajanan Courier Services, ensure timely delivery to your desired destination.",
  },
];

const whyUsData = [
  {
    image: "howItWorks_01.png",
    title: "Convenience.",
    content:
      "Our mailbooths are conveniently located within grocery stores, making it effortless for you to drop off your courier while running errands.",
  },
  {
    image: "howItWorks_02.png",
    title: "Reliability",
    content:
      "Partnering with trusted courier companies guarantees reliable and secure delivery of your parcels.",
  },
  {
    image: "howItWorks_03.png",
    title: "Speed Options",
    content:
      "Select from a range of delivery speeds to suit your urgency, ensuring your courier reaches its destination on time.",
  },
  {
    image: "howItWorks_03.png",
    title: "Transparency",
    content:
      "Track your courier every step of the way, knowing exactly when it's picked up and delivered.",
  },
];

const partnersData = [
  {
    logo: "/india_post.jpg",
    name: "Indian Post",
    info: "20 km radius",
    content:
      "Indian Post is a reliable postal service provider known for its widespread network and affordable rates. With Mailbooth, you can enjoy the convenience of Indian Post's services within a 20 km radius, delivering your parcels safely and efficiently.",
  },
  {
    name: "Blue Dart",
    info: "40 km radius",
    content:
      "Blue Dart is a leading logistics company renowned for its express delivery services and nationwide coverage. Through our partnership with Blue Dart, we offer expedited shipping options within a 40 km radius, ensuring swift delivery of your parcels to their destination.",
  },
  {
    name: "Porter",
    info: "150 km radius",
    content:
      "Porter specializes in rapid courier services, catering to time-sensitive deliveries within a 150 km radius. With Mailbooth, you can leverage Porter's efficient delivery network to send your parcels with speed and precision.",
  },
  {
    name: "Gajanan Courier Services",
    info: "30 km radius",
    content:
      "Gajanan Courier Services is known for its reliable and cost-effective courier solutions, serving customers within a 30 km radius. With Mailbooth, you can trust Gajanan Courier Services to deliver your parcels promptly and securely to their intended recipients.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-between w-fit overflow-hidden lg:gap-y-0">
      {/* Hero Section */}
      <div className="w-full h-fit flex items-center justify-center lg:h-screen  bg-background text-white flex-col-reverse lg:flex-row mt-[20%] lg:mt-0 ">
        <div className="w-full lg:w-1/2 flex flex-col gap-y-8 mt-6 lg:mt-0  items-center lg:items-start">
          <h1 className="text-8xl md:text-5xl font-black text-center lg:text-left gap-y-2">
            Welcome to MailBooth - <br />
            <span className="text-6xl md:text-3xl font-semibold">
              Simplifying Courier Services !
            </span>
          </h1>
          <p className="w-[90%] lg:w-[75%] text-gray-400 font-extralight md:font-normal text-justify text-4xl lg:text-3xl xl:text-base">
            At Mailbooth, we're revolutionizing the way you send and receive
            couriers. Our mission is to provide convenient, reliable, and
            efficient courier services by partnering with grocery stores and
            courier companies to install physical mailbooths in strategic
            locations across India and Canada.
          </p>
          <div className=" w-fit text-6xl lg:text-3xl xl:text-base mt-6 font-normal">
            <Link href={"/form/senderDetails"}>
              <Button text="Get Started" classes={"h-full px-14"} />
            </Link>
          </div>
        </div>
        <div>
          <iframe
            className="flex justify-center"
            src="https://giphy.com/embed/sGmuFYNbvmGiZPITN6"
            width="480"
            height="480"
          ></iframe>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="w-full flex items-center justify-center px-24 flex-col lg:flex-row  lg:gap-x-[20%]">
        <Image src={"/our_mission.gif"} width={400} height={400} />
        <div className="w-full lg:w-1/2 flex flex-col gap-y-6 mb-2 lg:mb-0 lg:gap-y-4 items-center">
          <h1 className="text-7xl sm:text-6xl md:text-5xl font-bold text-white text-left">
            Our Mission.
          </h1>
          <p className="w-full text-gray-400 font-extralight md:font-normal text-justify text-4xl lg:text-3xl xl:text-base">
            At Mailbooth, our mission is to make courier services more
            accessible and hassle-free for everyone. By partnering with grocery
            stores across India and Canada, we're bringing our innovative mail
            booths right to your neighborhood, making it easier than ever to
            send your parcels securely and swiftly.
          </p>
          <Button
            text="Explore More"
            classes={
              "w-[40%] lg:w-fit lg:px-6 text-6xl py-4 lg:text-3xl xl:text-base mt-6"
            }
          />
        </div>
      </div>

      {/* 3rd Section */}
      <div className="w-full h-fit flex flex-col items-center justify-center gap-y-8 bg-background relative pt-20 px-24">
        <h1 className="text-7xl lg:text-6xl font-bold text-white text-center">
          How It Works ?
        </h1>
        <Button
          text="Get More Details"
          classes={
            "w-74 mt-8 text-5xl px-8 lg:text-3xl h-fit py-6 lg:py-4 w-fit"
          }
        />
        <div className="flex items-start justify-center space-x-8 py-8 xl:py-16 z-[2] ">
          {howItWorksData.map((item, idx) => (
            <div
              key={idx}
              className="w-[20rem] flex flex-col items-center gap-y-4"
            >
              <div className="w-42 h-42 bg-gray flex items-center justify-center">
                <Image src={`/${item.image}`} width={120} height={120} />
              </div>
              <div className="flex items-center flex-col">
                <h2 className="text-2xl font-medium">{item.title}</h2>
                <p className="text-md text-center">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="curve absolute bottom-0 bg-white w-[115%] h-[14rem] rounded-t-full"></div>
      </div>

      {/* 4th Section */}
      <div
        className="w-full min-h-screen flex flex-col items-center justify-center bg-white relative text-white"
        style={{
          backgroundImage:
            "url(https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/young-asian-male-courier-with-thermo-bag-wearing-f-2021-09-03-20-53-03-utc-copy.jpg) center no-repeat cover",
        }}
      >
        <div className="tint absolute top-0 left-0 w-full h-full bg-background opacity-80"></div>
        <div className="z-[2] w-fit h-full flex flex-col items-center justify-center py-12">
          <h1 className="text-6xl lg:text-4xl font-extrabold text-center my-12">
            Why Choose MailBooth ?
          </h1>
          <div className="w-full flex items-center justify-center flex-col lg:flex-row gap-y-20 gap-x-8 z-2 px-20 mt-10">
            {whyUsData.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start relative gap-y-4 x-6 bg-background px-4 py-[3rem] w-full md:w-[70%] lg:w-[45%] h-[100%] lg:h-[18rem]"
              >
                <div
                  className="w-[6rem] h-[6rem] absolute bg-gray flex items-center justify-center bg-red-500"
                  style={{ top: "-3rem" }}
                >
                  image
                </div>
                <h2 className="text-5xl md:text-4xl font-medium mt-4">
                  {item.title}
                </h2>
                <p className="text-4xl font-extralight lg:font-normal lg:text-2xl">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center flex-col lg:flex-row justify-center gap-y-20 gap-x-8 z-2 px-20 mt-20">
            {whyUsData.slice(2, 4).map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start relative gap-y-4 x-6 bg-background px-4 py-[3rem] w-full md:w-[70%] lg:w-[45%] h-full lg:h-[18rem]"
              >
                <div
                  className="w-[6rem] h-[6rem] absolute bg-gray flex px-4 items-center justify-center bg-red-500"
                  style={{ top: "-3rem" }}
                >
                  image
                </div>
                <h2 className="text-5xl md:text-4xl font-medium mt-4">
                  {item.title}
                </h2>
                <p className=" text-4xl font-extralight lg:font-normal lg:text-2xl">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6th Section */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white relative py-20 overflow-x-none">
        <div className="curve absolute top-0 bg-background w-[115%] h-[60vh] rounded-b-full"></div>
        <div className="z-[2] w-full flex flex-col items-center gap-y-2 md:gap-y-0">
          <h1 className=" text-7xl lg:text-4xl font-bold lg:font-extrabold text-center text-white">
            Our Partnerships
          </h1>
          <Button
            text="Learn More ..."
            classes={"w-fit mt-4 px-8  lg:px-4 text-6xl lg:text-2xl"}
          />
        </div>
        <div className="flex items-center justify-center space-x-8 mt-12 z-[2] px-20 overflow-x">
          <div className="flex flex-col items-center px-6 bg-white rounded-xl pb-8 border border-background">
            <Image
              src={partnersData[0].logo}
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
            <h2 className="text-5xl lg:text-3xl font-medium my-4">
              {partnersData[0].name}
            </h2>
            <h2 className="text-gray-500 text-3xl lg:text-xl font-medium">
              {partnersData[0].info}
            </h2>
            <p className="text-3xl lg:text-xl text-center mt-4">
              {partnersData[0].content}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
