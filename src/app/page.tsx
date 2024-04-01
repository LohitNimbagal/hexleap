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
        date: "OCT 15 ",
        location: "Las Vegas Ballpark, Las Vegas, Nevada"
      },
      {
        imageSrc: "/Collections/imageTwo.png",
        title: "Las Vegas Aviators",
        date: "OCT 15 ",
        location: "Las Vegas Ballpark, Las Vegas, Nevada"
      },
      {
        imageSrc: "/Collections/imageThree.png",
        title: "Las Vegas Aviators",
        date: "OCT 15 ",
        location: "Las Vegas Ballpark, Las Vegas, Nevada"
      },
    ]

  return (
    <main className="min-h-screen px-[98px] py-[48px] flex flex-col items-center space-y-10 bg-[#F7F7F8]">
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

              <h3 className='text-[17px] text-black font-medium'>
                {card.title}
              </h3>

              {card.description ?

                <div className="w-[218.4px] h-[54px] flex items-start gap-[40px] p-[10px] bg-[#F7F7F8]">
                  <p className="text-[12px] text-[#525965]">
                    Total Events <br /> <span className="font-bold text-black text-[14px]">{card.description?.events} Events</span>
                  </p>
                  <p className="text-[12px] text-[#525965]">
                    Sports <br /> <span className="font-bold text-black text-[14px]">{card.description?.sport}</span>
                  </p>
                </div>

                :

                <div className="px-[15px] space-y-3">
                  <h3 className="text-[#222D3A] text-[20px] font-semibold">{card.info?.title}</h3>
                  <p className="font-normal text-[#525965] text-[13px] text-start">
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

      <section className="w-[1249px] min-h-[673px] p-1 flex flex-col items-center text-center bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]">
        <div className="w-full flex flex-col items-center">
          <h2 className="font-bold text-[50px]">Collection Spotlight</h2>

          <h3 className="text-[14px] w-[917px] px-2">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</h3>
        </div>

        <div className="h-[625px] w-[850px] flex my-10 justify-between">
          {CollectionCardInfo.map((card, index) => (
            <Card intent="collection" className='divide-y-2 divide-dashed divide-[#A9ACB2]' key={card.title + index}>
              <Image
                width={250}
                height={400}
                src={card.imageSrc}
                alt="Picture of the author"
              />

              <div className='space-y-[20px] flex flex-col items-center'>
                <div className="w-[213px] h-[100.66px] flex flex-col items-center justify-between font-normal text-[14px] space-y-[5px] overflow-hidden text-center mt-[20px]">

                  <div className="bg-gradient-to-l from-[#E1E6EB] from-5% to-[#EBEFF4] z-10 rounded-full w-[20px] h-[20px] absolute bottom-[195px] left-[-10px]" />
                  <div className="bg-gradient-to-r from-[#E1E6EB] from-5% to-[#EBEFF4] z-10 rounded-full w-[20px] h-[20px] absolute bottom-[195px] right-[-10px]" />


                  <h3 className="text-center text-[17px] font-medium text-black">
                    {card.title}
                  </h3>
                  <p className="">
                    {card.date}
                  </p>
                  <p className='text-[#525965]'>
                    {card.location}
                  </p>

                </div>

                <Button intent={"secondary"} size={"large"} className='text-[12px]'>Take Flight Collection</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </main >
  );
}