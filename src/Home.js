import React, { useEffect } from "react";

export default function App() {
  const [news, setNews] = React.useState([]);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=netherlands")
      .then((res) => res.json())
      .then((res) => setNews(res.hits));
  }, [news]);

  return (
    <div className="news-box">
        <h3> - News from the Netherlands - </h3>
      <ul style={{listStyleType: "square"}}>
        {news.map((story) => (
          <li key={story.created_at}>
              <a href={story.url} style={{fontWeight: "bold"}}> {story.title}</a>
              <p>{story.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}



