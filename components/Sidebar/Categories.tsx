import { ICategorie } from 'types/categorie'
import * as Styled from './styles'
import Link from 'next/link'
import { CATEGORIES_SIDEBAR_COUNT } from 'config/variables'
import { FC } from 'react'
import Image from 'next/image'

interface Props {
  categories: ICategorie[];
}

const Categories: FC<Props> = ({ categories }) => {

  return (
    <Styled.Card>
      <h2>Categories</h2>

      <ul style={{listStyle:'none'}}>
        {categories.map(categorie => (<Categorie key={categorie.slug} categorie={categorie} />))}

        {
          categories.length === CATEGORIES_SIDEBAR_COUNT &&
          <Link href="/categories/">
            <Styled.ShowMore>Show more</Styled.ShowMore>
          </Link>
        }
      </ul>
    </Styled.Card>
  )
}




const Categorie: FC<{ categorie: ICategorie }> = ({ categorie }) => {
  return (
    <li>
      <Link href={`/page/1?c=${categorie.slug}`} passHref>
        <Styled.ListItem>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '50%',
            padding: '.2rem',
            overflow: 'hidden',
          }}>

            <Styled.ImageContainer>
              <Image src={categorie.image.url} quality={100} sizes="80px" alt={categorie.name} layout="fill" objectFit='cover' />
            </Styled.ImageContainer>
          </div>
          <p>{categorie.name}</p>
        </Styled.ListItem>
      </Link>
    </li>
  )
}


export default Categories