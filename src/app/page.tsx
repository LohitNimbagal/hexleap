"use client"

import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardContent, CardText, CardWrapper } from "@/components/ui/Card";
import Image from 'next/image'

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

export default function Home() {

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
    <>
      <button onClick={handleClick} className="absolute top-5 right-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20' fill="currentColor"><path d="M7.94101 18C7.64391 16.7274 6.30412 15.6857 5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.6944 15.687 16.3558 16.7276 16.059 18H7.94101ZM16 20V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V20H16ZM13 10.0048V6L8.5 12.0048H11V16.0048L15.5 10.0048H13Z"></path></svg>
      </button>

      <section className="w-full min-h-screen flex items-center justify-center">

        <div className="w-full h-screen lg:w-[1249px] lg:h-[673px] p-1 flex flex-col justify-between ">

          <h2 className="w-fit font-bold text-[24px] border-b-[#738FFF] border-b-[2px]">Sports</h2>

          <CardWrapper className="justify-between gap-5">
            {CardInfo.map((card, index) => (
              <Card className='space-y-[10px]' key={"card" + index} intent={card.info && 'adv'}>
                <Image
                  priority
                  src={card.imageSrc}
                  width={218}
                  height={385}
                  alt="Picture of the author"
                />

                {card.title &&
                  <CardTitle>{card.title}</CardTitle>
                }

                {card.description ?

                  <CardContent>
                    <CardText>
                      Total Events <br /> <span className="font-bold text-black dark:text-white dark: text-[14px]">{card.description?.events} Events</span>
                    </CardText>
                    <CardText>
                      Sports <br /> <span className="font-bold text-[14px] text-black dark:text-white">{card.description?.sport}</span>
                    </CardText>
                  </CardContent>

                  :

                  <CardContent intent="adv">
                    <CardTitle className="font-semibold">{card.info?.title}
                    </CardTitle>
                    <CardText className="font-normal text-start">
                      {card.info?.description}
                    </CardText>
                  </CardContent >

                }
              </Card>
            ))}
          </CardWrapper >
          <div className="w-full flex justify-center">
            <Button intent="primary" size="small">See More</Button>
          </div>

        </div>
      </section>

      <section className="w-full min-h-full relative flex items-center justify-center lg:py-5">

        <div className="h-[918px] w-[1240px] space-y-12 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C] overflow-hidden relative">

          <Button intent="icon" size="right" className="hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2C9CF0" width="20" height="20"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
          </Button >

          <Button intent="icon" size="left" className="hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2C9CF0" width="20" height="20" ><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg>
          </Button >

          <div className="w-full text-center flex flex-col items-center lg:space-y-5">
            <h2 className="font-bold text-3xl lg:text-[50px]">Collection Spotlight</h2>

            <h3 className="hidden lg:block lg:text-[14px] w-[917px] px-2">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</h3>
          </div>

          <CardWrapper className="gap-24 px-10 lg:items-center lg:justify-center lg:gap-10">

            {CollectionCardInfo.map((card, index) => (
              <Card intent="collection" key={card.title + index}>
                <Image
                  width={250}
                  height={400}
                  src={card.imageSrc}
                  alt="Picture of the author"
                />

                <div className='space-y-[20px] flex flex-col items-center border-t border-dashed border-[#A9ACB2] dark:border-[#818A97]'>

                  <CardContent intent="collection">

                    <CardTitle className="text-center">
                      {card.title}
                    </CardTitle>
                    <CardText>
                      {card.date}
                    </CardText>
                    <CardText>
                      {card.location}
                    </CardText>

                  </CardContent>

                  <Button intent={"secondary"} size={"large"}>Take Flight Collection</Button>
                </div>
              </Card>
            ))}
          </CardWrapper>
        </div>

      </section>
    </>
  );
}