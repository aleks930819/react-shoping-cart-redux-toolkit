import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeItemFromCart,
  decreaseItemQuantityCart,
  increaseItemQuantityCart,
} from '../store/featuers/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeItemFromCart(cartItem));
  };

  const handleDecraseCart = (cartItem) => {
    dispatch(decreaseItemQuantityCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(increaseItemQuantityCart(cartItem));
  };

  return (
    <div
      className={`${
        theme === 'dark' ? 'hover:bg-zinc-600 ' : 'hover:bg-gray-100'
      }" flex  items-center  -mx-8 px-6 py-5  "`}
    >
      <div className="flex w-2/5">
        <div className="w-20 ">
          <img className="h-24" src={item.img} alt={item.name} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-growe">
          <span className="font-bold text-sm">{item.name}</span>
          <Link
            href="#"
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            onClick={() => handleRemoveFromCart(item)}
          >
            Remove
          </Link>
        </div>
      </div>
      <div
        className={`${
          theme === 'dark' ? 'text-white' : 'text-gray-600'
        } " flex justify-center w-1/5 "}`}
      >
        <svg
          className="fill-current  w-3 cursor-pointer"
          viewBox="0 0 448 512"
          onClick={() => handleDecraseCart(item)}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <p className="mx-2 border text-center w-8">{item.itemQuantity}</p>

        <svg
          className="fill-current  w-3 cursor-pointer"
          viewBox="0 0 448 512"
          onClick={() => handleIncreaseCart(item)}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${item.price.toFixed(2)}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${(item.price * item.itemQuantity).toFixed(2)}
      </span>
    </div>
  );
};

export default CartItem;
