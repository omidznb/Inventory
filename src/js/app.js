//target
// 1. create category
// 2. create product based on selected category
// 3. edit product
// 4. remove product
// 5. save product in local storage

// -> storage calll for handle application methods
// -> prductviie calss
// -> categoryView
// -> main and app class
// ---------------------------------------

import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";


document.addEventListener('DOMContentLoaded', ()=>{
    // setapp categories for first time :
    CategoryView.setApp();
    ProductView.setApp()
    console.log(CategoryView);
    //creat categories Options
    CategoryView.creatCategoiresList()
    // 
    ProductView.creatProductsList(ProductView.products )

})