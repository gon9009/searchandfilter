import { useMemo } from "react";
import EmojiCardList from "../emoji/EmojiCardList";
import Pagination from "../emoji/Pagination";
import LoadingSpinner from "../common/LoadingSpinner";
import { useCurrentPage } from "../../hooks/useCurrentPage";
import { paginateData } from "../../utils/utils";

const EmojiPageLayout = ({ data, isLoading, emptyMessage, error }) => {
  const { currentPage, handlePageChange } = useCurrentPage();

  const paginatedData = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return paginateData(currentPage, data);
  }, [currentPage, data]);

  if (isLoading) return <LoadingSpinner />;

  const hasData = Array.isArray(data) && data.length > 0;

  return (
    <>
      <EmojiCardList emptyMessage={emptyMessage} emojis={paginatedData} />
      {!error && hasData && (
        <Pagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          itemCount={data.length}
        />
      )}
    </>
  );
};

export default EmojiPageLayout;
