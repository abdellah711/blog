import * as Styled from './styles'
import { FC } from 'react'
import { IArticle } from 'types/article'
import Link from 'next/link';


interface Props {
  posts: IArticle[];
}

const RecentPosts: FC<Props> = ({ posts }) => {
  return (
    <Styled.Card>
      <h2>Recent Posts</h2>
      <Styled.List>
        {posts.map(post => (<Post post={post} key={post.slug} />))}
      </Styled.List>
    </Styled.Card>
  )
}


const Post: FC<{ post: IArticle }> = ({ post }) => {
  return (
    <Link href={`article/${post.slug}`} passHref>
      <Styled.ListItem>
        <img src={post.image.url} style={{ borderRadius: 12, padding: 0 }} width="50" height={50} />
        <p>{post.title}</p>
      </Styled.ListItem>
    </Link>
  )

}

export default RecentPosts