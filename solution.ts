// const formatValue= (value : string  | number | boolen) => {
//     if( typeof value === "string"){
//         return value.toUpperCase();
//     }

//     if( typeof value === "number"){
//         return value * 10 ;
//     }
//      if( typeof value === "boolean"){
//         return !value ;
//     }

// }

// const getLength = (value : string | any[]) => {
//     if( typeof value === "string"){
//         return value.length;
//     }

//     if(Array.isArray(value)){
//         return value.length;
//     }
// }

// class Person {
//     name : string;
//     age : number;

//     constructor( name : string , age : number){
//         this.name = name;
//         this.age = age;
//     }

//       getDetails(): string{
//         return ` 'Name: ${this.name} , Age: ${this.age}' `
//     }
// }

// const person1 = new Person('John Doe', 30);

// const person2 = new Person('Alice', 25);

// interface Item{
//     title : string;
//     rating: number;
// }

// function  filterByRating(items : Item[]) : Item[]{
//     return items.filter(item=> item.rating >= 4)

// }

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// interface Users{
//     id: number;
//     name: string;
//     email:string;
//     isActive:boolean;
// }

// function  filterActiveUsers(users : Users[]) : Users[]{
//     return users.filter(user => user.isActive === true)
// }

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// interface Book {
//   title: string;
//   author: string;
//   publishedYear: number;
//   isAvailable: boolean;
// }

// function printBookDetails(book : Book): void {
//     const availabilty = book.isAvailable ? "Yes" : "No" ;

//     // console.log(
//     //     `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilty}`
//     // );

// }

// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook);

// function getUniqueValues(
//   arr1 : (string | number)[] ,
//   arr2 : ( string | number)[],
// ): (string | number)[] {
//     const result : (string | number)[]  = [];

//     // Add value  from arr1 if not exists
//     for ( let i = 0 ; i < arr1.length ; i++){
//       const value = arr1[i];
//       let exists = false ;

//       for(let j =0 ; j < arr1.length ; j++){
//        if(result[j] === value){
//         exists =true;
//         break;
//        }

//       }

//       if(!exists){
//         result.push(value);
//       }

//     }

//       // Add value from arr2 if not exists
//      for ( let i = 0 ; i < arr2.length ; i++){
//       const value = arr2[i];
//       let exists = false ;

//       for(let j =0 ; j < arr2.length ; j++){
//        if(result[j] === value){
//         exists =true;
//         break;
//        }

//       }

//       if(!exists){
//         result.push(value);
//       }

//     }

//     return result;

// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice (products : Product[] ){
     if (products.length === 0) return 0;

     return products.map(product => {
      const realPrice = product.price * product.quantity;

      if (product.discount !== undefined){
        const discountedPrice = (realPrice * product.discount)/100;
        return realPrice - discountedPrice;
      }

      return realPrice;
     } )
     .reduce((sum , price) => sum + price , 0); 

}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

