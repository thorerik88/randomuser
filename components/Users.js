import styles from '../styles/components/Users.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { load, remove, save } from '../storage/storage';
import { key } from './constants/constants';

const Users = ({ ...users }) => {

  let existingNames = load(key);

  const toggleFavs = (name) => {

    let favList = [];

    if (load(key) === null || load(key).length === 0) {
      favList.push(name)
    } else {
      const filteredNames = existingNames.filter((item) => item === name)
      
      if (filteredNames.length === 0) {
        existingNames.push(name)
        favList = existingNames
      } else {
        favList = existingNames
      }
    }
    save(key, favList)
  }

  let list = users.users.results;
  

  const profileClick = (username, country, city, postcode, state, regDate, id, email ) => {
    console.log(username, country, city, postcode, state, regDate, id, email)
  }
  
  return (
    <>
      <h1>Users</h1>
      <div className={styles.wrapper}>
        {list.map(item => {
          return (
            <div className={styles.personBox} key={item.login.uuid} onClick={() => profileClick(item.login.username, 
                                                                                                item.location.country, 
                                                                                                item.location.city, 
                                                                                                item.location.postcode, 
                                                                                                item.location.state, 
                                                                                                item.dob.date, 
                                                                                                item.registered.date, 
                                                                                                item.login.uuid, 
                                                                                                item.email  )}>

              <FontAwesomeIcon className={styles.favIconActive} icon={faPlusCircle} onClick={() => toggleFavs(item.name.first + " " + item.name.last)} />
              <div className={styles.image}>
                <img src={item.picture.large} />
              </div>
              <div className={styles.personDetails}>
                <div className={styles.detailsHeading}>
                  <p>Name:</p>
                  <p>City:</p>
                  <p>Email:</p>
                  <p>Age:</p>
                </div>
                <div className={styles.detailsInfo}>
                  <p>{item.name.first + " " + item.name.last}</p>
                  <p>{item.location.city}</p>
                  <p>{item.email}</p>
                  <p>{item.dob.age}</p>
                </div>
              </div>
            </div>
          )
        })}
        

      </div>
    </>
  )
}

export default Users;