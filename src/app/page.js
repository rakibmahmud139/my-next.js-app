import Counter from "@/components/Counter/Counter";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 30,
    },
  });
  const shoes = await res.json();

  // console.log(data);

  // throw new Error("Error from home page");
  return (
    <div>
      <h1 className="text-4xl text-center">
        Welcome to my Next JS . Home page
      </h1>
      <div className="flex justify-between p-5">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-secondary">
                  Buy Now
                </button>
                <button className="btn btn-outline btn-secondary">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
