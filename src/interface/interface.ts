interface comentTS {
  name: string;
  descriotion: string;
  img: string;
  id?: any;
  date: any;
}
type NewType = any;

export interface CardTS {
  count: number;
  title: string;
  name: string;
  desription: string;
  img: string;
  bool: boolean;
  price: number;
  year: number;
  sale: number;
  id: number | string | any;
  coment?: comentTS[] | NewType;
}

export interface usersTS {
  id: any;
  name: string;
  password: string;
  secret?: string;
  isLoggedIn?: any;
  img?: string;
}
interface Basket {
  price: number;
  name: string;
  img: string;
  id: any;
  count: number;
}
export interface initialTS {
  users: usersTS[];
  sum: number;
  product: CardTS[];
  autorization: boolean;
  basket: Basket[];
}
