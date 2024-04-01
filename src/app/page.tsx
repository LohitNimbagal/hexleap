"use client"

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from 'next/image'

export default function Home() {

  const CardInfo: {
    imageSrc: string;
    title?: string;
    description?: {
      events: string;
      sport: string;
    };
    info?: {
      title: string;
      description: string;
    };
  }[] = [
      {
        imageSrc: "/imageOne.png",
        title: "Sacramento River Cats",
        description: {
          events: "48",
          sport: "BaseBall"
        }
      },
      {
        imageSrc: "/imageTwo.png",
        title: "Las Vegas Aviators",
        description: {
          events: "28",
          sport: "BaseBall"
        }
      },
      {
        imageSrc: "/imageThree.png",
        title: "New jersey devils",
        description: {
          events: "18",
          sport: "Ice Hockey"
        }
      },
      {
        imageSrc: "/imageTwo.png",
        title: "Las Vegas Aviator",
        description: {
          events: "28",
          sport: "BaseBall"
        }
      },
      {
        imageSrc: "/imageAd.png",
        info: {
          title: "Advertisement title",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        // description: {
        //   events: "28",
        //   sport: "BaseBall"
        // }
      },

    ]

  const CollectionCardInfo: {
    imageSrc: string;
    title: string;
    date: string;
    location: string;
  }[] = [
      {
        imageSrc: "/Collections/imageOne.png",
        title: "Las Vegas Aviators",
        date: "OCT 15 | SUN | 4:30 PM",
        location: "Las Vegas Ballpark, Las Vegas, Nevada"
      },
      {
        imageSrc: "/Collections/imageTwo.png",
        title: "Las Vegas Aviators",
        date: "OCT 15 | SUN | 4:30 PM",
        location: "Las Vegas Ballpark, Las Vegas, Nevada"
      },
      {
        imageSrc: "/Collections/imageThree.png",
        title: "Las Vegas Aviators",
        date: "OCT 15 | SUN | 4:30 PM",
        location: "Las Vegas Ballpark, Las Vegas, Nevada"
      },
    ]

  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  return (
    <main className="min-h-screen px-[98px] py-[48px] flex flex-col items-center space-y-10 bg-[#F7F7F8] dark:bg-[#292B32] dark:text-white relative">

      <button onClick={handleClick} className="absolute top-5 right-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="currentColor"><path d="M7.94101 18C7.64391 16.7274 6.30412 15.6857 5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.6944 15.687 16.3558 16.7276 16.059 18H7.94101ZM16 20V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V20H16ZM13 10.0048V6L8.5 12.0048H11V16.0048L15.5 10.0048H13Z"></path></svg>
      </button>

      <section className="w-[1249px] min-h-[673px] p-1">
        <h2 className="w-fit font-bold text-[24px] border-b-[#738FFF] border-b-[2px]">Sports</h2>

        <div className="flex my-10 justify-evenly">
          {CardInfo.map((card, index) => (
            <Card className=' space-y-[10px]' key={"card" + index}>
              <Image
                priority
                src={card.imageSrc}
                width={218}
                height={385}
                alt="Picture of the author"
              />

              {card.title &&
                <h3 className='text-[17px] font-medium'>
                  {card.title}
                </h3>
              }

              {card.description ?

                <div className="w-[218.4px] h-[54px] flex items-start gap-[40px] p-[10px] bg-[#F7F7F8] dark:bg-[#292B32]">
                  <p className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                    Total Events <br /> <span className="font-bold text-black dark:text-white dark: text-[14px]">{card.description?.events} Events</span>
                  </p>
                  <p className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                    Sports <br /> <span className="font-bold text-[14px] text-black dark:text-white">{card.description?.sport}</span>
                  </p>
                </div>

                :

                <div className="px-[15px] space-y-3 pt-3">
                  <h3 className="text-[#222D3A] dark:text-white text-[20px] font-semibold">{card.info?.title}</h3>
                  <p className="font-normal text-[#525965] dark:text-[#DFDFDF] text-[13px] text-start">
                    {card.info?.description}
                  </p>
                </div>

              }
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Button intent="primary" size="small">See More</Button>
        </div>
      </section>

      <section className="w-[1249px] min-h-[673px] p-1 flex flex-col items-center text-center bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] relative">

        <Button intent="icon" size="right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2C9CF0" width="20px" height="20"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
        </Button >

        <Button intent="icon" size="left">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2C9CF0" width="20" height="20" ><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
        </Button >


        <div className="w-full flex flex-col items-center">
          <h2 className="font-bold text-[50px]">Collection Spotlight</h2>

          <h3 className="text-[14px] w-[917px] px-2">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</h3>
        </div>

        <div className="h-[625px] w-[850px] flex my-10 justify-between ">

          {CollectionCardInfo.map((card, index) => (
            <Card intent="collection" className='divide-y-2 divide-dashed divide-[#A9ACB2] dark:divide-[#818A97]' key={card.title + index}>
              <Image
                width={250}
                height={400}
                src={card.imageSrc}
                alt="Picture of the author"
              />

              <div className='space-y-[20px] flex flex-col items-center'>
                <div className="w-[213px] h-[100.66px] flex flex-col items-center justify-between font-normal text-[14px] space-y-[5px] overflow-hidden text-center mt-[20px]">

                  <div className="bg-gradient-to-l from-[#E1E6EB] from-5% to-[#EBEFF4] dark:from-[#1D1D28] dark:to-[#1E1E2B]  z-10 rounded-full w-[20px] h-[20px] absolute bottom-[195px] left-[-10px]" />
                  <div className="bg-gradient-to-r from-[#E1E6EB] from-5% to-[#EBEFF4] dark:from-[#1D1D28] dark:to-[#1E1E2B]  z-10 rounded-full w-[20px] h-[20px] absolute bottom-[195px] right-[-10px]" />


                  <h3 className="text-center text-[17px] font-medium text-black dark:text-white">
                    {card.title}
                  </h3>
                  <p className="">
                    {card.date}
                  </p>
                  <p className='text-[#525965] dark:text-[#DFDFDF]'>
                    {card.location}
                  </p>

                </div>

                <Button intent={"secondary"} size={"large"} >Take Flight Collection</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </main >
  );
}