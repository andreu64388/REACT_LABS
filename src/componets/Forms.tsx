import { FC, useEffect, useState } from "react";
import { CleanBasket } from "../store/CreateStore";
import { useAppDispatch, useAppSelector } from "./../store/state";

interface IProps {
  changeBool: (n: boolean) => void;
}
const Form: FC<IProps> = ({ changeBool }) => {
  const [state, setState] = useState<number>(0);
  const [buttonValue, setbuttonValue] = useState<string>("Далее");

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (state === 2) {
      setbuttonValue("Завершить");
    } else if (state === 3) {
      changeBool(false);
      dispatch(CleanBasket());
    } else {
      setbuttonValue("Далее");
    }
  }, [state]);

  return (
    <div className="onsova_form">
      <div className="froms">
        <div className="steps">
          {[1, 2, 3].map((value, index) => {
            const newLocal = "step_1";
            const last = "step_3";
            return (
              <div
                className={`step ${state === index ? "active" : ""}${
                  state > index ? "completet" : ""
                }`}
              >
                {value}

                <div className={value === 3 ? last : newLocal}></div>
              </div>
            );
          })}
        </div>
        <div className="osnova_forms">
          {state === 0 && <FirstPage />}
          {state === 1 && <TwoPage />}
          {state === 2 && <TreePage />}
        </div>
        <div className="osnova_form">
          {state > 0 && (
            <button onClick={() => setState((state) => state - 1)}>
              Назад
            </button>
          )}
          <button onClick={() => setState((state) => state + 1)}>
            {buttonValue}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
const FirstPage = () => {
  return (
    <div className="form_pages">
      <h1>Имя</h1>
      <input type="text" />
      <h1>Фамилия </h1>
      <input type="text" />
      <h1>Пароль</h1>
      <input type="password" />
      <div></div>
    </div>
  );
};
const TwoPage = () => {
  return (
    <div className="form_pages two">
      <h1>Адрес</h1>
      <input type="text" />
      <h1> Дом </h1>
      <input type="text" />
      <h1>Мобильный телефон</h1>
      <input type="text" />
      <div></div>
    </div>
  );
};

const TreePage: FC = () => {
  const { sum } = useAppSelector((state) => state.data);
  const handleClick = () => {
    alert("Вы увернеы?");
  };
  return (
    <div className="form_pages tree">
      <h1>Сумма заказа {sum}$</h1>
      <button onClick={handleClick}>Оплатить</button>
    </div>
  );
};
