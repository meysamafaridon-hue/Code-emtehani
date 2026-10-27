import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import CartPage from '@/pages/CartPage'
import Checkout from '@/pages/Checkout'
import Collections from '@/pages/Collections'
import CustomDesign from '@/pages/CustomDesign'
import SearchResults from '@/pages/SearchResults'
import Account from '@/pages/Account'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import FAQ from '@/pages/FAQ'
import Shipping from '@/pages/Shipping'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import SizeGuide from '@/pages/SizeGuide'
import NotFound from '@/pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:filter" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<Collections />} />
          <Route path="/create-yours" element={<CustomDesign />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  )
}
