import NavBar from '../components/NavBar'
import UsersList from '../components/UsersList'
import { load } from '../storage/storage'
import { key } from '../components/constants/constants'
import { FavContext, PageContext } from '../components/context/context'
import { useEffect, useState } from 'react'

export const BASE_URL = "https://randomuser.me/api?seed=00000&page=";
export const PAGE = "1";
export const RESULTS = "&results=10";

export const getStaticProps = async () => {

  const response = await fetch(BASE_URL + PAGE + RESULTS);
  const data = await response.json();

  return {
      props: { users: data }
  }
}

export default function Home(users) {  

  console.log(users.users.results)

  const fav = load(key)

  return (
    <>
      <NavBar />
      <FavContext.Provider value={fav}>
        <PageContext.Provider value={{...users}}>
          <UsersList {...users} />
        </PageContext.Provider>
      </FavContext.Provider>
    </>
)}
