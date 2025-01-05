import { useState } from 'react';

export const Pagination = ({ data, itemsPerPage, onPageChange }: { data: any[], itemsPerPage: number, onPageChange: (page: number) => void }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <div className="text-center">
      <div className="pagination-controls">
        <button id="prev-button" onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        {/* <span>{`Page ${currentPage} of ${totalPages}`}</span> */}
        <button id="next-button" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div className="shimmer-container">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};
