import React, { useEffect, useState } from "react";

const CardComponent: React.FC = () => {
  const [selectDay, setSelectedDay] = useState(new Date().toDateString());
  const [detail, setDetail] = useState("");
  const [items, setItems] = useState<{ day: string; detail: string }[]>([]);
  const [valid, setValid] = useState(false);

  const createHandler = () => {
    setDetail("");
    setSelectedDay("");
    setItems([...items, { day: selectDay, detail: detail }]);
  };

  useEffect(() => {
    if (detail.length !== 0) {
      setValid(true);
    }
  });

  const editHandler = () => {};

  return (
    <div>
      <div>
        <label>Creat Card</label>
      </div>
      <div>
        <label>
          Due date <>(default as today)</>
        </label>
        <input
          type="date"
          onChange={(event) => setSelectedDay(event.target.value)}
        />
      </div>
      <div>
        <label>Detail</label>
        <input
          value={detail}
          onChange={(event) => setDetail(event.target.value)}
          placeholder="Your activities"
        />
      </div>
      <div>
        <button onClick={createHandler} disabled={!valid}>
          Add card
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.day}>
            {item.day}: {item.detail}
            <button onClick={editHandler}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardComponent;
