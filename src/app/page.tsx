import { Button } from "@/components/ui/Button";
import { Card, CardImage, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
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

  return (
    <main className="h-screen px-[98px] py-[48px] flex flex-col items-center">
      <div className="w-full min-h-full p-1">
        <h2 className="w-fit font-bold text-[24px] border-b-[#738FFF] border-b-[2px]">Sports</h2>

        <div className="flex gap-[14px] my-10">
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
          ))

          }
          {/* <Card>
            <h1>hi</h1>
          </Card>
          <Card>
            <h1>hi</h1>
          </Card>
          <Card>
            <h1>hi</h1>
          </Card>
          <Card>
            <h1>Add</h1>
          </Card> */}
        </div>
      </div>

      <Button>See More</Button>
    </main >
  );
}