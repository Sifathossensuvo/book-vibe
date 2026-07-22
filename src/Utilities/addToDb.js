import { toast } from "react-toastify";

const getStoreReadList = () =>{
const storedListStr = localStorage.getItem('read-list');
if(storedListStr){
const storedlist = JSON.parse(storedListStr);
return storedlist;
}
else{
return [];

}

}


const addToStoredReadList =(id)=>{

const storedList = getStoreReadList();
if(storedList.includes(id)){
toast.error("Book Already Exists ❗❗❗");

}
else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr)
    toast.success("Book added successfully 🎉")
}

}


// Get Wishlist
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem("wish-list");

    if (storedWishListStr) {
        return JSON.parse(storedWishListStr);
    }

    return [];
};

// Add Wishlist
const addToStoredWishList = (id) => {

    const readList = getStoreReadList();
    const wishList = getStoredWishList();

    // যদি Read List-এ থাকে
    if (readList.includes(id)) {
        toast.warning("This book is already in your Read List!");
        return;
    }

    // যদি Wishlist-এ আগে থেকেই থাকে
    if (wishList.includes(id)) {
        toast.error("Book already exists in Wishlist!");
        return;
    }

    wishList.push(id);

    localStorage.setItem(
        "wish-list",
        JSON.stringify(wishList)
    );

    toast.success("Book added to Wishlist!");
};

export {
    addToStoredReadList,
    getStoreReadList,
    addToStoredWishList,
    getStoredWishList
};