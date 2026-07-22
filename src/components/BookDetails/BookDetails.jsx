import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utilities/addToDb";

const BookDetails = () => {
const {bookID} = useParams();


const data = useLoaderData();
const id = parseInt(bookID);

// const book = data.find(book => book.bookId === id)
const book = data.find(book => book.bookId === id)
// console.log(book)

const {bookId, bookName, author, image, review, category, tags} = book;

const handelMarkAsRead = (id) =>{


    addToStoredReadList(id)
}

const handelWishlist = (id) =>{
    addToStoredWishList(id)
}

    return (
        <div className=" md:flex justify-center my-12 gap-8">
           <div className="bg-[#33313116] rounded-2xl md:w-1/2 py-12">
            <img className="h-96 text-center w-1/2 mx-auto" src={image} alt="" />
           </div>
{/* content */}
<div className="md:w-1/2">
<h1 className=" text-5xl font-bold">{bookName}</h1>
<h2 className="text-xl font-bold mt-2 mb-2 text-[#1f1d1daa]">By: {author}</h2>
   <div className="border-dashed border-t-2 border-[#c7c1c190] h-1 w-full"></div>

<h2 className="text-xl font-bold mt-2 mb-2 text-[#1f1d1dbf]">{category}</h2>
   <div className="border-dashed border-t-2 border-[#c7c1c190] h-1 w-full"></div>
<p><span className="text-[#000000d2] font-bold ">Review: </span><span className="text-[#000000a0]">{review}</span></p>
   <div className="border-dashed border-t-2 border-[#c7c1c190] h-1 w-full mt-3"></div>
  <button onClick={()=> handelMarkAsRead(id)} className="btn btn-neutral btn-outline mt-5 mr-7">Mark as read</button>
<button onClick={()=> handelWishlist(id)} className="btn btn-active btn-info mt-5">Add to Wishlist</button>

</div>

        </div>
    );
};

export default BookDetails;
