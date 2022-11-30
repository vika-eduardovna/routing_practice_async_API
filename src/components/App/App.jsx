import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/index'
import About from '../../pages/About/index'
import Categories from '../../pages/Categories/index'
import NotFound from '../../pages/NotFound/index'
import Layout from '../Layout'
import Products from '../../pages/Products'
import DescriptionCard from '../DescriptionCard'


function App() {
  return (
    < >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='product/:category' element={<Products/>}/>
          <Route path='product/:' element={<DescriptionCard/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
