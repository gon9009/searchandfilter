import { useClipboardStore } from "../../store/useClipboardStore";
import { toast } from "react-toastify";

const ClipboardPanel = () => {
  const copiedText = useClipboardStore((s) => s.copiedText);
  const clearText = useClipboardStore((s) => s.clearText);
  const setCopiedText = useClipboardStore((s) => s.setCopiedText);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copiedText);
    toast.success("복사 완료!");
  };

  const handleClear = () => {
    clearText();
    toast.success("초기화 완료!");
  };

  return (
    <section className="copy-paste">
      <div className="copy-paste__container">
        <textarea
          value={copiedText}
          onChange={(e) => setCopiedText(e.target.value)}
          placeholder="이곳에 이모지가 복사가 됩니다"
        />
        <div className="btn-group">
          {/* 초기화 완료! */}
          <button onClick={handleClear} className="btn btn-clear">
            Clear
          </button>
          {/* 복사 완료! */}
          <button onClick={handleCopy} className="btn btn-copy">
            Copy
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClipboardPanel;
