import { Login } from "../components/Login";
import { TodosPage } from "../components/TodosPage";

export default function Home({}) {
  return (
    <div className="container p-4">
      <Login />
      <TodosPage />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://631376c5b466aa9b0399f332.mockapi.io/todos");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
