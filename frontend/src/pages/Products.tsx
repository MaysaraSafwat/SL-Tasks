import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { deleteProduct, getPaginatedProducts } from "../services/ProductsApi";
import Datatable from "../components/Datatable";
import { Modal } from "../components/Modal";

const LIMIT = 10;

interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
  }

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const columns = [
    { key: "id", title: "ID" },
    { key: "title", title: "Title" },
    { key: "category", title: "Category" },
    { key: "price", title: "Price" },
  ];

  const onEditClick = (id:number) => {
    navigate(`/updateProduct/${id}`);
  };

  const onDeleteClick = async(id:number) => {
    try{
        let res = await deleteProduct(id)
        console.log(res)
        setModalMessage("Deletion successful!");
    }catch(err){
        console.log(err)
        setModalMessage("Error in deletion.");
    }finally{
        setShowModal(true);
    }
  };
  const onModalClose = ()=>{
    setShowModal(false)
  }
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
      let res = await getPaginatedProducts(LIMIT, skip, searchQuery);
      setProducts(res.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-between  m-4">
      <div className="m-4">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="px-4 py-2 border border-gray-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        />
      </div>

        <NavLink
          to={`/createProduct`}
          className="  m-4 px-4 py-2 bg-blue-800 text-white rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Product
        </NavLink>
      
      </div>

      {!isLoading ? (
        <div>
          <Datatable
           columns={columns}
            data={products.filter(
              (product: Product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase())
            )}
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

          {showModal && <Modal  modalMessage={modalMessage} handleClick={onModalClose}/>}
        </div>
      ) : (
        <Loader size={50} loading={isLoading} message="Fetching Products" />
      )}
    </div>
  );
}
