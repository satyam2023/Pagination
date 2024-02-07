
import Data from "../../models/Data";
const PAGE_SIZE = 15;

const Total_Pages=Data.length-2;
const pagenumber=0;
        
// console.log("Total Length",Total_Pages);
// const fetchBooks = async (page:number) => {
//   try {
//     const response = await fetch(`https://www.zohoapis.com/books/v3/contacts?page=${page}&per_page=${PAGE_SIZE}`,
     
//    { headers: {
//         'Content-Type': 'application/json',
//         'Authorization':  'Zoho-oauthtoken 1000.41d9xxxxxxxxxxxxxxxxxxxxxxxxc2d1.8fccxxxxxxxxxxxxxxxxxxxxxxxx125f'
        

//       }}
    
//     );
//     const json = await response.json();
//     console.log("JSON Data::",json)
//     return json.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
const fetchBooks=async (pages:number)=>{
       
   const temp=Data.slice(pages*PAGE_SIZE+1,pages*PAGE_SIZE+16);
   return temp;

}

export default fetchBooks;