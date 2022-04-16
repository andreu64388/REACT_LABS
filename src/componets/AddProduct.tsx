import { ChangeEvent, FC, useState } from "react";
import { AddProducts } from "../store/CreateStore";
import { useAppDispatch } from "../store/state";
interface AddProductProps {
  ChangeState: (n: boolean) => void;
}
const AddProduct: FC<AddProductProps> = ({ ChangeState }) => {
  const [title, setTitle] = useState<string>("");
  const [desription, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [year, setYear] = useState<number | string>("");
  const [sale, setSale] = useState<number | string>("");
  const [img, setImg] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [name, setName] = useState<string>("iphone");
  const dispacth = useAppDispatch();
  const handleAddProduct = () => {
    if (
      title.trim() === "" ||
      desription.trim() === "" ||
      (price === 0 && year === "") ||
      sale === "" ||
      img.trim() === ""
    ) {
      alert("Заполните все поля");

      ChangeState(false);
    } else {
      const newProduct = {
        count: 1,
        title: title,
        name: name,
        id: Math.random() + 10,
        desription: desription,
        img: img,
        bool: false,
        price: Number(price),
        year: Number(year),
        сolor: color,
        sale: Number(sale),
        coment: [],
      };
      dispacth(AddProducts(newProduct));
    }
    ChangeState(false);
  };
  return (
    <div className="add_product">
      <div className="form_add">
        <div className="osnova_content">
          <h1>Add product</h1>
          <h3>title </h3>
          <input
            type="text"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
          <h3>desription </h3>
          <input
            type="text"
            value={desription}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />
          <h3>Category</h3>
          <select
            value={name}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setName(e.target.value)
            }
          >
            <option value="iphone">iphone</option>
            <option value="sumsung">sumsung</option>
            <option value="nokia">nokia</option>
          </select>

          <h3>price </h3>
          <input
            type="number"
            min={0}
            value={price}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPrice(+e.target.value)
            }
          />
          <h3>year </h3>
          <input
            type="text"
            value={year}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setYear(e.target.value)
            }
          />
          <h3>sale</h3>
          <input
            type="text"
            value={sale}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSale(e.target.value)
            }
          />
          <h3>color</h3>
          <input
            type="text"
            value={color}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setColor(e.target.value)
            }
          />
          <h3>img</h3>
          <input
            type="text"
            value={img}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setImg(e.target.value)
            }
          />
          <button onClick={handleAddProduct}> Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
