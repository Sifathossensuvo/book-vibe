import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utilities/addToDb';
import Book from '../Book/Book';
import {
  getStoredWishList
} from "../../Utilities/addToDb";



const ListedBooks = () => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const allBooks = useLoaderData();

    useEffect(() => {

        const storedReadList = getStoreReadList();

        console.log(storedReadList, allBooks);

        const readBookList = allBooks.filter(book =>
            storedReadList.includes(book.bookId)
        );

        setReadList(readBookList);

          // Wishlist
    const storedWishList = getStoredWishList();

    const wishBookList = allBooks.filter(book =>
        storedWishList.includes(book.bookId)
    );

    setWishList(wishBookList);


    }, [allBooks]);

    return (
        <div className='mb-16'>
            <h3 className="text-3xl my-7 text-center">Listed Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-2xl font-bold my-10 text-right">Books I Read: {readList.length}</h2>
<div className='grid justify-center gap-8'>
                   {
readList.map(book => <Book book={book}></Book>)

               }
</div>
               
                </TabPanel>

                <TabPanel>
                                        <h2 className="text-2xl font-bold my-10 text-right">My wishlist: {wishList.length}</h2>


                        <div className="grid justify-center gap-8">
        {
            wishList.map(book => (
                <Book
                    key={book.bookId}
                    book={book}
                />
            ))
        }
    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;