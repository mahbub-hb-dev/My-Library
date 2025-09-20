import './App.css'
import Topbar from './components/Topbar'
import { Banner } from './components/Banner'
import FreeBooksAndDeals from './components/FreeBooksAndDeals'
import Genres from './components/Genres'
import EditorsChoice from './components/EditorsChoice'
import TrendingBooks from './components/TrendingBooks'
import ClassicBooks from './components/ClassicBooks'
import Blog from './components/Blog'
import AnswerAndQuestion from './components/AnswerAndQuestion'
import PromoteBooks from './components/PromoteBooks'
import Footer from './components/Footer'
import Phones from './components/Phones'


function App() {

  return (
    <>
      <Topbar />
      <Banner />
      <FreeBooksAndDeals />
      <Genres />
      <EditorsChoice />
      <TrendingBooks />
      <ClassicBooks />
      <Phones />
      <Blog />
      <AnswerAndQuestion />
      <PromoteBooks />
      <Footer />
    </>
  )
}

export default App
