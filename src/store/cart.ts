import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '@/data/products'

export type CartItem = {
  key: string
  productId: string
  slug: string
  name: string
  price: number
  image: string
  color: string
  size: string
  qty: number
}

type CartState = {
  items: CartItem[]
  isCartOpen: boolean
  isSearchOpen: boolean
  openCart: () => void
  closeCart: () => void
  openSearch: () => void
  closeSearch: () => void
  addItem: (product: Product, color: string, size: string, qty?: number) => void
  removeItem: (key: string) => void
  updateQty: (key: string, qty: number) => void
  clearCart: () => void
  count: () => number
  subtotal: () => number
}

const makeKey = (productId: string, color: string, size: string) =>
  `${productId}__${color}__${size}`

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      isSearchOpen: false,
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      openSearch: () => set({ isSearchOpen: true }),
      closeSearch: () => set({ isSearchOpen: false }),
      addItem: (product, color, size, qty = 1) => {
        const key = makeKey(product.id, color, size)
        const items = [...get().items]
        const existing = items.find((i) => i.key === key)
        if (existing) {
          existing.qty += qty
        } else {
          items.push({
            key,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.image,
            color,
            size,
            qty,
          })
        }
        set({ items, isCartOpen: true })
      },
      removeItem: (key) =>
        set({ items: get().items.filter((i) => i.key !== key) }),
      updateQty: (key, qty) => {
        if (qty <= 0) {
          set({ items: get().items.filter((i) => i.key !== key) })
          return
        }
        set({
          items: get().items.map((i) => (i.key === key ? { ...i, qty } : i)),
        })
      },
      clearCart: () => set({ items: [] }),
      count: () => get().items.reduce((s, i) => s + i.qty, 0),
      subtotal: () => get().items.reduce((s, i) => s + i.qty * i.price, 0),
    }),
    { name: 'mci-marct-cart' }
  )
)
