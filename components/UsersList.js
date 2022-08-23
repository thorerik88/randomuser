import styles from '../styles/components/UsersList.module.scss'

import Users from './Users';
import Favorites from './Favorites';
import UserNav from './UserNav';

const UsersList = ({ ...users }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Users {...users}/>
        <UserNav />
      </div>
      <div className={styles.wrapper}>
        <Favorites />
      </div>
    </div>
  )
}

export default UsersList;