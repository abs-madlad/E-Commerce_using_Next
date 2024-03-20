"use client"
import Image from "next/image";
import Header from "./components/Header";
import Mid from "./components/body/Mid"
import WinterUniform from "./components/body/WinterUniform"
import Reuse from "./components/body/Reuse";
import Dd from "./components/footer/cc"
import Carousel from './components/body/Carousel'
import { Provider } from "react-redux";
import AltBlue from "./components/header/AltBlue";
import Filter from "./components/extra/Filter";
import store from "./Redux/Store";
import ProductCard from "./components/body/ProductCard";

// import ProductCard from "./components/body/ProductCard";

export default function Home() {
  return (
   <div className=" bg-white">
    <Provider store={store}>
    <Header />
    {/* <Filter /> */}
    <Carousel />
    <Mid />
    <Reuse />
    <Dd />
    </Provider>
   </div>
  );
}
