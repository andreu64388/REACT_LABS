import { FC } from "react";
import { Link } from "react-router-dom";
import { CardTS } from "./../interface/interface";

interface Props {
  item: CardTS;
}
const Card: FC<Props> = ({ item }) => {
  const { title, price, img, desription, sale, color } = item;

  return (
    <div className="card_osnova_full">
      <div className="card">
        <div className="sale">{sale}%</div>
        <div className="img">
          <img src={img} />
        </div>
        <div className="text_card_template">
          <p>{color}</p>
          <h3>Title:{title}</h3>
          <h3>price:{price}</h3>
          <p>desription:{desription}</p>

        </div>
        <div className="button_card_read">
          <p>
            <Link to={`/product/:${title}`}>Read more</Link>
          </p>
          <button>Read Modal</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
