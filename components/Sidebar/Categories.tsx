import { ICategorie } from 'types/categorie'
import * as Styled from './styles'
import Link from 'next/link'
import { CATEGORIES_SIDEBAR_COUNT } from 'config/variables'
import { FC } from 'react'

interface Props {
  categories: ICategorie[];
}

const Categories: FC<Props> = ({ categories }) => {

  return (
    <Styled.Card>
      <h2>Categories</h2>

      <ul>
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
    <Link href={`/page/1?c=${categorie.slug}`} passHref>
      <Styled.ListItem>
        <img src={categorie.image.url} width="50" height="50" />
        <p>{categorie.name}</p>
      </Styled.ListItem>
    </Link>
  )
}


export default Categories