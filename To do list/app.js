// Function to add a new task
function addTask() {
                              const taskInput = document.getElementById("taskInput");
                              const taskText = taskInput.value.trim();
                            
                              if (taskText === "") {
                                return; // Ignore empty tasks
                              }
                            
                              const taskList = document.getElementById("taskList");
                              const newTask = document.createElement("li");
                            
                              const taskCheckbox = document.createElement("input");
                              taskCheckbox.type = "checkbox";
                              taskCheckbox.addEventListener("change", markCompleted);
                            
                              const taskSpan = document.createElement("span");
                              taskSpan.innerText = taskText;
                            
                              const deleteButton = document.createElement("button");
                              deleteButton.innerText = "Delete";
                              deleteButton.classList.add("delete-button");
                              deleteButton.addEventListener("click", deleteTask);
                            
                              newTask.appendChild(taskCheckbox);
                              newTask.appendChild(taskSpan);
                              newTask.appendChild(deleteButton);
                            
                              taskList.appendChild(newTask);
                            
                              // Clear input field after adding the task
                              taskInput.value = "";
                            
                              // Save tasks to local storage
                              saveTasksToLocalStorage();
                            }
                            
                            // Function to mark a task as completed
                            function markCompleted(event) {
                              const checkbox = event.target;
                              const taskText = checkbox.nextElementSibling;
                            
                              if (checkbox.checked) {
                                taskText.classList.add("completed");
                              } else {
                                taskText.classList.remove("completed");
                              }
                            
                              // Save tasks to local storage
                              saveTasksToLocalStorage();
                            }
                            
                            // Function to delete a task
                            function deleteTask(event) {
                              const deleteButton = event.target;
                              const listItem = deleteButton.parentElement;
                            
                              listItem.remove();
                            
                              // Save tasks to local storage
                              saveTasksToLocalStorage();
                            }
                            
                            // Function to save tasks to local storage
                            function saveTasksToLocalStorage() {
                              const taskList = document.getElementById("taskList");
                              const tasks = [];
                            
                              // Get all the tasks and their completed status
                              for (const taskItem of taskList.children) {
                                const taskText = taskItem.querySelector("span").innerText;
                                const isCompleted = taskItem.querySelector("input").checked;
                            
                                tasks.push({ text: taskText, completed: isCompleted });
                              }
                            
                              // Save the tasks as a JSON string in local storage
                              localStorage.setItem("tasks", JSON.stringify(tasks));
                            }
                            
                            // Function to load tasks from local storage
                            function loadTasksFromLocalStorage() {
                              const savedTasks = localStorage.getItem("tasks");
                            
                              if (savedTasks) {
                                const tasks = JSON.parse(savedTasks);
                            
                                for (const task of tasks) {
                                  const taskList = document.getElementById("taskList");
                                  const newTask = document.createElement("li");
                            
                                  const taskCheckbox = document.createElement("input");
                                  taskCheckbox.type = "checkbox";
                                  taskCheckbox.checked = task.completed;
                                  taskCheckbox.addEventListener("change", markCompleted);
                            
                                  const taskSpan = document.createElement("span");
                                  taskSpan.innerText = task.text;
                            
                                  const deleteButton = document.createElement("button");
                                  deleteButton.innerText = "Delete";
                                  deleteButton.classList.add("delete-button");
                                  deleteButton.addEventListener("click", deleteTask);
                            
                                  newTask.appendChild(taskCheckbox);
                                  newTask.appendChild(taskSpan);
                                  newTask.appendChild(deleteButton);
                            
                                  taskList.appendChild(newTask);
                            
                                  if (task.completed) {
                                    taskSpan.classList.add("completed");
                                  }
                                }
                              }
                            }
                            
                            // Load tasks from local storage when the page loads
                            loadTasksFromLocalStorage();
                            