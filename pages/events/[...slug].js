import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";
import ResultTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {
  const router = useRouter();

  const slugData = router.query.slug;

  if (!slugData) {
    return <p className="center">Loading...</p>;
  }

  const filterYear = slugData[0];
  const filterMonth = slugData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2010 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center"> 잘못된 접근 </p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </>
    );
  }

  const dataFilter = {
    year: numYear,
    month: numMonth,
  };

  const filterData = getFilteredEvents(dataFilter);

  if (!filterData || filterData.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>데이터가 없어용</p>
        </ErrorAlert>
        <Button link="/events">show all events</Button>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultTitle date={date} />
      <EventList items={filterData} />
    </>
  );
}

export default FilteredEventsPage;
