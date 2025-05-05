import { EmojiHeartIcon } from "../common/Icons";
import { useEmojiStore } from "../../store/useEmojiStore";
import { useClipboardStore } from "../../store/useClipboardStore";

const EmojiCard = ({ emojicode, emojiIcon }) => {
  const likedEmojis = useEmojiStore((s) => s.likedEmojis);
  const toggleLike = useEmojiStore((s) => s.toggleLike);
  const appendEmoji = useClipboardStore((s) => s.appendEmoji);

  const isLiked = likedEmojis.includes(emojicode);
  return (
    <div className="emoji-card" onClick={() => appendEmoji(emojiIcon)}>
      <p className="emoji">{emojiIcon}</p>
      <span
        onClick={(e) => {
          e.stopPropagation(); // ✅ 카드 클릭 이벤트로 전달 방지
          toggleLike(emojicode); // ✅ 아이디만 전달
        }}
      >
        <EmojiHeartIcon fill={isLiked ? "red" : "lightgray"} />
      </span>
    </div>
  );
};

export default EmojiCard;
