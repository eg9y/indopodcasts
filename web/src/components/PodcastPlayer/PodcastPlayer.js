import ReactJkMusicPlayer from 'react-jinke-music-player'

// import '/dist/static/css/app.7915b259.css'

const PodcastPlayer = ({ trackTitle, trackArtist, streamUrl, image }) => {
  const audioList1 = [
    {
      name: trackTitle,
      singer: trackArtist,
      cover: image,
      musicSrc: streamUrl,
      // support async fetch music src. eg.
      // musicSrc: async () => {
      //   return await fetch('/api')
      // },
    },
  ]
  return <ReactJkMusicPlayer mode="full" theme="auto" audioLists={audioList1} />
}
export default PodcastPlayer
