import './TabNavigation.css'

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="tab-navigation">
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => onTabChange(tab)}
            aria-selected={activeTab === tab}
          >
            {tab}
            {activeTab === tab && (
              <div className="active-indicator" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TabNavigation