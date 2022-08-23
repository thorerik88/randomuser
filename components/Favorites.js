import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useContext, useEffect, useState } from 'react';
import { load, save } from '../storage/storage';
import styles from '../styles/components/Favorites.module.scss'
import { key } from './constants/constants';
import { FavContext, PageContext } from './context/context';

const Favorites = () => {

  let favList = useContext(FavContext)

  const [list, setList] = useState([])

  const {page, setPage} = useContext(PageContext);


  useEffect(() => {
    setList(favList)
  }, favList)

  const deleteFav = (name) => {
    let filtered = favList.filter(item => item !== name);
    setList(filtered);
    console.log(filtered)
    save(key, filtered)
  }
  

  return (
    <>
    <h1>Favorites</h1>
      <div className={styles.wrapper}>
        <div className={styles.favHeading}>
          <p>Name</p>
        </div>
        <div className={styles.favPerson}>
          {!list || list.length === 0 ? 
            <div className={styles.favContent}>
              <p>No favs stored</p>
            </div>
            : list.map((item, i) => {
              return (
                <div className={styles.favContent} key={i}>
                  <FontAwesomeIcon className={styles.favIcon} icon={faTrash} onClick={() => deleteFav(item)} />
                  <p>{item}</p>
                </div>
              )
            })
          }
        </div>
      </div></>
  )
}

export default Favorites;