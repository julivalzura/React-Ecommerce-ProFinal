import Brand from './Brand'
import ItemListContainer from './ItemsListContainer'
import CartWidget from './CartWidget'
import ContainerCart from './ContainerCart'
import ContextCart from './ContextCart'

const NavBar = () => {
  return (
    <ContextCart>
      <header>
        <div className="containerBrand">
          <Brand />
        </div>

        <nav className="containerItemList">
          <ItemListContainer
            itemUno="Tintos"
            itemDos="Rosados"
            itemTres="Blancos"
            itemCuatro="Espumantes"
          />
        </nav>

        <div className="containerCart">
          <CartWidget />
        </div>

        <ContainerCart />
      </header>
    </ContextCart>
  )
}

export default NavBar
