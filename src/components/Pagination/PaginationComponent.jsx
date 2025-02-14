import React from "react";

const PaginationComponent = ({ currentPage, totalPages, totalItems, onPageChange, setCurrentIndex, currentIndex }) => {
   
    const handlePrevious = () => {
        if (currentPage > 1) {
          onPageChange(currentPage - 1);
          setCurrentIndex(currentIndex - 12);
         
        } 
      };
    
      const handleNext = () => {
        if (currentPage < totalPages && totalItems === 12) {
          onPageChange(currentPage + 1);
        setCurrentIndex(currentIndex + 12);
          
        }
      };
    
      return (
        <div className="flex items-center justify-center space-x-4">
          <button onClick={handlePrevious} disabled={currentPage === 1}>
            &lt;
          </button>
          <span>
            Página {currentPage}
          </span>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            &gt;
          </button>
        </div>
      );
    };
    
    export default PaginationComponent;