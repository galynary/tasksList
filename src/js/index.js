const list = document.querySelector('.task__list');
const createBtnTask = document.querySelector('.btn__task-create');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
createBtnTask.addEventListener('click', createTask);

// Render existing tasks from localStorage
tasks.forEach(renderTask);

function createTask() {
  let task = {
    id: tasks.length + 1,
    name: '',
    time: '',
    timeLeft: '',
  };
  let lastTask = tasks[tasks.length - 1];
  if (tasks.length && lastTask.name.trim() === '') {
    alert('Спочатку введіть своє завдання!!!');
  } else {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTask(task);
  }
}

function renderTask(task) {
  let taskElem = document.createElement('li');
  taskElem.classList.add('task__item');
  taskElem.dataset.id = task.id;
  taskElem.innerHTML = `
  <div class="task__text">
    <textarea class="task__text-name" placeholder="Введіть завдання">${
      task.name
    }</textarea>
  </div>
  <div class="task">
    <div class="task__time-inner">
      <div class="task__time">
        <input
          type="datetime-local"
          name="datime"
          min="2024-06-30T00:00"
          max="2035-06-30T00:00"
          value="${task.time}" class="task__text-input"
        />
        <label for="task__text" class="task__label">Введіть дату виконання</label>
      </div>
      <div class="task__time-left">
        <span class="countdown">${task.timeLeft || ''}</span>
        <label for="task__text" class="time-left__label"> до завершення залишилося</label>
      </div>
    </div>
    <div class="task__buttons">
      <button type="button" class="task__save button">Зберегти</button>
      <button type="button" class="task__delete button">Видалити</button>
    </div>
  </div>`;

  list.append(taskElem);

  let btnSave = taskElem.querySelector('.task__save');
  btnSave.addEventListener('click', () => saveTask(taskElem));

  let btnDelete = taskElem.querySelector('.task__delete');
  btnDelete.addEventListener('click', deleteTask);

  let inputDateTime = taskElem.querySelector('.task__time input');
  inputDateTime.addEventListener('input', event => {
    let taskId = parseInt(taskElem.dataset.id);
    let task = tasks.find(task => task.id === taskId);
    if (task) {
      task.time = inputDateTime.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      startCountdown(taskElem, task.time, task);
    }
  });

  // Start countdown if there's time set
  if (task.time) {
    startCountdown(taskElem, task.time, task);
  }
}

function saveTask(taskElem) {
  let textTask = taskElem.querySelector('.task__text-name');
  let taskText = textTask.value;
  if (taskText === '') {
    alert('Спочатку введіть своє завдання!!!');
    return;
  }

  let taskId = parseInt(taskElem.dataset.id);
  let task = tasks.find(task => task.id === taskId);

  if (task) {
    task.name = taskText;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  // startCountdown();
}

function deleteTask(event) {
  let taskElem = event.target.closest('li');
  let taskId = parseInt(taskElem.dataset.id);
  let taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    list.removeChild(taskElem);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateTaskIds();
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

function updateTaskIds() {
  tasks.forEach((task, index) => {
    task.id = index + 1;
    let taskElem = list.querySelector(`[data-id="${index + 1}"]`);
    if (taskElem) {
      taskElem.dataset.id = task.id;
    }
  });
}

const startCountdown = (rowElement, endTime, task) => {
  const countdownElement = rowElement.querySelector('.countdown');
  const timeLabel = document.querySelector('.time-left__label');
  const updateCountdown = () => {
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const distance = end - now;

    if (distance > 0) {
      timeLabel.style.display = 'block';
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const timeLeft = `${days}д ${hours}г ${minutes}хв ${seconds}сек`;
      countdownElement.textContent = timeLeft;
      task.timeLeft = timeLeft;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      clearInterval(timerInterval);
      countdownElement.textContent = 'Термін вичерпано';
      task.timeLeft = 'Термін вичерпано';
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  };

  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
};
