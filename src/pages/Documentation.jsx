import React, { useState } from 'react';
import { CustomIcon, VIBRANT_COLORS, PARTICLE_ICONS } from 'icon-sphere';

const ICON_TYPES = PARTICLE_ICONS;

function Documentation() {
  const [activeExample, setActiveExample] = useState('basic');

  const examples = {
    basic: {
      title: 'Basic Usage',
      code: `import { CustomIcon } from 'icon-sphere';

function MyComponent() {
  return (
    <CustomIcon 
      type="rocket" 
      size={64} 
      color="#6366f1" 
      animate={true} 
    />
  );
}`
    },
    colors: {
      title: 'Using Predefined Colors',
      code: `import { CustomIcon, VIBRANT_COLORS } from 'icon-sphere';

function ColorfulIcons() {
  return (
    <div>
      {VIBRANT_COLORS.slice(0, 5).map((color, index) => (
        <CustomIcon 
          key={index}
          type="star" 
          size={48} 
          color={color} 
          animate={true} 
        />
      ))}
    </div>
  );
}`
    },
    grid: {
      title: 'Icon Grid',
      code: `import { CustomIcon } from 'icon-sphere';

const iconTypes = ['rocket', 'star', 'heart', 'sun'];

function IconGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
      {iconTypes.map(type => (
        <CustomIcon 
          key={type}
          type={type} 
          size={56} 
          color="#374151" 
          animate={false} 
        />
      ))}
    </div>
  );
}`
    },
    allIcons: {
      title: 'All Icons Using PARTICLE_ICONS',
      code: `import { CustomIcon, PARTICLE_ICONS } from 'icon-sphere';

function AllIcons() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {PARTICLE_ICONS.map(icon => (
        <div key={icon} style={{ textAlign: 'center' }}>
          <CustomIcon type={icon} size={40} color="#10b981" animate={true} />
          <div>{icon}</div>
        </div>
      ))}
    </div>
  );
}`
    }
  };

  return (
    <div className="docs-page">
      <div className="container">
        <div className="docs-hero">
          <h1 className="docs-title">Documentation</h1>
          <p className="docs-subtitle">
            Everything you need to know about using IconSphere in your projects
          </p>
        </div>

        <div className="docs-content">
          {/* Installation */}
          <section className="docs-section">
            <h2 className="docs-heading">Installation</h2>
            <div className="code-block">
              <pre><code>npm install icon-sphere</code></pre>
              <button 
                className="copy-code-btn"
                onClick={() => navigator.clipboard.writeText('npm install icon-sphere')}
              >
                Copy
              </button>
            </div>
          </section>

          {/* Quick Start */}
          <section className="docs-section">
            <h2 className="docs-heading">Quick Start</h2>
            <p className="docs-text">
              Import <code>CustomIcon</code>, <code>VIBRANT_COLORS</code>, and <code>PARTICLE_ICONS</code> from IconSphere to get started:
            </p>
            <div className="code-block">
              <pre><code>{`import { CustomIcon, VIBRANT_COLORS, PARTICLE_ICONS } from 'icon-sphere';`}</code></pre>
            </div>

            <div className="example-tabs">
              {Object.entries(examples).map(([key, example]) => (
                <button
                  key={key}
                  className={`tab-button ${activeExample === key ? 'active' : ''}`}
                  onClick={() => setActiveExample(key)}
                >
                  {example.title}
                </button>
              ))}
            </div>

            <div className="code-block">
              <pre><code>{examples[activeExample].code}</code></pre>
              <button 
                className="copy-code-btn"
                onClick={() => navigator.clipboard.writeText(examples[activeExample].code)}
              >
                Copy
              </button>
            </div>
          </section>

          {/* Props Reference */}
          <section className="docs-section">
            <h2 className="docs-heading">Props Reference</h2>
            <div className="props-table">
              <table>
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>type</code></td>
                    <td>string</td>
                    <td>required</td>
                    <td>The icon type to display (e.g., "rocket", "star")</td>
                  </tr>
                  <tr>
                    <td><code>size</code></td>
                    <td>number</td>
                    <td>24</td>
                    <td>Icon size in pixels</td>
                  </tr>
                  <tr>
                    <td><code>color</code></td>
                    <td>string</td>
                    <td>"#000000"</td>
                    <td>Icon color (hex, rgb, or CSS color name)</td>
                  </tr>
                  <tr>
                    <td><code>animate</code></td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Enable or disable icon animation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Available Icons */}
          <section className="docs-section">
            <h2 className="docs-heading">Available Icons</h2>
            <p className="docs-text">
              IconSphere exports <code>PARTICLE_ICONS</code>, which contains all {ICON_TYPES.length} icons. You can render them dynamically:
            </p>
            
            <div className="icon-list">
              {ICON_TYPES.map(iconType => (
                <div key={iconType} className="icon-item">
                  <CustomIcon 
                    type={iconType} 
                    size={32} 
                    color="#6366f1" 
                    animate={false} 
                  />
                  <code>{iconType}</code>
                </div>
              ))}
            </div>
          </section>

          {/* Predefined Colors */}
          <section className="docs-section">
            <h2 className="docs-heading">Predefined Colors</h2>
            <p className="docs-text">
              IconSphere exports a <code>VIBRANT_COLORS</code> array with beautiful, hand-picked colors:
            </p>
            
            <div className="color-showcase">
              {VIBRANT_COLORS.map((color, index) => (
                <div key={index} className="color-item">
                  <div 
                    className="color-preview" 
                    style={{ backgroundColor: color }}
                  />
                  <code>{color}</code>
                </div>
              ))}
            </div>

            <div className="code-block">
              <pre><code>{`import { VIBRANT_COLORS } from 'icon-sphere';

// Use any color from the array
<CustomIcon 
  type="heart" 
  color={VIBRANT_COLORS[0]} 
  animate={true} 
/>`}</code></pre>
              <button 
                className="copy-code-btn"
                onClick={() => navigator.clipboard.writeText(`import { VIBRANT_COLORS } from 'icon-sphere';\n\n<CustomIcon type="heart" color={VIBRANT_COLORS[0]} animate={true} />`)}
              >
                Copy
              </button>
            </div>
          </section>

          {/* Best Practices */}
          <section className="docs-section">
            <h2 className="docs-heading">Best Practices</h2>
            <div className="best-practices">
              <div className="practice-item">
                <h3>Performance</h3>
                <p>Use <code>animate={false}</code> for static icons to improve performance, especially when rendering many icons.</p>
              </div>
              <div className="practice-item">
                <h3>Accessibility</h3>
                <p>Consider adding appropriate ARIA labels when icons convey important information.</p>
              </div>
              <div className="practice-item">
                <h3>Consistency</h3>
                <p>Use consistent sizing and colors throughout your application for a cohesive design.</p>
              </div>
              <div className="practice-item">
                <h3>Animation</h3>
                <p>Use animations sparingly for emphasis and avoid overusing them to prevent distraction.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
