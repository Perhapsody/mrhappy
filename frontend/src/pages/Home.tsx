import { useEffect, useState } from 'react';

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to MrHappy Store 🎉</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p: any) => (
          <div key={p.id} className="bg-white shadow-xl rounded-2xl p-4">
            <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-2">{p.name}</h2>
            <p className="text-gray-600">${(p.price / 100).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
