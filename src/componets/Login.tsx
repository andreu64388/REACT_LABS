import { ChangeEvent, FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AddUser, CleanAccount } from "../store/CreateStore";
import { useAppDispatch } from "../store/state";
import { useAppSelector } from "./../store/state";

const Login: FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const { users } = useAppSelector((state) => state.data);
  /* const [user, setUser] = useState(users); */

  const navigate = useNavigate();
  const loacation: any = useLocation();

  const FROM = loacation.state?.from?.pathname || "/login" || "/product";
  const dispatch = useAppDispatch();

  const handleAddUser = () => {
    if (
      name.trim() === "" ||
      password.trim() === "" ||
      secret.trim() === "" ||
      img.trim() === ""
    ) {
      alert("Please fill all the fields");
    } else {
      const newUSER = {
        name: name,
        password: password,
        secret: secret,
        img: img,
        id: Math.random() + 10,
        isLoggedIn: true,
      };
      dispatch(AddUser(newUSER));

      navigate(FROM);
      setName("");
      setPassword("");
      setSecret("");
      setImg("");
    }
  };

  const handleExit = () => {
    dispatch(CleanAccount());
    navigate("/register");
  };
  return (
    <>
      {users.length === 0 || users[0].isLoggedIn === false ? (
        <div className="register">
          <div className="wrapper">
            <div className="forms">
              <h1>Register</h1>

              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
              </label>

              <label>
                IMG
                <input
                  type="text"
                  value={img}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setImg(e.target.value)
                  }
                />
              </label>
              <label>
                Секретное слово
                <input
                  type="text"
                  value={secret}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setSecret(e.target.value)
                  }
                />
              </label>

              <div className="form_register">
                <button onClick={handleAddUser}>Зарегисрироваться</button>
                <button>
                  {" "}
                  <Link to="/register">Войти</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="register_good">
       
          <div>
            <h3>Аккаунт:</h3>
            {users.map((user) => (
              <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Secret: {user.secret}</p>
                <img src={user.img} alt="img" />
                <button onClick={handleExit}>Выйти</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
