import { createContext, useState } from "react";

export const FaviouriteContext = createContext({
  faviourites: [],
  totalFaviourites: 0,
  addFaviourite: (faviouriteMeetup) => {},
  removeFaviourite: (meetupId) => {},
  itemIsFaviourite: (meetupId) => {}

});

export function FaviouritesContextProvider(props) {
  const [userFaviourites, setUserFaviourites] = useState([]);

  function addFaviouriteHandler(faviouriteMeetup) {
    setUserFaviourites((prevUserFaviourites) => {
        return prevUserFaviourites.concat(faviouriteMeetup)
    });
  }

  function removeFaviouriteHandler(meetupId) {
    setUserFaviourites((prevUserFaviourites) => {
              return prevUserFaviourites.filter(meetup => meetup.id !== meetupId)
    }
    );
  }
  function itemIsFaviouriteHandler(meetupId) {
    return userFaviourites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    faviourites: userFaviourites,
    totalFaviourites: userFaviourites.length,
    addFaviourite: addFaviouriteHandler,
    removeFaviourite: removeFaviouriteHandler,
    itemIsFaviourite: itemIsFaviouriteHandler

};

  return (
    <FaviouriteContext.Provider value={context}>
      {props.children}
    </FaviouriteContext.Provider>
  );
}


export default FaviouriteContext
