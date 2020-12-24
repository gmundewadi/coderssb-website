import FutureEventCard from "./FutureEventCard";
import { events } from "../../utils/events";
import "../../css/FutureEventCardStyle.css";

function DateConv(dateObj) {
  return (
    "" +
    (dateObj.getMonth() + 1) +
    "/" +
    dateObj.getDate() +
    "/" +
    dateObj.getFullYear() +
    " @ " +
    (dateObj.getHours() - 12) +
    "PM"
  );
}

export default function Events() {
  return (
    <div>
      <div className="all">
        <FutureEventCard
          website={events[2].url}
          imgUrl={events[2].pic}
          altImgUrl={events[2].alt}
          when={DateConv(events[2].start)}
          info={events[2].info}
        />

        <FutureEventCard
          website={events[4].url}
          imgUrl={events[4].pic}
          altImgUrl={events[4].alt}
          when={DateConv(events[4].start)}
          info={events[4].info}
        />

        <FutureEventCard
          website={events[5].url}
          imgUrl={events[5].pic}
          altImgUrl={events[5].alt}
          when={DateConv(events[5].start)}
          info={events[5].info}
        />
      </div>
    </div>
  );
}
