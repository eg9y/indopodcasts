import PodcastDetail from '../PodcastDetail/PodcastDetail'

export const QUERY = gql`
  query FindPodcastDetailQuery($name: String!) {
    podcast(name: $name) {
      name
      description
      image_url
      genres
      rss
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ podcast, pickEpisode }) => {
  return <PodcastDetail podcast={podcast} pickEpisode={pickEpisode} />
}
