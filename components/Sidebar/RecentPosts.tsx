import * as Styled from './styles'
import { FC } from 'react'
import { IArticle } from 'types/article'
import Link from 'next/link';
import Image from 'next/image';


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
    <li>
      <Link href={`/article/${post.slug}`} passHref>
        <Styled.ListItem>
          <Styled.ImageContainer style={{ borderRadius: 12 }}>
            <Image src={post.image.url} sizes="100px" layout="fill" alt={post.title} objectFit="cover" />
          </Styled.ImageContainer>
          <p>{post.title}</p>
        </Styled.ListItem>
      </Link>
    </li>
  )

}

export default RecentPosts