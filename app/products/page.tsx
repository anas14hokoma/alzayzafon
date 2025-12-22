const products = [
    "البقوليات",
    "التوابل",
    "المكسرات"
  ];
  
  export default function Products() {
    return (
      <section className="py-20 bg-brandBg">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-10">منتجاتنا</h1>
  
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product}
                className="bg-white p-8 rounded-lg shadow text-center hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{product}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  