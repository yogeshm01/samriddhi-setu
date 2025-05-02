import { useState } from 'react'
import { FaEllipsisV, FaRegThumbsUp, FaRegComment, FaShare } from 'react-icons/fa'
import ImageGallery from '../ImageGallery/ImageGallery'
import './Post.css'

const Post = ({ post }) => {
  const [showFullContent, setShowFullContent] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [upvoted, setUpvoted] = useState(false)
  const [downvoted, setDownvoted] = useState(false)
  const [upvotes, setUpvotes] = useState(post.upvotes || 10)
  const [downvotes, setDownvotes] = useState(post.downvotes || 9)
  
  const isContentLong = post.content.length > 150
  const displayContent = showFullContent ? post.content : `${post.content.slice(0, 150)}${isContentLong ? '...' : ''}`
  
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  
  const handleUpvote = () => {
    if (upvoted) {
      setUpvotes(upvotes - 1)
      setUpvoted(false)
    } else {
      setUpvotes(upvotes + 1)
      setUpvoted(true)
      
      if (downvoted) {
        setDownvotes(downvotes - 1)
        setDownvoted(false)
      }
    }
  }
  
  const handleDownvote = () => {
    if (downvoted) {
      setDownvotes(downvotes - 1)
      setDownvoted(false)
    } else {
      setDownvotes(downvotes + 1)
      setDownvoted(true)
      
      if (upvoted) {
        setUpvotes(upvotes - 1)
        setUpvoted(false)
      }
    }
  }
  
  const handleShare = () => {
    alert('Sharing this post!')
  }
  
  return (
    <article className="post">
      <div className="post-header">
        <div className="post-user">
          <div className="post-avatar">
            <img src={post.user.avatar} alt={post.user.name} />
          </div>
          <div className="post-user-info">
            <h3 className="post-username">{post.user.name}</h3>
            <p className="post-user-handle">@{post.user.handle}</p>
          </div>
        </div>
        
        <div className="post-menu-container">
          <button 
            className="post-menu-button"
            onClick={toggleMenu}
            aria-label="Post menu"
          >
            <FaEllipsisV />
          </button>
          
          {showMenu && (
            <div className="post-menu">
              <button>Report Post</button>
              <button>Mute User</button>
              <button>Block User</button>
            </div>
          )}
        </div>
      </div>
      
      <div className="post-content">
        <h4 className="post-title">{post.title}</h4>
        <p className="post-text">{displayContent}</p>
        
        {isContentLong && (
          <button 
            className="show-more-button"
            onClick={() => setShowFullContent(!showFullContent)}
          >
            {showFullContent ? 'Show less' : 'more'}
          </button>
        )}
      </div>
      
      {post.images && post.images.length > 0 && (
        <ImageGallery images={post.images} />
      )}
      
      <div className="post-actions">
        <div className="post-action">
          <button 
            className={`post-action-button ${upvoted ? 'active' : ''}`}
            onClick={handleUpvote}
            aria-label="Upvote"
          >
            <FaRegThumbsUp />
            <span>{upvotes}</span>
          </button>
        </div>
        
        <div className="post-action">
          <button 
            className={`post-action-button ${downvoted ? 'active' : ''}`}
            onClick={handleDownvote}
            aria-label="Downvote"
          >
            <FaRegThumbsUp className="downvote-icon" />
            <span>{downvotes}</span>
          </button>
        </div>
        
        <div className="post-action">
          <button 
            className="post-action-button"
            aria-label="Comments"
          >
            <FaRegComment />
            <span>{post.comments} Comments</span>
          </button>
        </div>
        
        <div className="post-action">
          <button 
            className="post-action-button"
            onClick={handleShare}
            aria-label="Share"
          >
            <FaShare />
            <span>Share</span>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Post