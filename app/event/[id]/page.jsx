import Header from "@/app/components/header";
import Explore from "@/app/components/explore";
import Footer from "@/app/components/footer";
import Highlights from "@/app/components/highlights";
import ImageGrid from "@/app/components/imageGrid";
import EventBanner from "@/app/components/eventBanner";
import { getEvent } from "@/app/apis";

async function fetchEvent(id) {
  const event = await getEvent(id);
  return event;
}

export default async function Event({ params }) {
  const { id } = params; 
    const event = await fetchEvent(id); // Fetch event data

  return (
    <>
      <br />
      <br />
      <Header />
      <main className="event">
        <div className="event__title">
          {event?.title?.split(" ")[0] && (
            <span>
              {event?.title?.split(" ")[0]}{" "}
              {event?.categories[0] && (
                <div className="event__pill">{event?.categories[0]}</div>
              )}{" "}
              {event?.categories[1] && (
                <div className="event__pill">{event?.categories[1]}</div>
              )}
            </span>
          )}{" "}
          {event?.title?.split(" ")[1] && (
            <span>
              {event?.title?.split(" ")[1]}{" "}
              {event?.categories[2] && (
                <div className="event__pill">{event?.categories[2]}</div>
              )}{" "}
              {event?.categories[3] && (
                <div className="event__pill">{event?.categories[3]}</div>
              )}
            </span>
          )}{" "}
          {event?.title?.split(" ")[2] && (
            <span>
              {event?.title?.split(" ")[2]}{" "}
              {event?.categories[4] && (
                <div className="event__pill">{event?.categories[4]}</div>
              )}
            </span>
          )}
        </div>

        <div className="event__subtitle">
          {event?.description}
        </div>
      

        <EventBanner image={event?.banner} />

        <div className="event__past">
          <ImageGrid images={event?.images} />
        </div>
        <Highlights videos={event?.videos} />
      </main>

      <Explore />
      <Footer />
    </>
  );
}
