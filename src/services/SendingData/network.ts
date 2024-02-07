
import Data from "../../models/Data";
const PAGE_SIZE = 15;

const Total_Pages=Data.length-2;
const pagenumber=0;

const fetchBooks=async (pages:number)=>{
       
   const temp=Data.slice(pages*PAGE_SIZE+1,pages*PAGE_SIZE+16);
   return temp;

}

export default fetchBooks;