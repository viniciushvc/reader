import React, { useState, useEffect } from 'react'

import Parser from 'rss-parser'

import Card from '../../components/Card'
import Input from '../../components/Input'

export default function Home() {
  const [feedList, setFeedList] = useState([])
  const [feedUrl, setfeedUrl] = useState('https://tecnoblog.net/feed')

  useEffect(() => {
    async function getFeed() {
      const CORS = 'https://cors-anywhere.herokuapp.com/'
      let feed
      try {
        feed = await new Parser().parseURL(`${CORS}${feedUrl}`)
        setFeedList(feed.items)
      } catch (err) {}
    }

    getFeed()
  }, [feedUrl])

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          className="form-control"
          placeholder="Link do Feed"
          name="feedUrl"
          onChange={e => setfeedUrl(e.target.value)}
        />
      </form>

      <Card list={feedList} />
    </div>
  )
}
