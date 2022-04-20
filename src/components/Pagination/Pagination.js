import ReactPaginate from 'react-paginate';
import axios from 'axios';
import "./Pagination.scss";

const Pagination = ({ setProducts }) => {

  const fetchProducts = async (currentPage) => {
    const res = await axios.get(`https://join-tsh-api-staging.herokuapp.com/products?limit=8&page=${currentPage}`);
    const data = await res.data.items;
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    console.log(currentPage)
    const productsFormServer = await fetchProducts(currentPage);
  
    setProducts(productsFormServer);
  }

  return (
    <ReactPaginate 
      previousLabel={'First'}
      nextLabel={'Last'}
      breakLabel={'...'}
      pageCount={13}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakLinkClassName={'page-link'}
      activeClassName={'active-link'}
    />
  )
}

export default Pagination;
