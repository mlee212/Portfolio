// Full Credit to Lee Robinson

import useSWR from 'swr'

import fetcher from '../lib/fetcher'
import Track from './Track'
import Loader from './TrackLoader'

export default function TopTracks() {
  const { data } = useSWR('/api/top-tracks', fetcher)

  if (!data) {
    return <Loader show />
  } else
    return data.tracks.map((track, index) => (
      <Track ranking={index + 1} key={track.songUrl} {...track} />
    ))
}
