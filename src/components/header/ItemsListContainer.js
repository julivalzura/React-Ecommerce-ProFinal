import { Link } from 'react-router-dom'

const ItemListContainer = props => {
  return (
    <ul>
      <li style={{ color: 'white' }}>
        <Link to="category/Tinto">{props.itemUno}</Link>
      </li>

      <li>
        <Link to="category/Rosado">{props.itemDos}</Link>
      </li>

      <li>
        <Link to="category/Blanco">{props.itemTres}</Link>
      </li>

      <li>
        <Link to="category/Espumante">{props.itemCuatro}</Link>
      </li>
    </ul>
  )
}

export default ItemListContainer
