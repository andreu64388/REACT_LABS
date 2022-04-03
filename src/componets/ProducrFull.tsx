import { ChangeEvent, FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AddComent,
  addToBasket,
  DeleteComment,
  EditComment
} from "../store/CreateStore";
import { useAppDispatch } from "../store/state";
import { useAppSelector } from "./../store/state";

const ProductFull: FC = () => {
  const [comment, setComment] = useState<string>("");
  const [isEdit, setIsEdit] = useState<any>();
  const [edit, setEdit] = useState<string>("");
  const { product, basket, users } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  const { title } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToBasketHandler = (product: any) => {
    dispatch(addToBasket(product));
  };
  const handkeComment = (id: any) => {
    if (comment.trim() === "") {
      alert("Please fill all the fields");
    } else {
      const newComment = {
        descriotion: comment,
        id: id,
        name: users[0].name,
        img: users[0].img,
        date: new Date(),
      };
      dispatch(AddComent(newComment));
      setComment("");
    }
  };

  const handleSaveEdit = (id: any, date: any) => {
    console.log(edit);
    const Editc = {
      descriotion: edit,
      id: id,
      date: date,
    };
    dispatch(EditComment(Editc));
    setIsEdit(false);
  };

  const handleEdit = (date: any, descriotion: string) => {
    setIsEdit(descriotion);
    setEdit(descriotion);
  };
  const handleDelete = (id: any, descriotion: string) => {
    const secret = prompt("Please enter secret");
    if (secret === users[0].secret) {
      dispatch(DeleteComment({ id, descriotion }));
    } else {
      alert("Wrong secret");
    }
  };
  return (
    <div>
      {product
        .filter((product) => ":" + product.title === title)
        .map((i) => {
          const {
            img,
            title,
            name,
            price,
            year,
            sale,
            desription,
            coment,
            id,
          } = i;

          return (
            <>
              <div key={id} className="fullcard">
                <div className="wrapper">
                  <h1>Title {title} </h1>
                  <div className="info_img_osnova">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                    <div className="text">
                      <h1>{title}</h1>
                      <p>price:{price}</p>
                      <p>year:{year}</p>
                      <p>name:{name}</p>
                      <p>sale:{sale}%</p>
                      <p>description:{desription}</p>

                      <button onClick={() => addToBasketHandler(i)}>
                        Add to a Basket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <div className="wrapper">
                  <div className="comment-osnova">
                    {coment.map((i: any) => {
                      const { descriotion, name, img, date } = i;
                      return (
                        <div
                          key={i}
                          style={{ margin: "20px auto" }}
                          className="commetn"
                        >
                          <div className="imgs_commemt">
                            <div>
                              <img src={img} alt="" />
                            </div>
                            <div className="text">
                              <p>name:{name}</p>
                              <p>date:{date.toLocaleTimeString()}</p>
                              {/*         <p>time:{date.toLocaleTimeString()}</p> */}
                            </div>
                          </div>
                          <div className="descrion">
                            {isEdit === descriotion ? (
                              <div>
                                <input
                                  type="text"
                                  value={edit}
                                  onChange={(
                                    e: ChangeEvent<HTMLInputElement>
                                  ) => setEdit(e.target.value)}
                                />
                                <button
                                  onClick={() => handleSaveEdit(id, date)}
                                >
                                  SAVE
                                </button>
                              </div>
                            ) : (
                              <p>{descriotion}</p>
                            )}
                          </div>

                          <div className="del">
                            <button
                              onClick={() => handleEdit(date, descriotion)}
                            >
                              Edit{" "}
                            </button>
                            <button
                              onClick={() => handleDelete(id, descriotion)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {users.length !== 0 && (
                    <div>
                      <h3>Аккаунт:</h3>
                      {users[0].name}
                    </div>
                  )}
                  <div className="bnt">
                    <div className="btns">
                      <input
                        type="text"
                        value={comment}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setComment(e.target.value)
                        }
                      />
                      <button onClick={() => handkeComment(id)}>
                        Отправить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default ProductFull;
