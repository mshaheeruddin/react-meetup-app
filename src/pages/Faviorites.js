import { useContext } from "react";
import FaviouriteContext from "../store/faviourites-context";
import MeetupList from "../components/layout/meetups/MeetupList";

function Faviorites() {
  const favouriteCtx = useContext(FaviouriteContext);

  let content;

  if (favouriteCtx.totalFaviourites === 0) {
    content = <p>You got no favourites yet, start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.faviourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      <MeetupList meetups={favouriteCtx.faviourites} />
    </section>
  );
}

export default Faviorites;
