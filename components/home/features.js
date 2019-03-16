import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import ErrorMessage from '../common/errorMessage'
import Category from '../shop/Category';
const CATEGORIES_QUERY = gql`
  {
    categories {
      _id
      name
      image {
        url
      }
      products {
        _id
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
  }
`

function renderCategory(cat) {
  return <Category
    key={cat._id}
    cat={cat}
  />
}

export default () => {
  const { loading, data, error } = useQuery(CATEGORIES_QUERY);
  if (loading) return <p>Loading</p>
  if (error) return <ErrorMessage error={error} />
  return data.categories
    .filter(obj => obj.products.length)
    .map(renderCategory)
};
