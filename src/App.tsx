import React, { Fragment,useState } from 'react';
function App(): JSX.Element {  
  // local states
  const [newTask, setNewTask] = useState<string>("");
  const [task, setTask] = useState<Itask[]>([]);
  // types and interfaces for typescript
  type formElement = React.FormEvent<HTMLFormElement>
  interface Itask {
    name: string;
    done: boolean;
  }
  // consts and handlers
  const addTask = (name: string) => {
    const newTask: Itask[] =[...task,{name, done: false}]
    setTask(newTask)
  }
  const handleSubmit = (e: formElement) => {
    e.preventDefault();
    addTask(newTask)
    setNewTask("");
  }
  return (
    <Fragment>
      <div className="body">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} className="inp"/>
        <button className="btn">Enviar</button>
      </form>
      {
        task.map((t: Itask,i: number) => {
          return <h1 key={i} className="text">{t.name}</h1>
        })
      }
      </div>
    </Fragment>
  );
}

export default App;
