import {useContext} from "react";
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import FaviouriteContext from "../../store/faviourites-context";

function MainNavigation() {
const favoritesCtx = useContext(FaviouriteContext)


  return <header  className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
    <nav>
        <ul>
            <li>
                <Link to="/">All Meetups</Link>
            </li>
            <li>
                <Link to="/faviorites">My Favourites
                
                <span className={classes.badge}>{favoritesCtx.totalFaviourites}</span>
                </Link>
            </li>
            <li>
                <Link to="/new-meetup">Add new meetup</Link>
            </li>
        </ul>
    </nav>
  </header>;
}

export default MainNavigation;
