import '../../styles/form.css';

const BookForm = () => {
  const selectors = ['Action', 'Science Fiction', 'Economy'];
  return (
    <div className="bookform">
      <div className="title">ADD NEW FORM</div>

      <div className="form">
        <input placeholder="Book title" />
        <input placeholder="Category" />
        <select>
          {
            selectors.map((selector) => <option key={selector} value={selector}>{selector}</option>)
        }
        </select>
        <button type="button" className="button">
          ADD BOOK
        </button>
      </div>
    </div>
  );
};
export default BookForm;
