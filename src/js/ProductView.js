import Storage from "./Storage.js";

const addNewProductBtn = document.getElementById('add-new-product')
const searchInput = document.getElementById('search-input')
const selectedSort = document.querySelector('#sort-products')

class ProductView{
constructor(){
addNewProductBtn.addEventListener('click',(e)=>this.addNewProduct(e))
searchInput.addEventListener('input' , (e)=> this.searchInput(e))
selectedSort.addEventListener('change', (e)=> this.sortProduct(e))
this.products=[]
}

setApp(){
 this.products = Storage.getAllproduct()
}

addNewProduct(e){
e.preventDefault();
const title = document.getElementById('product-title').value;
const quantity = document.getElementById('product-quantity').value;
const Category = document.getElementById('product-category').value

if(! title || !Category || !quantity) return ;
Storage.savedProducts({title , Category ,quantity});
this.products= Storage.getAllproduct()
console.log(this.products);
this.creatProductsList(this.products)
}

creatProductsList(products){

let result =''
products.forEach(item => {
  const selectedCategory = Storage.getAllCategories().find(c => c.id == item.Category )

    result += `<div class="flex items-center justify-between mb-2 w-full min-w-[400px]">
    <span class="text-slate-400">${item.title}</span>
    <div class="flex items-center gap-x-3">
      <span class="text-slate-400">${new Date().toLocaleDateString("fa-IR")}</span>
      <span class="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">${
        selectedCategory.title
      }</span>
      <span
        class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">${
          item.quantity
        }</span>
      <button class="delete-product border px-2 py-o.5 rounded-2xl border-red-400 text-red-400 delete-product" 
      data-product-id=${item.id}>delete</button>
    </div>
  </div>`;
  });

  const productsDOM = document.getElementById('products-list');
  productsDOM.innerHTML = result;

}

searchInput(e){
const value = e.target.value.trim().toLowerCase()
const filteredProducts= this.products.filter(p => p.title.toLowerCase().includes(value))
this.products = filteredProducts
this.creatProductsList()

}

sortProduct(e){
const value = e.target.value;
this.products = Storage.getAllproduct(value);
this.creatProductsList(this.products)
}


}

export default new ProductView