const products = [
    {
      id: 1,
      title: "React.js",
      category: "frontend",
      createdAt: "2021-10-31T15:02:00.411Z",
    },
    {
      id: 2,
      title: "Node.js",
      category: "backend",
      createdAt: "2021-10-31T15:03:23.556Z",
    },
    {
      id: 3,
      title: "Vue.js",
      category: "frontend",
      createdAt: "2021-11-01T10:47:26.889Z",
    },
  ];
  
  const categories = [
    {
      id: 1,
      title: "frontend",
      description: "frontend of applications",
      createdAt: "2021-11-01T10:47:26.889Z",
    },
    {
      id: 2,
      title: "backend",
      description: "the backend of the applications",
      createdAt: "2021-10-01T10:47:26.889Z",
    },
  ];
 
 
 
 
 export default class Storage {
// add new categoru
// save category
// getAllCategories   

static getAllCategories() {
// product , category => localStorage =>
const savedCategories = JSON.parse(localStorage.getItem('category')) || []; 
//sort => desending
const sortedCategories = savedCategories.sort((a,b) =>{
    return new Date(a.createdAt) > new Date(b.createdAt ) ? -1 : 1 ;
});
return sortedCategories;

}

static saveCategory(categoryToSave){
    const savedCategories = Storage.getAllCategories();
    // edid => be saved 
    //new ==> be saved 
   const existedItem= savedCategories.find((c)=> c.id === categoryToSave.id);
   if(existedItem){
   //for editing 
   existedItem.title = categoryToSave.title;
   existedItem.description = categoryToSave.description
   }else{
    // for creating new 
    categoryToSave.id = new Date().getTime();
    categoryToSave.createdAt= new Date().toISOString;
    savedCategories.push(categoryToSave)
   }
   localStorage.setItem("category",JSON.stringify(savedCategories))
}
static getAllproduct(sort = "newest"){
    // product , category => localStorage =>
const savedproducts = JSON.parse(localStorage.getItem('products')) || []; 
//sort => desending
return savedproducts.sort((a,b)=>{
    if(sort=== "newest"){
      return new Date(a.createdAt) > new Date(b.createdAt ) ? 1 : -1 ;
    }
    else if(sort="oldest"){
      return new Date(a.createdAt) > new Date(b.createdAt ) ? -1 : 1 ;
    }
});

}

static saveProducts(productToSave){
    const savedproducts = Storage.getAllproduct();
    // edid => be saved 
    //new ==> be saved 
   const existedItem= savedproducts.find((c)=> c.id === productToSave.id);
   if(existedItem){
   //for editing 
   existedItem.title = productToSave.title;
   existedItem.quantity = productToSave.quantity
   existedItem.category= productToSave.category
   }else{
    // for creating new 
    productToSave.id = new Date().getTime();
    productToSave.createdAt= new Date().toISOString;
    savedproducts.push(productToSave)
   }
   localStorage.setItem("products",JSON.stringify(savedproducts))
}
static deleteProduct(id){
  const savedProducts = Storage.getAllproduct();
  console.log(typeof id);
  const filteredProducts= savedProducts.filter((p)=> p.id != parseInt(id)); // for converting to number
  localStorage.setItem('products',JSON.stringify(filteredProducts))


}
}