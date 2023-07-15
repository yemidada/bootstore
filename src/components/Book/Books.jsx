import BookItem from './BookItem';
import BookForm from './BookForm';
import '../../styles/book.css';

const Home = () => {
  const books = [
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: 64,
      current_chapter: 'Chapter 17',
      status: 'Completed',
    },
    {
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: 8,
      current_chapter: 'Chapter 3: "A Lesson Learned"',
      status: 'Completed',
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      progress: 0,
      current_chapter: 'Introduction',
      status: 'Completed',
    },
  ];

  return (
    <>
      <div className="book-list">
        {
            books.map((book) => <BookItem key={book} book={book} />)
        }
      </div>

      <div className="line" />

      <BookForm />
    </>
  );
};
export default Home;
