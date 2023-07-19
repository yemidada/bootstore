import { useSelector } from 'react-redux';

import BookItem from './BookItem';
import BookForm from './BookForm';
import '../../styles/book.css';

const Home = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <>
      <div className="book-list">
        {
            books.map((book) => (
              <BookItem
                key={book.item_id}
                book={book}
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
