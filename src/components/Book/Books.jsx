import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../../redux/books/booksSlice';
import BookItem from './BookItem';
import BookForm from './BookForm';
import '../../styles/book.css';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const { books, loading } = useSelector((state) => state.books);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <div className="book-list">
        {
            Object.entries(books).map(([key, value]) => (
              <BookItem
                key={key}
                itemId={key}
                book={value[0]}
              />
            ))
        }
      </div>

      <div className="line" />

      <BookForm />
    </>
  );
};
export default Home;
