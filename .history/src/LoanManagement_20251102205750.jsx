import './index.css'
import { useState } from 'react'

function LoanManagement({ onQuit, availableBooks, loans, onAddLoan, onReturnLoan }) {
  const [formData, setFormData] = useState({
    bookId: '',
    borrower: '',
    dueDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.bookId && formData.borrower && formData.dueDate) {
      onAddLoan(formData);
      setFormData({
        bookId: '',
        borrower: '',
        dueDate: ''
      });
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <div className="loan-management">
      <div className="loan-header-section">
        <h2>Manage Loans</h2>
        <button className="quit-button" onClick={onQuit}>
          QUIT
        </button>
      </div>

      <div className="loan-form-section">
        <form onSubmit={handleSubmit} className="loan-form">
          <div className="form-control">
            <label htmlFor="bookId">Book</label>
            <select
              id="bookId"
              name="bookId"
              value={formData.bookId}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a book...</option>
              {availableBooks.map(book => (
                <option key={book.id} value={book.id}>
                  {book.title} by {book.author}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="borrower">Borrower</label>
            <input
              type="text"
              id="borrower"
              name="borrower"
              placeholder="Borrower name..."
              value={formData.borrower}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn primary">Create Loan</button>
        </form>
      </div>

      <div className="available-books-message">
        {availableBooks.length === 0 ? (
          <p>There are no available books to borrow.</p>
        ) : (
          <p>Available books: {availableBooks.length}</p>
        )}
      </div>

      {loans.length > 0 && (
        <div className="loans-list-section">
          <h3>Currently on loan</h3>
          <div className="loans-list">
            {loans.map(loan => (
              <div key={loan.id} className="loan-item">
                <div className="loan-details">
                  <p><strong>Borrower:</strong> {loan.borrower}</p>
                  <p><strong>Book:</strong> {loan.bookTitle}</p>
                  <p><strong>Due date:</strong> {formatDate(loan.dueDate)}</p>
                </div>
                <button 
                  className="return-loan-button"
                  onClick={() => onReturnLoan(loan.id)}
                >
                  Return
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoanManagement;

