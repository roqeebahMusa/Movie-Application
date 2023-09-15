import Header from '../Blocks/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Blocks/Footer'

const Weblayouts = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Weblayouts