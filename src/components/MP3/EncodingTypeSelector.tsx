import { Dispatch, SetStateAction } from "react";
import BitrateSlider from "../BitrateSlider";
import VbrDropdown from "./VbrDropdown";

interface MP3EncodingTypeSelectorProps {
  setMp3EncodingType: Dispatch<SetStateAction<string>>;
  encodingType: string;
  setMp3VbrSetting: Dispatch<SetStateAction<string>>;
  vbrSetting: string;
}

const MP3EncodingTypeSelector: React.FC<MP3EncodingTypeSelectorProps> = ({
  setMp3EncodingType,
  encodingType,
  setMp3VbrSetting,
  vbrSetting,
}) => {
  return (
    <div id="mp3_encoding_div" className="flex flex-col gap-2 mt-2">
      <label htmlFor="mp3_encoding_type">Encoding Type:</label>
      <select
        value={encodingType}
        id="mp3_encoding_type"
        className="p-2 border border-gray-400 rounded"
        onChange={(e) => setMp3EncodingType(e.target.value)}
      >
        <option disabled>Select encoding type</option>
        <option value="cbr">CBR (Constant Bitrate)</option>
        <option value="abr">ABR (Average Bitrate)</option>
        <option value="vbr">VBR (Variable Bitrate)</option>
      </select>
      {encodingType === "vbr" ? (
        <VbrDropdown
          setMp3VbrSetting={setMp3VbrSetting}
          vbrSetting={vbrSetting}
        />
      ) : (
        <BitrateSlider initialValue="192" min="64" max="320" step="64" />
      )}
    </div>
  );
};

export default MP3EncodingTypeSelector;
