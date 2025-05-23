import EmojiCard from "./EmojiCard";
import EmptyState from "../common/EmptyState";

const EmojiCardList = ({ emojis, emptyMessage }) => {
  return (
    <section className="emoji-cards">
      {emojis.length === 0 ? (
        <EmptyState message={emptyMessage} />
      ) : (
        <div className="emoji-cards__container">
          {emojis.map((emoji) => (
            <EmojiCard
              key={emoji.slug}
              emojicode={emoji.codePoint}
              emojiIcon={emoji.character}
            />
          ))}
        </div>
      )}
    </section>
  );
};
export default EmojiCardList;
