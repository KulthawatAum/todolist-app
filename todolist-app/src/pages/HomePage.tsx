import { Header, TodoList } from "../components";

const HomePage = () => {
  return (
    <div style={{ padding: 16 }}>
      <Header name="TODO list" />
      <TodoList />
    </div>
  );
};

export default HomePage;
