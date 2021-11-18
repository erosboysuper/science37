
import Filter from '../../components/Filter';
import Posts from '../../components/Posts';
import Search from '../../components/Search';
import React from 'react'
import './style.scss';

function Home() {
  return (

    <div className="tweet-feed__container">
      <header className="tweet-feed__header">
        <h1 className="tweet-feed__header-title">Tweet Feed</h1>
      </header>

      <main className="tweet-feed__main-area">
          <Search />
          <Posts/>
          <aside className="tweet-feed__sidebar">
            <Filter />
          </aside>
      </main>
    </div>


  );
}

export default Home;