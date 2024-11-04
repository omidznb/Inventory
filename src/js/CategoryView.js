// title , description 
import Storage from "./Storage.js";

const categoryTitle = document.querySelector('#category-title');
const categoryDescription = document.querySelector('#category-description');
const addNewCategoryBtn = document.querySelector('#add-new-category')
const toggleAddCategoryBtn = document.getElementById('toggle-add-category')
const categoryWrapper = document.getElementById('category-wrapper')
const cancelAddCategory = document.getElementById('cancel-add-category')


class CategoryView{
    constructor(){
        addNewCategoryBtn.addEventListener('click', (e) => this.addNewCategory(e))
        toggleAddCategoryBtn.addEventListener('click',(e)=> this.toggleAddCategory(e))
        cancelAddCategory.addEventListener('click',(e)=> this.cancelAddCategory())
        this.categories=[]
    }

    addNewCategory(e){
     e.preventDefault();
     const title = categoryTitle.value;
     const description = categoryDescription.value
     if(!title || !description) return;
     Storage.saveCategory({title , description})
     this.categories = Storage.getAllCategories()
     //update Dom : updating select option on DOM:
     this.creatCategoiresList()
     categoryTitle.value='';
     categoryTitle.value=''
     categoryWrapper.classList.add('hidden');
     toggleAddCategoryBtn.classList.remove('hidden')


    }

    setApp(){
        this.categories = Storage.getAllCategories()
    }

    creatCategoiresList(){
        let result = `<option class = "bg-slate-300 text-slate-300" value-"">select a category</option>`
        this.categories.forEach(element =>{
         result +=  `<option class = "bg-slate-300 text-slate-300" value-${element.id}>${element.title}</option>`    
        });

       const categoryDOM=  document.getElementById("product-category")
       categoryDOM.innerHTML= result
    }

    toggleAddCategory(e){
     e.preventDefault()
     categoryWrapper.classList.remove('hidden');
     toggleAddCategoryBtn.classList.add('hidden')
    }

    cancelAddCategory(e){
    e.preventDefault()
    categoryWrapper.classList.add('hidden');
    toggleAddCategoryBtn.classList.remove('hidden')
    }

    
}


export default new CategoryView();