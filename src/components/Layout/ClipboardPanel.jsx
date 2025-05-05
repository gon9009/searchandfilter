import React from "react";
import { useClipboardStore } from "../../store/useClipboardStore";

const ClipboardPanel = () => {
  const copiedText = useClipboardStore((s) => s.copiedText);
  const clearText = useClipboardStore((s) => s.clearText);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(copiedText);
  };

  return (
    <section className="copy-paste">
      <div className="section-wrapper">
        <textarea
          value={copiedText}
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
