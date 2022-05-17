import { FC } from "react";
import { ICategorie } from "types/categorie"
import CategorieItem from "./CategorieItem";
import { Grid } from "./styles";


interface Props {
    categories: ICategorie[];
}

const CategoriesList: FC<Props> = ({ categories }) => {
    return (
        <Grid>{categories.map(categorie => (<CategorieItem key={categorie.slug} categorie={categorie} />))}</Grid>
    )
}

export default CategoriesList