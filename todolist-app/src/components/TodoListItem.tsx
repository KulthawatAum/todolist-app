import { useState } from "react";

export interface ItemData {
  name: string;
  content: string;
}

interface Props {
  data: ItemData;
  onRemove: () => void;
  onContentChange?: (content: string) => void;
}

const TodoListItem = (props: Props) => {
  const { data, onRemove, onContentChange } = props;

  const [edit, setEdit] = useState(false);
  const [inputName, setInputName] = useState("");

  const handleOnSave = () => {
    if (onContentChange) onContentChange(inputName);
    setEdit(false);
    setInputName("");
  };

  return (
    <div
      style={{
        width: 200,
        padding: 16,
        background: "lightgray",
        borderRadius: 8,
        position: "relative",
      }}
    >
      <button
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={onRemove}
      >
        X
      </button>
      <div style={{ fontSize: 24, marginBottom: 8 }}>{data.name}</div>
      {edit ? (
        <div>
          <input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button onClick={handleOnSave}>SAVE</button>
        </div>
      ) : (
        <div>
          <div>{data.content}</div>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
