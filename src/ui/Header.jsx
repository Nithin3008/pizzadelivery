import { Link } from 'react-router-dom';
import { SearchOrder } from '../features/order/SearchOrder';
import { Username } from '../features/user/Username';

export const Header = () => {
  return (
    <header className="font flex items-center justify-between border-b border-stone-500 bg-yellow-500 px-4 py-3  uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizz Co.
      </Link>
      <SearchOrder></SearchOrder>
      <Username></Username>
    </header>
  );
};
