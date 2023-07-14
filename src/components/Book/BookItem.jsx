/* eslint-disable import/no-extraneous-dependencies */
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
  const { book } = props;
  return (
    <div className="book-item">
      <div>
        <div className="category">{book.category}</div>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        <ul className="actions">
          <li><Link to="/">Comments</Link></li>
          <li><Link to="/">Remove</Link></li>
          <li><Link to="/">Edit</Link></li>
        </ul>
      </div>

      <div className="sec">
        <div className="progressbar">
          <div className="chart">
            <CircularProgressbar strokeWidth={6} value={book.progress} />
          </div>
          <div>
            <div className="value">
              {book.progress}
              %
            </div>
            <div className="status">{book.status}</div>
          </div>
        </div>

        <div className="chapter">
          <div className="current_chapter">CURRENT CHAPTER</div>
          <div className="lesson">{book.current_chapter}</div>
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
};

BookItem.propTypes = {
  book: PropTypes.shape(),
};

export default BookItem;
