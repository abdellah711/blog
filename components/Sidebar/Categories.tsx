import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import { getCategories } from 'services/categories'
import { ICategorie } from 'types/categorie'
import * as Styled from './styles'
import Link from 'next/link'
import { ProgressBar, ProgressContainer } from 'styles/progress.styled'

const Categories = () => {
  const [categories, setCategories] = useState<ICategorie[] | null>(null)

  useEffect(() => {
    (async () => {
      const categories = await getCategories()
      setCategories(categories)
    })()

  }, [])

  return (
    <Styled.Card>
      <h2>Categories</h2>

      {categories ? (
        <ul>
          {categories.map(categorie => (<Categorie key={categorie.slug} categorie={categorie} />))}
        </ul>
      )
        : (

          <ProgressContainer>
            <ProgressBar />
          </ProgressContainer>
        )
      }
    </Styled.Card>
  )
}



interface Props {
  categorie: ICategorie;
}

const Categorie: FC<Props> = ({ categorie }) => {
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