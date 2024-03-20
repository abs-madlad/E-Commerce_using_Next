"use client"
import React from 'react'
import {Provider} from "react-redux"
import store from './Store'
import Counter from '../components/Counter'
import ProductCard from '../components/body/ProductCard'

const Prvider= ({children})=> {
    return(
        <Provider store={store}>
            {children}
            {/* <Counter />
            <ProductCard /> */}
        </Provider>
    )
}

export default Prvider