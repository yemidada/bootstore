import '../../styles/form.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { add } from '../../redux/books/booksSlice';

const BookForm = () => {
  const selectors = ['', 'Action', 'Science Fiction', 'Economy'];
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(add({
      item_id: uuidv4(),
      category,
      title,
      author,
      progress: 64,
      current_chapter: 'Chapter 17',
      status: 'Completed',
    }));
  };

  return (
    <form onSubmit={onSubmit} className="bookform">
      <div className="title">ADD NEW FORM</div>

      <div className="form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          {
            selectors.map((selector) => <option key={selector} value={selector}>{selector}</option>)
        }
        </select>
        <button type="submit" className="button">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};
export default BookForm;
