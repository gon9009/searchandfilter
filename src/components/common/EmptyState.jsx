const EmptyState = ({ message }) => {
  return (
    <>
      <div className="emoji-cards__empty">
        <div className="emoji-cards__empty-message">{message}</div>
      </div>
    </>
  );
};

export default EmptyState;
