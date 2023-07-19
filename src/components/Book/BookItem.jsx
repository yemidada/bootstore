import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

const BookItem = (props) => {
  const { book, itemId } = props;
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeBook(itemId));
  };

  return (
    <div className="book-item">
      <div>
        <div className="category">{book.category}</div>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        <ul className="actions">
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={onRemove}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>

      <div className="sec">
        <div className="progressbar">
          <div className="chart">
            <CircularProgressbar strokeWidth={6} value={60} />
          </div>
          <div>
            <div className="value">
              60%
            </div>
            <div className="status">Completed</div>
          </div>
        </div>

        <div className="chapter">
          <div className="current_chapter">CURRENT CHAPTER</div>
          <div className="lesson">Chapter 17</div>
          <button type="button" className="chapter_button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>

    </div>
  );
};

BookItem.defaultProps = {
  book: PropTypes.shape(),
  itemId: PropTypes.string,
};

BookItem.propTypes = {
  book: PropTypes.shape(),
  itemId: PropTypes.string,
};

export default BookItem;
