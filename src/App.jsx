import React, { useState, useEffect } from 'react'
import { allCommands } from './commands'

const ITEMS_PER_PAGE = 6

function App() {
  const [search, setSearch] = useState('')
  const [theme, setTheme] = useState('dark')
  const [filter, setFilter] = useState({ type: null, value: null })
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const categories = ['all', ...new Set(allCommands.map(cmd => cmd.category))]

  const filteredCommands = allCommands.filter(cmd => {
    if (selectedCategory !== 'all' && cmd.category !== selectedCategory) return false
    if (filter.type === 'tag' && !cmd.tags.includes(filter.value)) return false
    
    return !search || 
      cmd.command.toLowerCase().includes(search.toLowerCase()) ||
      cmd.description.toLowerCase().includes(search.toLowerCase()) ||
      cmd.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  })

  const totalPages = Math.ceil(filteredCommands.length / ITEMS_PER_PAGE)
  const paginatedCommands = filteredCommands.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [search, selectedCategory, filter])

  const copyCommand = (cmd) => {
    navigator.clipboard.writeText(cmd).catch(() => {
      const textarea = document.createElement('textarea')
      textarea.value = cmd
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    })
  }

  const handleFilterClick = (type, value) => {
    setFilter(filter.type === type && filter.value === value
      ? { type: null, value: null }
      : { type, value })
  }

  return (
    <div className="container">
      <div className="header">
        <div className="branding">
          <a href="/" className="logo">
            dev-savior<span>.site</span>
          </a>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="コマンドを検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button 
          className="theme-toggle"
          data-theme={theme}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="テーマ切り替え"
        />
      </div>

      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'すべて' : category}
          </button>
        ))}
      </div>

      <div className="results-count">
        {filteredCommands.length}件のコマンドが見つかりました
      </div>

      <div className="grid">
        {paginatedCommands.map(cmd => (
          <div key={cmd.id} className="card">
            <div className="card-header">
              <span 
                className="category"
                onClick={() => handleFilterClick('category', cmd.category)}
                style={{ opacity: filter.type === 'category' && filter.value !== cmd.category ? 0.5 : 1 }}
              >
                {cmd.category}
              </span>
              {cmd.tags.map(tag => (
                <span 
                  key={tag} 
                  className="tag"
                  onClick={() => handleFilterClick('tag', tag)}
                  style={{ opacity: filter.type === 'tag' && filter.value !== tag ? 0.5 : 1 }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="command-block">
              {cmd.command}
              <button 
                className="copy-btn"
                onClick={() => copyCommand(cmd.command)}
                title="コピー"
              >
                <svg className="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.57A2 2 0 0014.685 2H10a2 2 0 00-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 18v2a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="description">{cmd.description}</div>
            <div className="examples">
              <div className="example-title">使用例:</div>
              {cmd.examples.map((example, index) => (
                <div key={index} className="example">
                  <div className="command-block">
                    {example.cmd}
                    <button 
                      className="copy-btn"
                      onClick={() => copyCommand(example.cmd)}
                      title="コピー"
                    >
                      <svg className="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.57A2 2 0 0014.685 2H10a2 2 0 00-2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 18v2a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className="description">{example.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(p => p - 1)}
            disabled={currentPage === 1}
          >
            前へ
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(p => p + 1)}
            disabled={currentPage === totalPages}
          >
            次へ
          </button>
        </div>
      )}
    </div>
  )
}

export default App
