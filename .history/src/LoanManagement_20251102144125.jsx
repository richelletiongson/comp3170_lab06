import './index.css'

function LoanManagement({ onQuit }) {
  return (
    <div className="loan-management">
      <div className="loan-header-section">
        <h2>Manage Loans</h2>
        <button className="quit-button" onClick={onQuit}>
          QUIT
        </button>
      </div>
      <p>There are no available books to borrow.</p>
    </div>
  );
}

export default LoanManagement;

