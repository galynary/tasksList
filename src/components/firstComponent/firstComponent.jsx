import React from "react";
import PropTypes from "prop-types";

const tariffs = [
  {
    id: "id-1",
    image: "../../image/планета 1.png",
    title: "Багатоквартирні будинки",
    price: "150 грн./міс",
    speed: "190 грн./міс до 100 Мб/с"
  },
  {
    id: "id-2",
    image: "../../image/планета 1.png",
    title: "Приватні будинки",
    price: "190 грн./міс",
    speed: "швидкість до 100 Мб/с"
  },
  {
    id: "id-3",
    image: "../../image/планета 1.png",
    title: "IP-адреса",
    price: "100 грн./міс.",
    speed: "190 грн./міс до 100 Мб/с"
  },
  {
    id: "id-4",
    image: "../../image/планета 1.png",
    title: "Кабельне ТБ",
    price: "100 грн./міс",
    speed: "100 грн./міс до 100 Мб/с"
  }
];

const TariffList = ({ tariffs }) => (
  <>
    <h2 className="title">Тарифи</h2>
    <ul>
      {tariffs.map((tariff) => (
        <li key={tariff.id}>
          <img src={tariff.image} alt={tariff.title} />
          <h3>{tariff.title}</h3>
          <p>{tariff.price}</p>
          <p>{tariff.speed}</p>
        </li>
      ))}
    </ul>
  </>
);

TariffList.propTypes = {
  tariffs: PropTypes.array.isRequired,
};

export default TariffList;