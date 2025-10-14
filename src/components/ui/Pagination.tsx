import ReactPaginate from 'react-paginate';

type Props = {
  initialPage?: number;
  totalPage?: number;
  setPage: (page: number) => void;
};

export default function Pagination({ totalPage = 1, setPage, initialPage = 0 }: Props) {
  const handlePageClick = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={totalPage}
        forcePage={initialPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="flex items-center rounded-lg"
        pageClassName="size-7 flex justify-center items-center rounded-lg cursor-pointer text-xs bg-[#F1F2F6]"
        activeClassName="size-7 flex justify-center items-center rounded-lg cursor-pointer text-xs bg-primary text-white bg-[#F1F2F6]"
        previousClassName="size-7 flex justify-center items-center rounded-lg cursor-pointer text-xs text-gray-600 cursor-pointer bg-[#F1F2F6]"
        nextClassName="size-7 flex justify-center items-center rounded-lg cursor-pointer text-xs text-gray-600 cursor-pointer bg-[#F1F2F6]"
      />
    </div>
  );
}
