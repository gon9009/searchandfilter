import React, { useMemo } from "react";
import EmojiCardList from "../emoji/EmojiCardList";
import Pagination from "../emoji/Pagination";
import LoadingSpinner from "../common/LoadingSpinner";
import { useCurrentPage } from "../../hooks/useCurrentPage";
import { paginateData } from "../../utils/utils";

const EmojiPageLayout = ({ data, isLoading }) => {
  const { currentPage, handlePageChange } = useCurrentPage();

  const paginatedData = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return paginateData(currentPage, data);
  }, [currentPage, data]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <EmojiCardList emojis={paginatedData} />
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        itemCount={data?.length || 0}
      />
    </>
  );
};

export default EmojiPageLayout;
