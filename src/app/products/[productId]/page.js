const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>
        This is dynamic page {params.productId} {searchParams.category}
      </h1>
    </div>
  );
};

export default DynamicPage;
