import { useState } from "react";
import PropTypes from "prop-types";

const FileExplorer = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  if (!data.isFolder) {
    return (
      <div className="ml-6 text-sm text-gray-800 hover:text-black cursor-pointer">
        📄 {data.name}
      </div>
    );
  }

  return (
    <div className="ml-4">
      <div
        onClick={toggleExpand}
        className="cursor-pointer font-medium text-blue-600 hover:text-blue-800 transition duration-200"
      >
        📁 {data.name}
      </div>

      {isExpanded && (
        <div className="pl-4 border-l border-gray-300 mt-1 space-y-1">
          {data.child?.map((item) => (
            <div key={item.id}>
              <FileExplorer data={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

FileExplorer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFolder: PropTypes.bool.isRequired,
    child: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default FileExplorer;
