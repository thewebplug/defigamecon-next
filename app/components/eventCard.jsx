import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EventCard ({event, past=false}) {
  const router = useRouter();

  return (
    <div className="event-card">
    <div className="event-card__group">
      <img src={event?.images[0]?.url} alt="" />
      <img src={event?.images[1]?.url} alt="" />
      <img src={event?.images[2]?.url} alt="" />
    </div>
    <img className="event-card__img" src={event?.images[3]?.url} alt="" />
    <div className="event-card__button-group">
      <div>{event?.title}</div>
      <Link href={past ? `/event/${event?._id}` : `/upcoming-event/${event?._id}`}>See more</Link>
    </div>
  </div>
  );
}
