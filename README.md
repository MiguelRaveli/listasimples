# 📋 Personal Task Manager (Lista de Tarefas)

Um aplicativo de lista de tarefas (To-Do List) interativo e responsivo construído com React. Este projeto permite que o usuário adicione, conclua e reordene suas tarefas de forma intuitiva utilizando a funcionalidade de arrastar e soltar (Drag and Drop), com suporte total para uso em computadores e dispositivos móveis.

## ✨ Funcionalidades

* **Adicionar Tarefas:** Crie novas tarefas rapidamente usando o campo de entrada.
* **Gerenciamento de Status:** Marque tarefas como concluídas ou desmarque-as. O aplicativo separa automaticamente as tarefas pendentes das concluídas.
* **Arrastar e Soltar (Drag and Drop):** Reordene suas tarefas livremente usando o ícone de arrastar.
* **Suporte Mobile e Desktop:** Sistema de sensores inteligente que distingue toques de mouse (PC) e toques de tela (Celular), garantindo que a rolagem da tela não interfira na reordenação das tarefas.

## 📂 Estrutura de Componentes

* `App.jsx`: Componente principal que gerencia o estado global das tarefas e o Contexto de Drag and Drop (`DndContext`).
* `CriarTarefa`: Componente responsável pela entrada de texto e botão de adicionar nova tarefa.
* `Tarefas`: Renderiza a lista de tarefas pendentes e utiliza o `SortableContext`.
* `TarefasCompletas`: Renderiza a lista de tarefas concluídas, mantendo a capacidade de desmarcá-las ou reordená-las.

## 🔮 Updates Futuros

* **Editar Tarefas:** Permitir a alteração do texto de itens que já foram criados na lista.
* **Remover Tarefas:** Adicionar a opção de excluir permanentemente um item.

---
*Desenvolvido com dedicação para aprimorar habilidades em React e interações de UI avançadas.*