import React from 'react'
import RepoList from '../RepoList/RepoList'
import FavoriteList from '../FavoriteList/FavoriteList'
import SearchInput from '../SearchInput/SearchInput'

const Home = () => {
  return (
    <div>
      <RepoList />
      <FavoriteList />
      <SearchInput />
    </div>
  )
}

export default Home
