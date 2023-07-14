import '../../styles/form.css';

const BookForm = () => {
  const selectors = ['Suzanne Collins', 'Frank Herbert', 'Suzanne Collins'];
  return (
    <div className="bookform">
      <div className="title">ADD NEW FORM</div>

      <div className="form">
        <input placeholder="Book title" />
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
