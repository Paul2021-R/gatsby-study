import React, { FunctionComponent } from 'react'
import Text from 'components/Text'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Home" />
      <Link to="/info/">Info</Link>
    </div>
    )
}
//Link 컴포넌트를 사용하여 해당 컴포넌트 로드시 해당하는 모든 링크를 찾은 후, 각 링크의 페이지를 미리 로드한다. 

export default IndexPage