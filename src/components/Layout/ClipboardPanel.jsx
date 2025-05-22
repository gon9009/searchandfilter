import { useClipboardStore } from "../../store/useClipboardStore";

const ClipboardPanel = () => {
  const copiedText = useClipboardStore((s) => s.copiedText);
  const clearText = useClipboardStore((s) => s.clearText);
  const setCopiedText = useClipboardStore((s) => s.setCopiedText);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copiedText);
  };

  return (
    <section className="copy-paste">
      <div className="section-wrapper">
        {/* onChange 로 수정하기기 */}
        <textarea
          value={copiedText}
          onChange={(e) => setCopiedText(e.target.value)}
          placeholder="이곳에 이모지가 복사가 됩니다"
        />
        <div className="btn-group">
          <button onClick={clearText} className="btn btn-clear">
            Clear
          </button>
          <button onClick={handleCopy} className="btn btn-copy">
            Copy
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClipboardPanel;
