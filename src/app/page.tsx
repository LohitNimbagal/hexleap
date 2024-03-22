import { Button } from "@/components/ui/Button";
import { Card, CardImage, CardTitle, CardDescription, CardContent, CollectionCard } from "@/components/ui/Card";
import Image from 'next/image'

export default function Home() {

  const CardInfo: {
    imageSrc: string;
    title: string;
    description?: {
      events: string;
      sport: string;
    };
    info?: string;
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
        title: "Advertisement title",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
            <Card key={card.title + index} className={card.info ? 'justify-start' : ""}>
              <CardImage>
                <Image
                  priority
                  src={card.imageSrc}
                  width={218}
                  height={385}
                  alt="Picture of the author"
                />
              </CardImage>
              <CardTitle>
                {card.title}
              </CardTitle>
              {card.description &&
                <CardContent className="flex items-center justify-between px-5">
                  <>
                    <CardDescription className="">
                      Total Events <br /> <span className="font-bold">{card.description?.events} Events</span>
                    </CardDescription>
                    <CardDescription className="">
                      Sport <br /> <span className="font-bold">{card.description?.sport}</span>
                    </CardDescription>
                  </>
                </CardContent>
              }
              {card.info &&
                <>
                  <CardDescription className="px-2">
                    {card.info}
                  </CardDescription>
                </>
              }
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Button>See More</Button>
        </div>
      </section>

      <section className="w-[1249px] min-h-[673px] p-1 flex flex-col items-center text-center bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]">
        <div className="w-full flex flex-col items-center">
          <h2 className="font-bold text-[50px]">Collection Spotlight</h2>

          <h3 className="text-[14px] w-[917px] px-2">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</h3>
        </div>

        <div className="h-[625px] w-[850px] flex my-10 justify-evenly">
          {CollectionCardInfo.map((card, index) => (
            <CollectionCard key={card.title + index} className="border-[#A9ACB2] shadow-2xl">
              <CardImage className="">
                <Image
                  priority
                  src={card.imageSrc}
                  width={226.1}
                  height={401.25}
                  alt="Picture of the author"
                />

                <div className="w-[180px] border-[#D9D9D9] border-dashed border-b relative flex">
                  <div className="absolute rounded-full w-5 h-5 bg-[#D9D9D9] -mt-2 -left-12 shadow-2xl"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-[#D9D9D9] -mt-2 -right-12 shadow-2xl"></div>
                </div>
              </CardImage>


              <CardTitle className="text-center text-lg">
                {card.title}
              </CardTitle>

              <CardContent className="flex flex-col items-center justify-between px-5">
                <>
                  <CardDescription className="my-2">
                    {card.date}
                  </CardDescription>
                  <CardDescription>
                    {card.location}
                  </CardDescription>
                </>
              </CardContent>

              <Button className="bg-black w-full mt-8">Take Flight Collection</Button>

            </CollectionCard>
          ))}
        </div>
      </section>

    </main >
  );
}