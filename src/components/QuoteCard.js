import React from "react";
import "./QuoteCard.css";

/* const QuoteCard = (props) => {
  return (<figure className="QuoteCard">
    <img src={props.image} alt={props.character} />
    <figcaption>
      <blockquote>{props.quote}</blockquote>
      <cite>{props.character}</cite>
    </figcaption>
  </figure>);
} */

// Le state de "favorite" remonté au parent QuoteAPI,
// et du même coup, j'ai re-transformé QuoteCard en composant fonctionnel
// (comme il n'a plus de state, écrire une classe avec constructor est devenu inutile)
// La fonction mouseClickFav est aussi passée dans QuoteAPI
// cette fonction est devenue une prop, et est nommée onClick
// Tous les 'this' et 'state' sont remplacés par 'props'
// "favorite" se met maintenant à jour dans le composant par rapport au state de QuoteAPI, récupéré via les props

const QuoteCard = props => {
  return (
    <figure className="QuoteCard">
      <img src={props.image} alt={props.character} />
      <figcaption>
        <blockquote>{props.quote}</blockquote>
        <p>
          <cite>{props.character}</cite>
          <span
            className={props.favorite ? "is-favorite" : ""}
            onClick={props.onClick}
          >
            &#9733;
          </span>
        </p>
      </figcaption>
    </figure>
  );
};

export default QuoteCard;
