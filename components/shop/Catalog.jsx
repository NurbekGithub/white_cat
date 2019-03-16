import { useContext } from 'react';
import {context} from '../media-query'
import gql from 'graphql-tag';
import ErrorMessage from '../common/errorMessage';
import { renderProducts } from './Category';
import { useQuery } from 'react-apollo-hooks';
import ReactPaginate from 'react-paginate';
import Router from 'next/router';
import 'react-image-gallery/styles/css/image-gallery.css';
const PER_PAGE = 4;

const PRODUCTS_QUERY = gql`
  query PRODUCTS_QUERY($start: Int!)
    {
      products(limit: 4, start: $start) {
        _id
        price
        name
        price
        image {
          url
        }
        manufacturer {
          name,
          icon {
            url
          }
        }
      }
    }
`;

const ALL_PRODUCTS_QUERY = gql`
  {
    products {
      _id
    }
  }
`

export default ({page}) => {
  const { isMobile, isTablet } = useContext(context);
  const { data: { products }, error, loading } = useQuery(PRODUCTS_QUERY, { variables: {start: page * PER_PAGE} });
  const { data: { products: allProducts }, error: paginationError, loading: paginationLoading } = useQuery(ALL_PRODUCTS_QUERY);
  if(loading) return <p>Loading</p>
  if(error) return <ErrorMessage error={error}/>
  return (
    <>
      <h3 className='f1'>Каталог</h3>
      <div className='catalog'>
        <div className='filter'>filter</div>
        <div className='goods'>
          <div className="row">
            {products.map(renderProducts)}
          </div>
          <div id='react-paginate'>
            {
              paginationError || paginationLoading
              ? null
              : <ReactPaginate
                pageCount={2}
                forcePage={page}
                onPageChange={({ selected }) => Router.push(`/catalog?page=${selected}`)}
                pageRangeDisplayed={4}
                marginPagesDisplayed={allProducts.length}
                activeLinkClassName='selected'
              />
            }
          </div>
        </div>
        <style>{`
          .catalog {
            margin-top: ${isMobile ? '40px' : '10px'};
            margin-bottom: 10px;
            display: flex;
            flex-direction: ${isTablet ? 'column' : 'row'}
          }
          .filter {
            flex: 0 0 300px;
          }
          .goods {
            flex: 1;
          }
          .row {
            flex-wrap: wrap;
            width: 100%;
            min-height: 300px;
          }
          .column {
            flex: 0 0 40%;
            margin: 0 5%;
          }
          #react-paginate ul {
            display: flex;
            justify-content: center;
            padding-left: 0;
            list-style: none;
            border-radius: .25rem;
          }
          #react-paginate li {
            display: inline-block;
            cursor: pointer;
            padding: 5px;
          }
          #react-paginate li a {
            transition: all .3s linear;
            outline: 0;
            border: 0;
            background-color: transparent;
            font-size: .9rem;
            padding: 10px;
            color: #212529;
          }
          #react-paginate li a:hover {
            transition: all .3s linear;
            border-radius: .125rem;
            background-color: #eee;
          }
          #react-paginate li a.selected {
            background-color: #4285f4;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
            transition: all .2s linear;
            border-radius: .125rem;
            background-color: #4285f4;
            color: #fff;
          }
          // CSS only media query for tablet
          @media screen and (max-width: 960px) {
            .row {
              flex-direction: column;
              margin: -1.5rem 0;
            }
            .column {
              width: 100%;
              padding: 1.5rem 0;
              text-align: center;
              max-width: 350px;
            }
          }
        `}</style>
      </div>
    </>
  )
}