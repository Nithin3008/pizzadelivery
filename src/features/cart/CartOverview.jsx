import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartOverview() {
  //do this type of calculation in useselector itself
  const totalCartQuantity = useSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0),
  );
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
