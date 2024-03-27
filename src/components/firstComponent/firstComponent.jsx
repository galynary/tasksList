import PropTypes from "prop-types";

export const Card = ({ imgUrl="../../img/планета.png", name, title, price }) => {
    return (
         <div>
      <img src={imgUrl} alt={name} width="50" />
      <h3>{title}</h3>
      <p>{price}</p>
      <button type="button">Замовити</button>
    </div>
);
}
 


  Card.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };