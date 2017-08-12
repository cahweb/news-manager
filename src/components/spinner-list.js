import React from 'react';
import SpinnerItem from './spinner-item';

export default function SpinnerList() {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <SpinnerItem />
          <SpinnerItem />
          <SpinnerItem />
        </div>
        <div className="columns">
          <SpinnerItem />
          <SpinnerItem />
          <SpinnerItem />
        </div>
      </div>
    </div>
  );
}
