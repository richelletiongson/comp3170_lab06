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
      <p>Loan management functionality will be displayed here.</p>
      {/* Loan management content can be added here */}
    </div>
  );
}

export default LoanManagement;

