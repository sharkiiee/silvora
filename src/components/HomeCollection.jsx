import { PRODUCTS_DATA } from "../Data";

export default function HomeCollection() {
  const categories = PRODUCTS_DATA[0]; // since it’s an array with one object

  return (
    <div className="grid grid-cols-1 xs-phone:grid-cols-2 md:grid-cols-3 gap-2">
      {Object.entries(categories).map(([categoryName, products]) => (
        <div key={categoryName} className="category border border-white p-2">
          <h2 className="text-center font-semibold">{categoryName}</h2>
          <div className="products px-5">
            {products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.imageUrl} alt={product.name}  className="mx-auto my-2"/>
                <h3 className="text-xl">{product.name}</h3>
                <p className="text-sm">{product.description}</p>
                <span>${product.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
