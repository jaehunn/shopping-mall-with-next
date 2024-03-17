import { getTodos } from "~/api/todos";
import { Suspense } from "react";

export default function TodosPage() {
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        <Suspense fallback={<li>Loading...</li>}>
          <TodosList />
        </Suspense>
      </ul>
    </>
  );
}

async function TodosList() {
  const todos = await getTodos();

  return todos.map(({ id, title }) => <li key={`todo_${id}`}>{title}</li>);
}
