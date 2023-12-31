import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";



function NewMeetup() {

  const history = useHistory();


  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-app-19819-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    } ) 
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
