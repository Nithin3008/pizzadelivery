import { LinkButton } from '../../ui/LinkButton';
import { Button } from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';
const fakeCart = [
  

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart></EmptyCart>;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      {/* Sending Cart items to Cart component to render*/}
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((val) => (
          <CartItem item={val} key={val.key}></CartItem>
        ))}
      </ul>

      <div className="mt-6 space-x-2">
      <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
