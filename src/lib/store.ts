import { create } from 'zustand';

interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;
}

interface ProductDetails {
  id: string;
  title: string;
  price: string;
  category: string;
  size: string;
  description: string;
}

interface CartStore {
  // Cart State
  items: CartItem[];
  totalItems: number;
  isCartOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  toggleCart: () => void;
  openCart: () => void;   // Added explicitly
  closeCart: () => void;  // Added explicitly
  
  // Modal State
  isModalOpen: boolean;
  selectedProduct: ProductDetails | null;
  openModal: (product: ProductDetails) => void;
  closeModal: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  // Cart Initial State
  items: [],
  totalItems: 0,
  isCartOpen: false,
  
  // Modal Initial State
  isModalOpen: false,
  selectedProduct: null,

  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      return {
        items: state.items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
        totalItems: state.totalItems + 1,
        isCartOpen: true
      };
    }
    return { 
      items: [...state.items, { ...item, quantity: 1 }],
      totalItems: state.totalItems + 1,
      isCartOpen: true
    };
  }),

  removeItem: (id) => set((state) => {
    const itemToRemove = state.items.find(i => i.id === id);
    if (!itemToRemove) return state;
    return {
      items: state.items.filter(i => i.id !== id),
      totalItems: state.totalItems - itemToRemove.quantity
    };
  }),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),    // Forces open
  closeCart: () => set({ isCartOpen: false }),  // Forces closed
  
  openModal: (product) => set({ isModalOpen: true, selectedProduct: product }),
  closeModal: () => set({ isModalOpen: false, selectedProduct: null }),
}));