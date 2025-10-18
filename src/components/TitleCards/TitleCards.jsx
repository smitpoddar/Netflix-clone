import React, { useEffect, useState } from 'react'
import "./TitleCard.css"
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {

  const [apiDat,setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODcxMTExMTI4ZWI2ZmZhYTYzZDMxNjA1YzA4YmQ4MiIsIm5iZiI6MTc2MDYyMjIyNC4yMDk5OTk4LCJzdWIiOiI2OGYwZjY5MDNmODQ4MTEyYTVjMjNlYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.q9BwDPLz-_LbwDRmp371elL8rxKqzMu_nuuuysBO-3Q",
    },
  };
  useEffect(()=>{
      fetch(
        `https://api.themoviedb.org/3/movie/${
          category ? category : "now_playing"
        }?language=en-US&page=1`,
        options
      )
        .then((res) => res.json())
        .then((res) => setApiData(res.results))
        .catch((err) => console.error(err));
  },[])
  return (
    <div className="title-Card">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiDat.map((data, index) => (
          <Link to={`/player/${data.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/`+data.backdrop_path} />
            <p>{data.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TitleCards