import React from "react";
import "./home.css";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useDataContext } from "../context/DataContext";

function Cards({ data }) {
  const [flip, setFlip] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const { updateLikeData, updateUnlikeData } = useDataContext();

  return (
    <div className="cardMain">
      <div
        className={flip ? "homeCardBox homeCardBoxFlip" : "homeCardBox"}
        onClick={() => setFlip(!flip)}
      >
        <div className="homeCardFront">
          <img src={data.image} className="homeCardImg"></img>
        </div>
        <div className="homeCardBack">
          <p className="homeCardText">
            Name: <span>{data.name}</span>
          </p>
          <p className="homeCardText">
            Status: <span>{data.status}</span>
          </p>
          <p className="homeCardText">
            Gender: <span>{data.gender}</span>
          </p>
          <p className="homeCardText">
            Species: <span>{data.species}</span>
          </p>
        </div>
      </div>

      {data.liked ? (
        <AiFillLike
          className="homeCardLikeBtn"
          onClick={() => updateUnlikeData(data.id)}
        />
      ) : (
        <AiOutlineLike
          className="homeCardLikeBtn"
          onClick={() => updateLikeData(data.id)}
        />
      )}
    </div>
  );
}

export default Cards;
