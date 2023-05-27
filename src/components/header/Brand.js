import brand from '../../img/brand2.svg'
import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <Link to="/">
      <img src={brand} alt="Tienda Hard" title="Tienda Hard"></img>
    </Link>
  )
}

export default Brand
