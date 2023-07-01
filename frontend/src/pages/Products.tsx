import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { getAllProducts, getPaginatedProducts } from "../services/ProductsApi";
import ProductTable from "../components/Datatable";

const LIMIT = 10;
export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const onEditClick = (id: number) => {
    navigate(`/updateProduct/${id}`);
  };

  const onDeleteClick = (id: number) => {
    console.log("DELETE THIS ", id);
  };
  function handlePageChange(newPage: number) {
    setPage(newPage);
  }
  useEffect(() => {
    fetchProducts();
    setIsLoading(false);
  }, [page]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const skip = (page - 1) * LIMIT;
      let res = await getPaginatedProducts(LIMIT, skip);
      setProducts(res.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-end m-4">
        <NavLink
          to={`/createProduct`}
          className="px-4 py-2 bg-blue-800 text-white rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Product
        </NavLink>
      </div>

      {!isLoading ? (
        <div>
          <ProductTable
            products={products}
            onEdit={onEditClick}
            onDelete={onDeleteClick}
          />

          <div className="flex justify-center mt-4">
            <ul className="flex pl-0 rounded list-none flex-wrap">
              <li>
                <a
                  className={`block hover:text-white hover:bg-blue-600 text-blue-600 border border-blue-600 rounded-md px-3 py-2 leading-tight font-medium ${
                    page === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => handlePageChange(page - 1)}
                  href="#"
                >
                  Previous
                </a>
              </li>
              {Array.from({ length: Math.ceil(products.length / LIMIT) }).map(
                (_, i) => (
                  <li key={i}>
                    <a
                      className={`block hover:text-white hover:bg-blue-600 text-blue-600 border border-blue-600 rounded-md px-3 py-2 leading-tight font-medium ${
                        i + 1 === page ? "bg-blue-600 text-white" : ""
                      }`}
                      onClick={() => handlePageChange(i + 1)}
                      href="#"
                    >
                      {i + 1}
                    </a>
                  </li>
                )
              )}
              <li>
                <a
                  className={`block hover:text-white hover:bg-blue-600 text-blue-600 border border-blue-600 rounded-md px-3 py-2 leading-tight font-medium ${
                    page === Math.ceil(products.length / LIMIT)
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => handlePageChange(page + 1)}
                  href="#"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Loader size={50} loading={isLoading} message="Fetching Products" />
      )}
    </div>
  );
}
