import React from "react";

const CopyAndPaste = () => {
  return (
    <section className="copy-paste">
      <div className="section-wrapper">
        <textarea placeholder="이곳에 이모지가 복사가 됩니다 "></textarea>
        <div className="btn-group">
          <button className="btn btn-clear">Clear</button>
          <button className="btn btn-copy">Copy</button>
        </div>
      </div>
    </section>
  );
};

export default CopyAndPaste;
