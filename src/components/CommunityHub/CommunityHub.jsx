import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import TabNavigation from '../TabNavigation/TabNavigation'
import PostsList from '../PostsList/PostsList'
import './CommunityHub.css'

const CommunityHub = ({ activeTab, setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const tabs = ['All', 'Discussion', 'News', 'Posts', 'Query', 'Job']
  
  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  
  return (
    <section className="community-hub">
      <div className="community-hub-container">
        <h2 className="community-hub-title">Community Hub</h2>
        
        <SearchBar onSearch={handleSearch} />
        
        <TabNavigation 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <PostsList activeTab={activeTab} searchQuery={searchQuery} />
      </div>
    </section>
  )
}

export default CommunityHub