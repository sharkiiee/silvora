import { PRODUCTS_DATA } from "../Data";

const Products = () => {
  return (
    <div>
      {PRODUCTS_DATA.map((categoryData) => (
        <div key={categoryData.category} className="mx-4">
          <h2>{categoryData.category.toUpperCase()}</h2>

          <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-4 mb-8 capitalize">
            {categoryData.items.map((product) => (
              <div key={product.id} className="border p-2">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full p-2"
                />
                <div className="p-2 text-sm font-light flex flex-col gap-1">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p>{product.description}</p>
                <p className="mt-2 text-sm"><button className="border-[1px] border-white rounded-md px-3 py-1">₹{product.price}</button></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

