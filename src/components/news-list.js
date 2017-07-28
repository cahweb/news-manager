import React from 'react';

import NewsItem from './news-item';

export default function NewsList(props) {
  const renderedNews = props.news.map(item =>
    <div key={item.site_name + item.id} className="column is-4">
      <NewsItem item={item} />
    </div>
  );

  function renderNewsRow(rowNum) {
    return (
      <div key={rowNum} className="columns">
        {[renderedNews.pop(), renderedNews.pop(), renderedNews.pop()]}
      </div>
    );
  }

  function renderNewsRows() {
    const newsRows = [];
    for (let i = 0; i < Math.ceil(props.news.length / 3); i++) {
      newsRows.push(renderNewsRow(i));
    }
    return newsRows;
  }

  return (
    <div>
      {renderNewsRows()}
    </div>
  );
}
