import styles from '../styles/components/buttons.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { PageContext } from './context/context';

const UserNav = () => {

  let {page, setPage} = useContext(PageContext)

  return (
    <div className={styles.buttons}>
      <FontAwesomeIcon className={styles.favIcon} icon={faCircleChevronLeft} />
      <FontAwesomeIcon className={styles.favIcon} icon={faCircleChevronRight} />
    </div>
  )
}

export default UserNav;