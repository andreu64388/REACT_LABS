import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToBasket, DeleteBasket } from "../store/CreateStore";
import { useAppDispatch, useAppSelector } from "./../store/state";
import Form from "./Forms";

const Bastet: FC = () => {
  const [isBool, setIsBool] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { basket, sum } = useAppSelector((state) => state.data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const addToBasketHandler = (product: any) => {
    dispatch(addToBasket(product));
  };
  const Delete = (product: any) => {
    dispatch(DeleteBasket(product));
  };
  function Change(n: any) {
    setIsBool(n);
  }
  return (
    <div>
      {isBool && <Form changeBool={Change} />}
      {basket.length === 0 ? (
        <div className="empty">
          <img src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?w=826&t=st=1648823036~exp=1648823636~hmac=b65d6663a934e8e750a4393fd70d7f1c40e0cea01fa1e9a84336aa1e5a2465d9" />
          <p>
            Ваша корзина пуста, пожалуйста, добавьте товар в корзину
            <h1>
              <Link to="/product">Go to shop</Link>
            </h1>
          </p>
        </div>
      ) : (
        <div>
          <div className="basket">
            <div className="wrapper">
              <div className="basket_osnova">
                <div className="products">
                  {basket.map((value, index) => {
                    const { img, name, price, count } = value;
                    return (
                      <div className="bas_prod">
                        count:{count}
                        <button onClick={() => addToBasketHandler(value)}>
                          Add
                        </button>
                        <div className="img">
                          <img src={img} />
                        </div>
                        <div className="text">
                          <h1>{name}</h1>
                          <p>{price}$</p>
                        </div>
                        <div>
                          <button onClick={() => Delete(value)}>Delete</button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="table_basket">
                  <div className="onsova_price_title">
                    <h1>
                      Title list:{basket.length} Suma{sum}$
                    </h1>
                    <div className="check_list">
                      {basket.map((value) => {
                        return (
                          <div className="title_list">
                            <h2>Title:{value.name}</h2>
                            <h2>
                              Price:{value.price}*{value.count}$
                            </h2>
                          </div>
                        );
                      })}
                    </div>
                    <div className="byu">
                      {" "}
                      <button onClick={() => setIsBool(true)}>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ margin: "40px auto" }} className="wrapper">
              odit dignissimos, voluptates eum iste laborum maiores nesciunt
              eaque ducimus. Quisquam sed quaerat minima repellendus
              voluptatibus, mollitia ut voluptates quam in nam, magni est
              quibusdam ipsam vitae. Odit suscipit atque sint unde asperiores,
              esse iure id accusamus ab? Sed in exercitationem amet autem culpa
              explicabo eaque sapiente nulla totam molestiae cumque corporis,
              accusantium eveniet atque consectetur veritatis. Commodi provident
              at magnam sequi, distinctio necessitatibus quos quibusdam nemo
              atque cumque dolores, blanditiis voluptas numquam mollitia nam,
              eaque accusantium fuga. Modi corrupti iusto voluptates cumque iure
              eaque quibusdam amet! Aspernatur explicabo iste earum porro animi.
              Quas quos aliquam eius accusamus placeat consequatur quis vero
              facere tenetur repudiandae voluptatibus, nam unde doloremque
              molestias. Deleniti quam laudantium repellendus itaque, accusamus
              neque. Quis tempore, repudiandae unde accusamus excepturi aliquam,
              totam animi debitis iure explicabo error, et accusantium quidem
              blanditiis beatae. Iure maiores pariatur neque. Autem ipsum,
              incidunt dignissimos culpa totam numquam ducimus! Adipisci facere
              vero mollitia nobis. Voluptas ullam, itaque quas iure atque sunt
              inventore reiciendis expedita odio autem est, doloremque ducimus
              ipsum pariatur delectus voluptate illo? Ex asperiores aperiam
              earum nisi.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bastet;
