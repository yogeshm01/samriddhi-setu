import Post from '../Post/Post'
import { postData } from '../../data/posts'
import './PostsList.css'

const PostsList = ({ activeTab, searchQuery }) => {
  // Filter posts based on activeTab and searchQuery
  const filteredPosts = postData.filter(post => {
    // Filter by tab if not "All"
    const tabMatch = activeTab === 'All' || post.type === activeTab
    
    // Filter by search query if provided
    const searchMatch = !searchQuery || 
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.user.name.toLowerCase().includes(searchQuery.toLowerCase())
    
    return tabMatch && searchMatch
  })
  
  return (
    <div className="posts-list">
      {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <Post key={post.id} post={post} />
        ))
      ) : (
        <div className="no-posts">
          <p>No posts found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

export default PostsList