import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const navigation = useNavigate();
  const { id } = useParams();
const [apiData, setApiData] = useState({
  name: "",
  published_at: "",
  type: "",
  key:""
});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODcxMTExMTI4ZWI2ZmZhYTYzZDMxNjA1YzA4YmQ4MiIsIm5iZiI6MTc2MDYyMjIyNC4yMDk5OTk4LCJzdWIiOiI2OGYwZjY5MDNmODQ4MTEyYTVjMjNlYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.q9BwDPLz-_LbwDRmp371elL8rxKqzMu_nuuuysBO-3Q",
    },
  };

 

  useEffect(() => {
     fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`,
    options
  )
    .then((res) => res.json())
    .then((res) => setApiData(res.results[0]))
    .catch((err) => console.error(err))}, []);

  return (
    
    <div className="player">
      <img src={back_arrow} alt="Back" onClick={()=>navigation("/")}/>
      
      {apiData.key && (
  <iframe
    width="90%"
    height="90%"
    src={`https://www.youtube.com/embed/${apiData.key}`}
    allowFullScreen
    frameBorder={0}
  />
)}

      <div className="player-info">
        <p>
          <strong>Name:</strong> {apiData.name}
        </p>
        <p>
          <strong>Published At:</strong> {apiData.published_at.slice(0, 10)}
        </p>
        <p>
          <strong>Type:</strong> {apiData.type}
        </p>
      </div>
    </div>
  );
};

export default Player;
