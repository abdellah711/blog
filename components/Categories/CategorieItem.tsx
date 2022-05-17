import Link from 'next/link'
import { FC } from 'react'
import { ICategorie } from 'types/categorie'
import { Item } from './styles'



const CategorieItem: FC<{ categorie: ICategorie }> = ({ categorie }) => {

    return (
        <Link href={'/page/1?c='+categorie.slug} passHref>
            <Item>
                <img src={categorie.image.url} alt={categorie.name} />
                <p>{categorie.name}</p>
            </Item>
        </Link>
    )
}

export default CategorieItem