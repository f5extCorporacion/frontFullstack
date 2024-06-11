import create from "zustand";

// Definimos el estado inicial y las acciones de la tienda
const useStore = create((set) => ({
  post: [],
  getPost: () => Promise,

  getPost: async () => {
    await fetch("http://localhost:3001/user");
    const post = await res.json();
    console.log(post);
  },
}));

export default useStore;
