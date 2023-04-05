import data from "../../../assets/data.json";
import { CardContainer, CardStyle } from "./style";

export default function Card({ switchPrice }) {
  return (
    <CardContainer>
      {data.map((item) => {        
        return (
          <CardStyle key={item.title}>
            <h2>{item.title}</h2>
              {switchPrice ? <h3><span>$</span>{item.priceMonth}</h3> : <h3><span>$</span>{item.priceAnnual}</h3> }
            <ul>
              <li>{item.firstLine}</li>
              <li>{item.secondLine}</li>
              <li>{item.thirdLine}</li>
            </ul>
            <button>learn more</button>
          </CardStyle>
        );
      })}
    </CardContainer>
  );
}
