import { create } from 'zustand';

let store = (set) => ({
    currentCategory: 'all',
    setCurrentCategory: (category) => set({ currentCategory: category }),
    priceFilter: 'highToLow',
    setPriceFilter: (price) => set({ priceFilter: price }), 
    currentSearch: '',
    setInputValue: (value) => set({currentSearch: value})
})



export default store = create(store);