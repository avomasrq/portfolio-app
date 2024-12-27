import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat">
        <h4 className="stat-title">JavaScript</h4>
        <ProgressBar
          now={85}
          label="85%"
          className="stat-progress"
          variant="info"
          style={{ height: '15px', borderRadius: '20px' }}
        />
      </div>
      <div className="stat">
        <h4 className="stat-title">React</h4>
        <ProgressBar
          now={90}
          label="90%"
          className="stat-progress"
          variant="success"
          style={{ height: '15px', borderRadius: '20px' }}
        />
      </div>
      <div className="stat">
        <h4 className="stat-title">CSS / SCSS</h4>
        <ProgressBar
          now={75}
          label="75%"
          className="stat-progress"
          variant="warning"
          style={{ height: '15px', borderRadius: '20px' }}
        />
      </div>
    </div>
  );
};

export default Stats;