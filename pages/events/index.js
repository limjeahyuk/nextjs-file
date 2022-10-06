import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const event = getAllEvents();
  const router = useRouter();

  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventsSearch onSearch ={searchHandler} />

      <EventList items={event}></EventList>
    </>
  );
}

export default AllEventsPage;
