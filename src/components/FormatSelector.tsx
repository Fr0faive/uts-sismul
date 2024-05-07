import React from "react";

interface FormatSelectorProps {
  onCodecChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  codec: string;
}

const FormatSelector: React.FC<FormatSelectorProps> = ({
  onCodecChange,
  codec,
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h5 className="mb-2 text-lg font-semibold">Desired Format</h5>
      <select
        id="codecs"
        onChange={onCodecChange}
        value={codec}
        className="border border-gray-400 w-full p-2 rounded-md"
      >
        <option value="AAC">AAC</option>
        <option value="AC3">AC3 (Dolby Digital)</option>
        <option value="ALAC">ALAC (.m4a)</option>
        <option value="CAF">CAF (.caf)</option>
        <option value="DTS">DTS (.dts)</option>
        <option value="FLAC">FLAC (.flac)</option>
        <option value="H264">H.264/AVC (.mp4 or .mkv)</option>
        <option value="MKA">MKA (.mka)</option>
        <option value="MP3">MP3 (.mp3)</option>
        <option value="Opus">Opus (.opus)</option>
        <option value="Vorbis">Vorbis (.ogg)</option>
        <option value="WAV">WAV (.wav)</option>
      </select>
    </div>
  );
};

export default FormatSelector;
