import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/productsReducer";
import { setCurrentPage } from "../../redux/filtersReducer";
import axios from "axios";
import "./Pagination.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);
  const { active, promo, searchTerm, page } = useSelector(
    (state) => state.filters
  );
  // const [ pageNumber, setPageNumber ] = useState(1);

  // const fetchProducts = async (currentPage) => {
  //   const res = await axios.get(`https://join-tsh-api-staging.herokuapp.com/products?limit=8&page=${currentPage}`);
  //   const data = await res.data.items;
  //   return data;
  // };

  // const handlePageClick = async (data) => {
  //   let currentPage = data.selected + 1;
  //   console.log(currentPage)
  //   const productsFormServer = await fetchProducts(currentPage);

  //   dispatch(setProducts(productsFormServer))
  // }

  const fetchProducts = async (currentPage) => {
    const res = await axios.get(
      `https://join-tsh-api-staging.herokuapp.com/products?search=${searchTerm}&limit=8&page=${currentPage}${
        promo ? "&promo=true" : ""
      }${active ? "&active=true" : ""}`
    );
    const data = await res.data.items;
    return data;
  };

  const handlePageClick = async (data) => {
    dispatch(setCurrentPage(data.selected + 1));
    const productsFormServer = await fetchProducts(data.selected + 1);

    dispatch(setProducts(productsFormServer));
  };
  useEffect(() => {
    fetchProducts(page);
  }, [promo, active, searchTerm]);

  return (
    <ReactPaginate
      previousLabel={"First"}
      nextLabel={"Last"}
      breakLabel={"..."}
      pageCount={13}
      marginPagesDisplayed={3}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakLinkClassName={"page-link"}
      activeClassName={"active-link"}
    />
  );
};

export default Pagination;
