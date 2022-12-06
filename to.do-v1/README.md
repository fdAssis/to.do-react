<h2 align="center">
  Conceitos do React
</h2>

<div align="center">
  <img src="https://res.cloudinary.com/dorzadlpq/image/upload/v1633742744/Github/reactjs/todoreact_io9w2q.png" width=50%/>
</div>

## :computer: Aplicação

<p>
Uma pequena aplicação de atividades a fazer, para treinar sobre manipulação do estado no React.

- Adicionar uma nova tarefa
- Remover uma tarefa
- Marcar e desmarcar uma tarefa como concluída
</p>

## :test_tube: Testes
- [x] App Page should be able to add a task
 - Permitir que task seja criada e com isso, exibida em tela. As taks criadas devem conter os atributos seguindo o padrão da interface, que é:
      ```typescript
        interface Task {
          id: number;
          title: string;
          isComplete: boolean;
        }
      ```
  
 - [x] App Page should not be able to add a task with a empty title
  - Antes de criar uma nova task, deve validar se algo foi digitado no input e não permitir a criação da task caso o valor seja vazio, caso o valor digitado seja vazio, deve impedir a criação da task.
  
 - [x] App Page should be able to remove a task
  - Deve permitir que ao clicar no botão com ícone de uma lixeira, a task relacionada a esse botão seja removida do estado da aplicação, consequentemente sendo removida da tela.
  
 - [x] App Page should be able to check a task
  - Deve permitir que ao clicar no checkbox ao lado da task, ela seja marcada como concluída ou não concluída de acordo com seu estado atual, alterando seu valor de `isComplete` de `false` para `true` ou ao contrário, de `true` para `false`.  
 
 ## :zap: Resultado

<img src="https://res.cloudinary.com/dorzadlpq/video/upload/ac_none,e_accelerate:2/v1633739661/Github/reactjs/todo_reactjs_hgjjvo.gif" width=100% />
