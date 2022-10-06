import EventItem from "./EventItem";
import classes from './EventList.module.css'

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          id={item.id}
          title={item.title}
          key={item.id}
          location={item.location}
          date={item.date}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
