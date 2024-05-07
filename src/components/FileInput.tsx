import React from "react";

interface FileInputProps {
  onFileInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFileInput }) => {
  return (
    <div className="custom-file border-dotted px-4 py-2 border-4 rounded-2xl border-gray-400 ">
      <input
        accept=".mp3, .aac, .m4a, .wav, .flac, .ogg, .opus, .flv, .mp4, .avi, .wmv, .wma, .mka, .mkv, .MTS,
                .mts, .ac3, .3gp, .dts, .webm, .ADPCM, .adpcm, .spx, .caf, .mov, .dtshd, .thd, .aif, .aiff, .vob"
        type="file"
        className="custom-file-input hidden"
        id="file_input"
        onInput={onFileInput}
      />
      <label
        id="file_input_label"
        htmlFor="file_input"
        className="custom-file-label cursor-pointer"
      >
        Select file
      </label>
    </div>
  );
};

export default FileInput;
