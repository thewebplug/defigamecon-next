"use client"
import Header from "@/app/components/header";
import Explore from "@/app/components/explore";
import Footer from "@/app/components/footer";
import Highlights from "@/app/components/highlights";
import ImageGrid from "@/app/components/imageGrid";
import EventBanner from "@/app/components/eventBanner";
import React, { useEffect, useState } from "react";
import { getEvent } from "@/app/apis";
import { useParams } from "next/navigation";

export default function Event() {
    const {id} = useParams();

  const [event, setEvent] = useState(null);

  const handleGetEvent = async () => {
    const response = await getEvent(id);
    setEvent(response?.data);
  };

  useEffect(() => {
    handleGetEvent();
  }, []);

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
