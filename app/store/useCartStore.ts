// src/stores/useCartStore.ts
import { create } from "zustand";

// 1️⃣ Define the shape of a cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// 2️⃣ Define the shape of the store (state + actions)
interface CartStore {
  cartItems: CartItem[];

  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string | number) => void;
  updateQuantity: (id: string | number, newQty: number) => void;
  incrementQuantity: (id: string | number) => void;
  decrementQuantity: (id: string | number) => void;
  clearCart: () => void;

  calculateSubtotal: () => number;
  calculateTotal: () => number;
}

// 3️⃣ Create the store with type parameter
export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, newQty) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      ),
    })),

  incrementQuantity: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 } // just add 1
          : item
      ),
    })),

  decrementQuantity: (id) =>
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (!existingItem) return state;

      if (existingItem.quantity > 1) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      } else {
        return {
          cartItems: state.cartItems.filter((item) => item.id !== id),
        };
      }
    }),

  clearCart: () => set({ cartItems: [] }),

  calculateSubtotal: () => {
    const { cartItems } = get();
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },

  calculateTotal: () => {
    const subtotal = get().calculateSubtotal();
    const tax = subtotal * 0.1; // change to your tax logic
    return subtotal + tax;
  },
}));
