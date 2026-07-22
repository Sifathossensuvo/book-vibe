import { Link } from "react-router-dom";

const Book = ({book}) => {
const {bookName, author, image, category, totalPages, bookId, rating} = book;

    return (
<Link to={`/books/${bookId}`}>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="m-5.5 rounded-2xl"> 
    <img
    className="h-80 w-full object-cover"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex">
      <button className="btn rounded-3xl mr-4">Book Id: {bookId}</button>
    <button className="btn rounded-3xl">{totalPages} pages</button>
    </div>
    <h2 className="card-title font-bold text-2xl">
      
    {bookName}
      
    </h2>
    
    <p className="text-lg font-bold text-[#151414c5]">By: {author}</p>
    <div className="">
   <div className="border-dashed border-t-2 border-[#c7c1c190] h-1 w-full"></div>
<div className="flex justify-between items-center mt-3.5">
 <h2 className="text-sm font-bold text-[#222121d4]">{category}</h2>
 <div className=" flex items-center gap-3">
  <h1 className="font-bold text-[#403d3dcb]">{rating}</h1>
 <div className="rating">
   <div class="mask mask-star" aria-label="1 star"></div>
 </div>

  </div>


</div>

    </div>
  </div>
</div>

</Link>
    );
};

export default Book;