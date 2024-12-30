"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EventCard from "../components/eventCard";

function SearchResults({ auth }) {
  const [events, setEvents] = useState([]);
  const searchParams = useSearchParams();
  const query = Object.fromEntries(searchParams.entries());
  const event = query?.event;

  const handleGetEvents = async () => {
    const response = await getAllEvents(auth?.token);
    console.log("getAllEvents", response?.data[0]?.title, event);
    if(response?.status === 200) {
      setEvents(response?.data?.filter((item) => 
        item?.title?.toLowerCase()?.includes(event) || 
        item?.venue?.toLowerCase()?.includes(event) || 
        item?.description?.toLowerCase()?.includes(event) || 
        item?.categories?.includes(event)
      ));
    }
  };

  useEffect(() => {
    handleGetEvents();
  }, [event]);

  return (
    <div className="events__grid">
      {events?.map((event) => (
        <EventCard event={event} key={event?._id} />
      ))}
    </div>
  );
}

// Main component
export default function Events() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <br />
      <br />
      <Header />
      <main className="events">
        <div className="events__title">Search results</div>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchResults auth={auth} />
        </Suspense>
      </main>
      <Explore />
      <Footer />
    </>
  );
}