import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import CategoryList from 'components/Main/CategoryList'
import PostList from 'components/Main/PostList'
import Footer from 'components/Common/Footer'

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

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
        <Introduction />
        <CategoryList selectedCategory="All" categoryList={CATEGORY_LIST} />
        <PostList />
        <Footer />
    </Container>
    )
}
//Link 컴포넌트를 사용하여 해당 컴포넌트 로드시 해당하는 모든 링크를 찾은 후, 각 링크의 페이지를 미리 로드한다. 

export default IndexPage