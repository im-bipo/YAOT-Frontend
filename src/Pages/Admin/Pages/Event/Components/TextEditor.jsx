import { useState } from "react";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

import FroalaEditor from "react-froala-wysiwyg";

const TextEditor = ({ value, setValue }) => {
  const [Data, setData] = useState(value.description);
  const handleChange = (model) => {
    setData(model);
    setValue({ ...value, description: model });
  };

  return (
    <div>
      <FroalaEditor tag="textarea" model={Data} onModelChange={handleChange} />
    </div>
  );
};

export default TextEditor;
