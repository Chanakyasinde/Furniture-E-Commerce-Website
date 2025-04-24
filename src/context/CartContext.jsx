// import { createContext, useContext, useReducer, useEffect } from 'react'

// const CartContext = createContext()

// const initialState = {
//   items: [],
//   totalItems: 0,
//   totalAmount: 0,
// }

// function cartReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_ITEM': {
//       const existingItemIndex = state.items.findIndex(
//         (item) => item.id === action.payload.id
//       )

//       if (existingItemIndex > -1) {
//         // Item exists, update quantity
//         const updatedItems = [...state.items]
//         updatedItems[existingItemIndex] = {
//           ...updatedItems[existingItemIndex],
//           quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
//         }

//         return {
//           ...state,
//           items: updatedItems,
//           totalItems: state.totalItems + action.payload.quantity,
//           totalAmount: state.totalAmount + (action.payload.price * action.payload.quantity),
//         }
//       } else {
//         // Add new item
//         return {
//           ...state,
//           items: [...state.items, action.payload],
//           totalItems: state.totalItems + action.payload.quantity,
//           totalAmount: state.totalAmount + (action.payload.price * action.payload.quantity),
//         }
//       }
//     }

//     case 'REMOVE_ITEM': {
//       const existingItem = state.items.find((item) => item.id === action.payload)
      
//       if (!existingItem) return state

//       if (existingItem.quantity === 1) {
//         // Remove item completely
//         return {
//           ...state,
//           items: state.items.filter((item) => item.id !== action.payload),
//           totalItems: state.totalItems - 1,
//           totalAmount: state.totalAmount - existingItem.price,
//         }
//       } else {
//         // Decrease quantity by 1
//         return {
//           ...state,
//           items: state.items.map((item) =>
//             item.id === action.payload
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//           ),
//           totalItems: state.totalItems - 1,
//           totalAmount: state.totalAmount - existingItem.price,
//         }
//       }
//     }

//     case 'DELETE_ITEM': {
//       const existingItem = state.items.find((item) => item.id === action.payload)
      
//       if (!existingItem) return state

//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//         totalItems: state.totalItems - existingItem.quantity,
//         totalAmount: state.totalAmount - (existingItem.price * existingItem.quantity),
//       }
//     }

//     case 'CLEAR_CART':
//       return initialState

//     default:
//       return state
//   }
// }

// export function CartProvider({ children }) {
//   const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
//     const savedCart = localStorage.getItem('cart')
//     return savedCart ? JSON.parse(savedCart) : initialState
//   })

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartState))
//   }, [cartState])

//   const addToCart = (product, quantity = 1) => {
//     dispatch({
//       type: 'ADD_ITEM',
//       payload: {
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.images[0],
//         quantity,
//       },
//     })
//   }

//   const removeFromCart = (productId) => {
//     dispatch({
//       type: 'REMOVE_ITEM',
//       payload: productId,
//     })
//   }

//   const deleteFromCart = (productId) => {
//     dispatch({
//       type: 'DELETE_ITEM',
//       payload: productId,
//     })
//   }

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' })
//   }

//   const value = {
//     cart: cartState.items,
//     totalItems: cartState.totalItems,
//     totalAmount: cartState.totalAmount,
//     addToCart,
//     removeFromCart,
//     deleteFromCart,
//     clearCart,
//   }

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
// }

// export const useCart = () => {
//   const context = useContext(CartContext)
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider')
//   }
//   return context
// }

import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (existingItemIndex > -1) {
        // Item exists, update quantity
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.payload.quantity,
        }

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + action.payload.quantity,
          totalAmount: state.totalAmount + (action.payload.price * action.payload.quantity),
        }
      } else {
        // Add new item
        return {
          ...state,
          items: [...state.items, action.payload],
          totalItems: state.totalItems + action.payload.quantity,
          totalAmount: state.totalAmount + (action.payload.price * action.payload.quantity),
        }
      }
    }

    case 'INCREMENT_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )
      
      if (existingItemIndex === -1) return state
      
      const updatedItems = [...state.items]
      const itemToUpdate = updatedItems[existingItemIndex]
      
      updatedItems[existingItemIndex] = {
        ...itemToUpdate,
        quantity: itemToUpdate.quantity + 1
      }

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + 1,
        totalAmount: state.totalAmount + itemToUpdate.price,
      }
    }

    case 'REMOVE_ITEM': {
      const existingItem = state.items.find((item) => item.id === action.payload)
      
      if (!existingItem) return state

      if (existingItem.quantity === 1) {
        // Remove item completely
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
          totalItems: state.totalItems - 1,
          totalAmount: state.totalAmount - existingItem.price,
        }
      } else {
        // Decrease quantity by 1
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalItems: state.totalItems - 1,
          totalAmount: state.totalAmount - existingItem.price,
        }
      }
    }

    case 'DELETE_ITEM': {
      const existingItem = state.items.find((item) => item.id === action.payload)
      
      if (!existingItem) return state

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - existingItem.quantity,
        totalAmount: state.totalAmount - (existingItem.price * existingItem.quantity),
      }
    }

    case 'CLEAR_CART':
      return initialState

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : initialState
    }
    return initialState
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartState))
    }
  }, [cartState])

  const addToCart = (product, quantity = 1) => {
    if (!product?.id || !product?.price) {
      console.error('Invalid product data:', product)
      return
    }
    
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || '',
        quantity,
      },
    })
  }
  
  const incrementItem = (productId) => {
    dispatch({
      type: 'INCREMENT_ITEM',
      payload: productId,
    })
  }

  const removeFromCart = (productId) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: productId,
    })
  }

  const deleteFromCart = (productId) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: productId,
    })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const value = {
    cart: cartState.items,
    totalItems: cartState.totalItems,
    totalAmount: cartState.totalAmount,
    addToCart,
    incrementItem,  // Add this new function
    removeFromCart,
    deleteFromCart,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}