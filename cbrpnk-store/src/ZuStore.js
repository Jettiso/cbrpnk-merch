import { create } from 'zustand';

let store = (set) => ({
    currentCategory: 'all',
    setCurrentCategory: (category) => set({ currentCategory: category }),
})

export default store = create(store);