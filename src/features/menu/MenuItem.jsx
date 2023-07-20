import { formatCurrency } from '../../utils/helpers';
import { Button } from '../../ui/Button';
//component for displaying menu item
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        className={`h-24 rounded-sm ${soldOut ? 'opacity-70 grayscale-0' : ''}`}
        alt={name}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button type="small">Add to Cart </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
