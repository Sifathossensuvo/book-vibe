import { toast } from 'react-toastify';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
const handelSeeList = ()=>{
  toast.warning("Hey bro.. scroll down please")
}

    return (
       <div class="hero bg-base-200 py-44 rounded-2xl">
  <div class="hero-content max-w-5xl flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      class="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 class="text-6xl font-bold" >Books to freshen up your bookshelf</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
          <button onClick={handelSeeList} class="btn btn-active bg-[#23BE0A] btn-success">View The List</button>

    </div>
  </div>
</div>
    );
};

export default Banner;