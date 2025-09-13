import React, { useState, useEffect } from 'react';
import { CustomIcon, VIBRANT_COLORS, PARTICLE_ICONS } from 'icon-sphere';

const ICON_TYPES = PARTICLE_ICONS;

function Showcase() {
  const [selectedIcon, setSelectedIcon] = useState('rocket');
  const [iconColor, setIconColor] = useState('#6366f1');
  const [iconSize, setIconSize] = useState(80);
  const [isAnimated, setIsAnimated] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIcon, setCopiedIcon] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);
  const [showPreview, setShowPreview] = useState(true);

  const filteredIcons = ICON_TYPES.filter(icon => {
    const matchesSearch = icon.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'favorites' && favorites.includes(icon));
    return matchesSearch && matchesCategory;
  });

  const copyToClipboard = async (iconType) => {
    const codeSnippet = `<CustomIcon type="${iconType}" size={${iconSize}} color="${iconColor}" animate={${isAnimated}} />`;
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopiedIcon(iconType);
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleFavorite = (iconType) => {
    setFavorites(prev => 
      prev.includes(iconType) 
        ? prev.filter(fav => fav !== iconType)
        : [...prev, iconType]
    );
  };

  const randomizeIcon = () => {
    const randomIcon = ICON_TYPES[Math.floor(Math.random() * ICON_TYPES.length)];
    const randomColor = VIBRANT_COLORS[Math.floor(Math.random() * VIBRANT_COLORS.length)];
    setSelectedIcon(randomIcon);
    setIconColor(randomColor);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimated && showPreview) {
        // Subtle animation trigger for preview
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isAnimated, showPreview]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffffff, #e2e8f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              Beautiful Animated Icons
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Meticulously crafted SVG icons with smooth animations for modern web applications
            </p>
          </div>
          
          {/* Enhanced Preview Section */}
          {showPreview && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '3rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              marginBottom: '2rem'
            }}>
              <div style={{
                display: 'flex',
                gap: '3rem',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {/* Icon Display */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    padding: '2rem',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '140px',
                    minHeight: '140px'
                  }}>
                    <CustomIcon 
                      type={selectedIcon} 
                      size={iconSize} 
                      color={iconColor} 
                      animate={isAnimated} 
                    />
                  </div>
                  
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      textTransform: 'capitalize'
                    }}>
                      {selectedIcon}
                    </h3>
                    <button
                      onClick={randomizeIcon}
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        padding: '0.5rem 1rem',
                        color: 'white',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={e => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                      onMouseOut={e => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                    >
                      🎲 Random
                    </button>
                  </div>
                </div>
                
                {/* Enhanced Controls */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  minWidth: '280px'
                }}>
                  {/* Color Picker */}
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      marginBottom: '1rem'
                    }}>
                      Color Palette
                    </label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '0.75rem'
                    }}>
                      {VIBRANT_COLORS.slice(0, 12).map(color => (
                        <button
                          key={color}
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            border: iconColor === color ? '3px solid white' : '2px solid rgba(255, 255, 255, 0.3)',
                            backgroundColor: color,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            transform: iconColor === color ? 'scale(1.1)' : 'scale(1)',
                            boxShadow: iconColor === color ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 2px 6px rgba(0, 0, 0, 0.2)'
                          }}
                          onClick={() => setIconColor(color)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Size Control */}
                  <div>
                    <label style={{
                      display: 'block',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      marginBottom: '1rem'
                    }}>
                      Size: {iconSize}px
                    </label>
                    <input
                      type="range"
                      min="40"
                      max="120"
                      value={iconSize}
                      onChange={(e) => setIconSize(Number(e.target.value))}
                      style={{
                        width: '100%',
                        height: '6px',
                        borderRadius: '3px',
                        background: 'rgba(255, 255, 255, 0.3)',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                  
                  {/* Toggle Controls */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    <button
                      onClick={() => setIsAnimated(!isAnimated)}
                      style={{
                        background: isAnimated ? 'rgba(34, 197, 94, 0.8)' : 'rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        padding: '0.75rem 1.25rem',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        flex: 1
                      }}
                    >
                      {isAnimated ? '✨ Animated' : '⏸️ Static'}
                    </button>
                    
                    <button
                      onClick={() => copyToClipboard(selectedIcon)}
                      style={{
                        background: 'rgba(59, 130, 246, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        padding: '0.75rem 1.25rem',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        flex: 1
                      }}
                    >
                      📋 Copy Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section style={{
        background: 'rgba(255, 255, 255, 0.95)',
        minHeight: '60vh',
        padding: '3rem 2rem',
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1f2937',
              margin: '0'
            }}>
              Icon Gallery
            </h2>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => setShowPreview(!showPreview)}
                style={{
                  background: showPreview ? '#6366f1' : '#e5e7eb',
                  color: showPreview ? 'white' : '#6b7280',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {showPreview ? '👁️ Hide Preview' : '👁️ Show Preview'}
              </button>
            </div>
          </div>
          
          {/* Enhanced Search and Filter Bar */}
          <div style={{
            background: '#f8fafc',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '2rem',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              {/* Search Input */}
              <div style={{ flex: '1', minWidth: '200px' }}>
                <input
                  type="text"
                  placeholder="🔍 Search icons..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={e => e.target.style.borderColor = '#6366f1'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>
              
              {/* View Toggle */}
              <div style={{
                display: 'flex',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: '0.75rem 1rem',
                    border: 'none',
                    background: viewMode === 'grid' ? '#6366f1' : 'transparent',
                    color: viewMode === 'grid' ? 'white' : '#6b7280',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  ⊞ Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  style={{
                    padding: '0.75rem 1rem',
                    border: 'none',
                    borderLeft: '1px solid #e2e8f0',
                    background: viewMode === 'list' ? '#6366f1' : 'transparent',
                    color: viewMode === 'list' ? 'white' : '#6b7280',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  ☰ List
                </button>
              </div>
            </div>
            
            <div style={{
              marginTop: '1rem',
              fontSize: '0.9rem',
              color: '#6b7280'
            }}>
              Showing {filteredIcons.length} of {ICON_TYPES.length} icons
            </div>
          </div>
          
          {/* Enhanced Icon Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: viewMode === 'grid' 
              ? 'repeat(auto-fill, minmax(180px, 1fr))' 
              : '1fr',
            gap: viewMode === 'grid' ? '1.5rem' : '1rem'
          }}>
            {filteredIcons.map(iconType => (
              <div
                key={iconType}
                onClick={() => setSelectedIcon(iconType)}
                style={{
                  background: selectedIcon === iconType ? '#f0f9ff' : 'white',
                  border: selectedIcon === iconType ? '2px solid #0ea5e9' : '2px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: viewMode === 'grid' ? '1.5rem' : '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: viewMode === 'grid' ? 'column' : 'row',
                  alignItems: 'center',
                  gap: '1rem',
                  position: 'relative',
                  boxShadow: selectedIcon === iconType ? '0 4px 12px rgba(14, 165, 233, 0.15)' : '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
                onMouseOver={e => {
                  if (selectedIcon !== iconType) {
                    e.currentTarget.style.borderColor = '#94a3b8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                  }
                }}
                onMouseOut={e => {
                  if (selectedIcon !== iconType) {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                  }
                }}
              >
                <div style={{
                  background: '#f8fafc',
                  borderRadius: '12px',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: viewMode === 'grid' ? 'auto' : '60px',
                  minHeight: viewMode === 'grid' ? '80px' : '60px'
                }}>
                  <CustomIcon 
                    type={iconType} 
                    size={viewMode === 'grid' ? 40 : 32} 
                    color="#374151" 
                    animate={false} 
                  />
                </div>
                
                <div style={{
                  flex: 1,
                  textAlign: viewMode === 'grid' ? 'center' : 'left'
                }}>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    textTransform: 'capitalize',
                    marginBottom: '0.5rem'
                  }}>
                    {iconType}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: viewMode === 'grid' ? 'center' : 'flex-start',
                    alignItems: 'center'
                  }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(iconType);
                      }}
                      style={{
                        background: copiedIcon === iconType ? '#10b981' : '#6366f1',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {copiedIcon === iconType ? '✅ Copied' : '📋 Copy'}
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(iconType);
                      }}
                      style={{
                        background: favorites.includes(iconType) ? '#fbbf24' : '#e5e7eb',
                        color: favorites.includes(iconType) ? 'white' : '#6b7280',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {favorites.includes(iconType) ? '⭐' : '☆'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredIcons.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              color: '#6b7280'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>No icons found</h3>
              <p>Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Copy Notification */}
      {copiedIcon && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: '#10b981',
          color: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          animation: 'slideIn 0.3s ease-out'
        }}>
          <span>✅</span>
          <span>Copied <strong>{copiedIcon}</strong> code!</span>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Showcase;