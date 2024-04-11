import { Card } from "./firstComponent/firstComponent";
import { Container } from "./Container/Container";
import "../styles/theme";

export const App = () => {
  return (
    <Container>
      <Card
        imgUrl="../../img/internet.png"
        name="Кабельне ТБ"
        title="Кабельне ТБ"
        price="100грн./міс"
      />
    </Container>
  );
};