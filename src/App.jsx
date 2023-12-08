import React from 'react'
import ComponenteNavBar from './components/ComponenteNavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
const greeting="Bienvenido a nuestro ecommerce"

  return (
    <div>
      <ComponenteNavBar/>
      <ItemListContainer
      greeting={greeting}
      />
    </div>
  )
}

export default App