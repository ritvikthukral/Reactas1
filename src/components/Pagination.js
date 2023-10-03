
import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <footer className="pagination">
      <div className="pagination-info">
        Page {currentPage} of {totalPages}
      </div>
      <div className="pagination-buttons">
        
        
      </div>
      <div className="page-numbers">
        {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </footer>
  );
}

export default Pagination;
