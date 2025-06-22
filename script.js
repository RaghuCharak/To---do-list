document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
  
    addTaskButton.addEventListener('click', () => {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        newTaskInput.value = '';
      }
    });
  
    newTaskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
          addTask(taskText);
          newTaskInput.value = '';
        }
      }
    });
  
    function addTask(text) {
      const li = document.createElement('li');
      li.textContent = text;
  
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete';
      completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      li.appendChild(completeButton);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    }
  });
  