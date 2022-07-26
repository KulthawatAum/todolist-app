import { useState } from "react";
import TodoListItem, { ItemData } from "./TodoListItem";

const TodoList = () => {
  const [inputName, setInputName] = useState("");
  const [items, setItems] = useState<ItemData[]>([]);

  const handleAdd = () => {
    if (!inputName) {
      alert("ไม่มีไอ่สัส");
      return;
    }

    setItems((prev) => [...prev, { name: inputName, content: "xxx" }]);
    setInputName("");
  };

  const handleRemove = (index: number) => {
    setItems((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  const handleContentChange = (content: string, index: number) => {
    setItems((prev) => {
      const cloned = [...prev];
      cloned[index].content = content;
      return cloned;
    });
  };

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <input
          style={{ marginRight: 8 }}
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleAdd}>ADD</button>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        {items.map((item, index) => (
          <TodoListItem
            key={item.name}
            data={item}
            onRemove={() => handleRemove(index)}
            onContentChange={(content: string) =>
              handleContentChange(content, index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
