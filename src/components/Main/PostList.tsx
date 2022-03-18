import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/Postitem'
import { PostListItemType } from 'types/PostItem.types'

export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string
      }
    }
  }
}

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

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
    return (
    <PostListWrapper>
     {posts.map(
        ({
          node: { id, frontmatter },
        }: PostType) => (
          <PostItem
            {...frontmatter}
            link="https://www.google.co.kr/"
            key={id}
          />
        ),
      )}
    </PostListWrapper>
    )
}

export default PostList 