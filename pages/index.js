import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";


function HomePage() {
    const featuredEvents = getFeaturedEvents();

  return (
    <>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </>
  );
}

export default HomePage;
