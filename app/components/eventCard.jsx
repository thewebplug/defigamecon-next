import Link from "next/link";
import { useRouter } from "next/navigation";
import OptimizedImage from "./optimizedImage";

export default function EventCard({ event, past = false }) {
  const router = useRouter();

  return (
    <div className="event-card">
      <div className="event-card__group">
        <div>
          <OptimizedImage
            src={event?.images[0]?.url}
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div>
          <OptimizedImage
            src={event?.images[1]?.url}
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div>
          <OptimizedImage
            src={event?.images[2]?.url}
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <div className="event-card__img">
        <OptimizedImage
          src={event?.images[3]?.url}
          alt=""
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="event-card__button-group">
        <div>{event?.title}</div>
        <Link
          href={past ? `/event/${event?._id}` : `/upcoming-event/${event?._id}`}
        >
          See more
        </Link>
      </div>
    </div>
  );
}
