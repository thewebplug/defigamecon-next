import Header from "../components/header";
import Explore from "../components/explore";
import Footer from "../components/footer";
import EventCard from "../components/eventCard";
import { getAllEvents } from "../apis";




export async function generateMetadata() {
  return {
    title: "Events",
    description: "Keep track of our upcoming and past events",
  };
}

async function getEvents() {
  const events = await getAllEvents();
  
  return events || [];
}

export default async function Events() {
  const [events] = await Promise.all([getEvents()]);

  return (
    <>
      <br />
      <br />
      <Header />
      <main className="events">
        <div className="events__grid">
          {events?.map((event) => (
            <EventCard event={event} key={event?._id} />
          ))}
        </div>
      </main>
      <Explore />
      <Footer />
    </>
  );
}