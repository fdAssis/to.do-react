<h2 align="center">
  Conceitos do React
</h2>

<div align="center">
  <img src="https://res.cloudinary.com/dorzadlpq/image/upload/v1633742744/Github/reactjs/todoreact_io9w2q.png" width=50%/>
</div>

<p>
Uma pequena aplicação de atividades a fazer, para treinar um pouco mais sobre manipulação do estado no React.

- Adicionar uma nova tarefa
- Remover uma tarefa
- Marcar e desmarcar uma tarefa como concluída
</p>

## :test_tube: Testes
[x] App Page should be able to add a task
  - permitir que task seja criada e com isso, exibida em tela. As taks criadas devem conter os atributos seguindo o padrão da interface, que é:
      ```typescript
        interface Task {
          id: number;
          title: string;
          isComplete: boolean;
        }
      ```
  
 - [x] App Page should not be able to add a task with a empty title
 - [x] App Page should be able to remove a task
 - [x] App Page should be able to check a task

<img src="https://res.cloudinary.com/dorzadlpq/video/upload/ac_none,e_accelerate:2/v1633739661/Github/reactjs/todo_reactjs_hgjjvo.gif" width=100% />
