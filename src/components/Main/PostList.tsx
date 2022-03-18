import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/Postitem'

const PostListWrapper = styled.div`
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    width: 1024px;
    margin: 0 0
    padding 50px 0 100px;
    align-self: center;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      width: 100%;
      grid-gap: 15px;
      padding: 50px 20px;
    }
`

const POST_ITEM_DATA = {
    title: 'Post Item Title',
    date: '2020.01.29.',
    categories: [ 'All','Web', 'Frontend', 'Testing'],
    summary:
      '오늘 하루도 신나게 살고 싶다. 내가 하고 싶은 도전을 해낼 수 있는 삶을 살고 싶다. 누구보다 뒤쳐지지 않은 나 자신이 될 수 있길 희망한다! ',
    thumbnail:
      'https://paul2021-r.github.io/static/cf5a08c22e7c4a5628b008d7869e4730/a11f2/profile.webp',
    link: 'https://paul2021-r.github.io/',
}

const PostList: FunctionComponent = function () {
    return (
    <PostListWrapper>
        <PostItem {...POST_ITEM_DATA} />
        <PostItem {...POST_ITEM_DATA} />
        <PostItem {...POST_ITEM_DATA} />
        <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
    )
}

export default PostList 