import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CollectionPreview from "../components/categories/collection-preview"
import ProductListItem from "../components/products/product-list-item"
import Grid from "../components/utility/grid"
import SearchEngineOptimization from "../components/utility/seo"
import { useCollections } from "../hooks/use-collections"

const IndexPage = ({ data }) => {
  const { products, collections } = data
  const prods = data.products.edges.map(edge => edge.node)
  const collectionPreviews = useCollections(collections, products)

  return (
    <div>
      <SearchEngineOptimization title="Home" />
      <section className="hero relative min-h-[700px]">
        <div className="hero-background absolute top-0 left-0 w-full h-full bg-primary "></div>
        <div className="container">
          <h1>Heading 1</h1>
        </div>
      </section>

      <section className="features">
        <div className="container">Features</div>
      </section>

      <section className="block-image-content">
        <div className="container">Block image with content</div>
      </section>

      <section className="block-image">
        <div className="container">Block three images</div>
      </section>

      <section className="testimonials">
        <div className="container">Testimonials</div>
      </section>

      <section className="block-map">
        <div className="container">Map</div>
      </section>
    </div>
  )
}
export const query = graphql`
  query {
    products: allMedusaProducts {
      edges {
        node {
          handle
          title
          collection_id
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          variants {
            prices {
              amount
              currency_code
            }
          }
        }
      }
    }
    collections: allMedusaCollections {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`

export default IndexPage
