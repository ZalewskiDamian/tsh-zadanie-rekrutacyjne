import axios from "axios";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/productsReducer";
import { setCurrentPage } from "../../redux/filtersReducer";
import { PaginateContainer } from "./Pagination.styles";

const Pagination = () => {
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const { active, promo, searchTerm, page } = useSelector(
    (state) => state.filters
  );

  const fetchProducts = async (currentPage) => {
    const res = await axios.get(
      `https://join-tsh-api-staging.herokuapp.com/products?search=${searchTerm}&limit=8&page=${currentPage}${
        promo ? "&promo=true" : ""
      }${active ? "&active=true" : ""}`
    );
    const data = await res.data.items;
    const totalPages = res.data.meta.totalPages;
    setPageCount(totalPages);
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
    <PaginateContainer>
      <ReactPaginate
        previousLabel={"First"}
        nextLabel={"Last"}
        breakLabel={"..."}
        pageCount={pageCount}
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
    </PaginateContainer>
  );
};

export default Pagination;
