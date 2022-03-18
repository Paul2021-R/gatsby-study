import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'
import { PostListItemType } from 'types/PostItem.types'
import Footer from 'components/Common/Footer'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
  '42seoul': 5,
  etc: 10,
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  return (
    <Container>
      <GlobalStyle />
        <Introduction profileImage={ gatsbyImageData } />
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
        <PostList posts={edges} />
        <Footer />
    </Container>
    )
}
//Link 컴포넌트를 사용하여 해당 컴포넌트 로드시 해당하는 모든 링크를 찾은 후, 각 링크의 페이지를 미리 로드한다. 

export default IndexPage

export const getPostList = graphql`
query getPostList {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          summary
          date(formatString: "YYYY.MM.DD.")
          categories
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 768, height: 400)
            }
          }
        }
      }
    }
  }
  file(name: { eq: "profile-image" }) {
    childImageSharp {
      gatsbyImageData(width: 120, height: 120)
    }
  }
}

`