const coding = [1,2,3,4,5,6]
const values = coding.forEach((item)=>{
//   console.log(item);
  return item
})
console.log(values);

// NOTE : FOR EACH LOOP DO NOT RETURN ANY VALUE 
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((element)=>{
   return element > 5
})
const newNums1 = myNums.filter((element)=>(
    element > 5
))
console.log(newNums);
console.log(newNums1);

// NOTE : AGAR (one)=>(two) aesa hai to two wale bracket mein return statement likhne ki koi jarurat nhi 
// NOTE : AGAR (one)=>{return two} aesa hai to two wale bracket mein return statement likhna padta hai 


const newNums3 = [];
myNums.forEach((num)=>{
    if(num>4){
        newNums3.push(num)
    }
})

console.log(newNums3);

const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      pages: 281,
      isbn: "978-0-06-112008-4"
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      pages: 328,
      isbn: "978-0-452-28423-4"
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      year: 1813,
      pages: 279,
      isbn: "978-0-19-953556-9"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      year: 1925,
      pages: 180,
      isbn: "978-0-7432-7356-5"
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure",
      year: 1851,
      pages: 635,
      isbn: "978-0-14-243724-7"
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      genre: "Historical",
      year: 1869,
      pages: 1225,
      isbn: "978-0-14-303999-0"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      year: 1951,
      pages: 277,
      isbn: "978-0-316-76948-0"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1937,
      pages: 310,
      isbn: "978-0-618-00221-3"
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      genre: "Dystopian",
      year: 1953,
      pages: 158,
      isbn: "978-0-7432-4722-4"
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      genre: "Romance",
      year: 1847,
      pages: 500,
      isbn: "978-0-14-243720-9"
    }
  ];

  const bookFilter = books.filter((item)=>{
    return item.year>=1960 && item.genre==="Fiction"
  })
  
  console.log(bookFilter);

