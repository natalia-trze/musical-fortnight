import React, { useEffect } from "react";
import ListGroup from 'react-bootstrap/Pagination'

export default function App() {
  const [news, setNews] = React.useState([]);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=netherlands")
      .then((res) => res.json())
      .then((res) => setNews(res.hits));
  }, [news]);
console.log(news)


  return (
    <div className="news-box">
        <h3> - News from the Netherlands - </h3>
      <ul style={{listStyleType: "square"}}>
        {news.map((story) => (
          <li>
              <a href={story.url} style={{fontWeight: "bold"}}> {story.title}</a>
              <p>{story.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}



