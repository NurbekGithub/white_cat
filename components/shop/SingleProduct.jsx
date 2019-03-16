import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Head from 'next/head';
import ImageGallery from 'react-image-gallery';
import ReactMarkdown from 'react-markdown';
import ErrorMessage from '../common/errorMessage';
import { BASE_URL } from '../../config';
import 'react-image-gallery/styles/css/image-gallery.css';

export const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
      product(id: $id) {
        _id,
        name,
        description,
        image {
          url
        },
        manufacturer {
          name,
          country
          icon {
            url
          }
        }
      }
    }
`;

function SingleProduct({ id }) {
  const { data: { product }, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, { variables: {id} });
  if (loading) return <p>Loading</p>
  if (error) return null && <ErrorMessage error={error} />

  // set images
  const images = product.image
    .map(img => ({
      original: BASE_URL + img.url,
      thumbnail: BASE_URL + img.url
    }));

  return (
    <div className='singleProduct'>
      <Head><title>{product.name}</title></Head>
      <div style={{ width: '50%', minWidth: '300px', margin: '0 auto' }}>
        <ImageGallery
          showThumbnails={images.length > 1}
          showNav={false}
          autoPlay={true}
          showPlayButton={false}
          items={images}
          showFullscreenButton={false}
        />
      </div>
      <div className='singleProduct__desc'>
        <h2 className='f2'>{product.name}</h2>
        <p className="f-reset">
          <ReactMarkdown source={product.description} />
        </p>
        <div className='manufactorer'>
          <h3 className='f4'>Производитель: </h3>
          <h4 className='f4'>{product.manufacturer.name}</h4>
        </div>
        <h5 className='f5'>Страна: {product.manufacturer.country} <img src={BASE_URL + product.manufacturer.icon.url}/></h5>
      </div>
      <style jsx>{`
        .manufactorer {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }
        .manufactorer h3 {
          margin-right: 10px;
        }
        .manufactorer h4 {
          margin: 0;
          display: flex;
          align-items: center;
        }
        h5 {
          margin: 0;
          display: flex;
          align-items: center;
        }
        h5 img {
          width: 20px;
          margin-left: 5px;
        }
      `}</style>
    </div>
  );
};

export default SingleProduct;