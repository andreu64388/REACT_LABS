import { ChangeEvent, FC, useEffect, useState } from "react";
import { checkbox } from "../assets/assets";
import Card from "../elements/Card";
import { useAppSelector } from "./../store/state";
import AddProduct from "./AddProduct";
import { Check } from './../assets/assets';
const Product: FC = () => {
  const { product } = useAppSelector((state) => state.data);
  const [research, setResearch] = useState<string>("");
  const [state, setState] = useState(product);
  const [isBool, setIsBool] = useState<boolean>(false);
  const [sortPrice, setPriceSort] = useState<string>("");
  const [sortYear, setsortYear] = useState<string>("");
  const [sortSale, setSortSale] = useState<string>("");
  const [change, setChange] = useState<Check[]>(checkbox);
  const [option, setOption] = useState<any[]>(product);
  useEffect(() => {
    if (change.map(item => item.checked).includes(true)) {
      const productNew =
        option.map(item => {
          if (change.filter(item => item.checked).map(item => item.color).includes(item.color)) {
            return item;
          }
        }
        )
      setState(productNew.filter(item => item !== undefined));
    } else {
      setOption(option);
      setState(option);
    }
  }, [change]);

  useEffect(() => {
    setState(product);
  }, [product]);

  const filters = (n: any) => {
    if (n === product) {
      setState(product);
      setOption(product)
    } else {
      const newDa = product.filter((x) => x.name === n);
      setOption(newDa)
      setState(newDa);

    }
    setChange(change.map(item => {
      return { ...item, checked: false }
    }))
  };
  const handlerChangeCheckbox = (index: number) => {
    setChange(
      change.map((topping, currentIndex) =>
        currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping
      )
    )
  }
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriceSort("Выбор");
    setSortSale("Выбор");
    if (e.target.value === "incrising") {
      setsortYear(e.target.value);
      const result = "year";
      setState([...state].sort((a, b) => b[result] - a[result]));
    } else {
      setsortYear(e.target.value);
      const result = "year";
      setState([...state].sort((a, b) => a[result] - b[result]));
    }
  };
  const handleChangePrice = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortSale("Выбор");
    setsortYear("Выбор");
    if (e.target.value === "incrising") {
      setPriceSort(e.target.value);
      const result = "price";
      setState([...state].sort((a, b) => b[result] - a[result]));
    } else {
      setPriceSort(e.target.value);
      const result = "price";

      setState([...state].sort((a, b) => a[result] - b[result]));
    }
  };
  const handleChangeSale = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriceSort("Выбор");
    setsortYear("Выбор");
    if (e.target.value === "incrising") {
      setSortSale(e.target.value);
      const result = "sale";
      setState([...state].sort((a, b) => b[result] - a[result]));
    } else {
      setSortSale(e.target.value);
      const result = "sale";
      setState([...state].sort((a, b) => a[result] - b[result]));
    }
  };
  const ChangeState = (n: boolean) => {
    setIsBool(n);
  };
  return (
    <div>
      <div className="product">
        <div className="wrapper">
          <div className="osnova_research">
            <h1>Reserch</h1>
            <div className="research">
              <input
                type="text"
                value={research}
                onChange={(e) => setResearch(e.target.value)}
              />
            </div>
            <div className="categors">
              <button className="" onClick={() => filters(product)}>All</button>
              <button onClick={() => filters("sumsung")}>Sumsung</button>
              <button onClick={() => filters("iphone")}>Iphone</button>
              <button onClick={() => filters("nokia")}>Nokia</button>
            </div>
            <div className="sorting">
              <div className="sort_year">
                <select value={sortYear} onChange={handleChange}>
                  <option>Выбор</option>
                  <option value="incrising">increasing year</option>
                  <option value="desncrising">descreasing year </option>
                </select>
              </div>
              <div className="sort">
                <select value={sortPrice} onChange={handleChangePrice}>
                  <option>Выбор</option>
                  <option value="incrising">increasing price</option>
                  <option value="desncrising">descreasing price </option>
                </select>
              </div>
              <div className="sort_sale">
                <select value={sortSale} onChange={handleChangeSale}>
                  <option>Выбор</option>
                  <option value="incrising">increasing sale</option>
                  <option value="desncrising">descreasing sale </option>
                </select>
              </div>
            </div>
            <div>
              <button onClick={() => setIsBool(true)}>Add products</button>{" "}
            </div>
            <h1>Выбор по цвету</h1>
            {checkbox.map((index, i) => {
              return (
                <p style={{ textAlign: "center" }}>
                  <input type="checkbox"
                    key={i}
                    checked={change[i].checked}
                    onChange={() => handlerChangeCheckbox(i)} /> {index.color}
                </p>
              );
            })}
          </div>
          {isBool && <AddProduct ChangeState={ChangeState} />}
          <div className="product_info">
            {state
              .filter((n) => {
                if (research === "") return n;
                else if (
                  n.title.toLowerCase().includes(research.toLowerCase())
                ) {
                  return n;
                }
              })
              .map((item, index) => {
                return <Card key={index} item={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
