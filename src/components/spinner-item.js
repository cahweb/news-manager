import React from 'react';

export default function SpinnerItem() {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <div style={{ height: '400px', width: '400px' }}>
            <div className="spinner" />
          </div>
        </div>
      </div>
    </div>
  );
}
