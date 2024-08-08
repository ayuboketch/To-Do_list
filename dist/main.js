/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("//Select DOM\nvar todoInput = document.querySelector(\".todo-input\");\nvar todoButton = document.querySelector(\".todo-button\");\nvar todoList = document.querySelector(\".todo-list\");\nvar filterOption = document.querySelector(\".filter-todo\");\n\n//Event Listeners\ndocument.addEventListener(\"DOMContentLoaded\", getTodos);\ntodoButton.addEventListener(\"click\", addTodo);\ntodoList.addEventListener(\"click\", deleteTodo);\nfilterOption.addEventListener(\"click\", filterTodo);\n\n//Functions\n\nfunction addTodo(e) {\n  //Prevent natural behaviour\n  e.preventDefault();\n  //Create todo div\n  var todoDiv = document.createElement(\"div\");\n  todoDiv.classList.add(\"todo\");\n  //Create list\n  var newTodo = document.createElement(\"li\");\n  newTodo.innerText = todoInput.value;\n  //Save to local - do this last\n  //Save to local\n  saveLocalTodos(todoInput.value);\n  //\n  newTodo.classList.add(\"todo-item\");\n  todoDiv.appendChild(newTodo);\n  todoInput.value = \"\";\n  //Create Completed Button\n  var completedButton = document.createElement(\"button\");\n  completedButton.innerHTML = \"<i class=\\\"fas fa-check\\\"></i>\";\n  completedButton.classList.add(\"complete-btn\");\n  todoDiv.appendChild(completedButton);\n  //Create trash button\n  var trashButton = document.createElement(\"button\");\n  trashButton.innerHTML = \"<i class=\\\"fas fa-trash\\\"></i>\";\n  trashButton.classList.add(\"trash-btn\");\n  todoDiv.appendChild(trashButton);\n  //attach final Todo\n  todoList.appendChild(todoDiv);\n  // this is a comment\n}\nfunction deleteTodo(e) {\n  var item = e.target;\n  if (item.classList[0] === \"trash-btn\") {\n    // e.target.parentElement.remove();\n    var todo = item.parentElement;\n    todo.classList.add(\"fall\");\n    //at the end\n    removeLocalTodos(todo);\n    todo.addEventListener(\"transitionend\", function (e) {\n      todo.remove();\n    });\n  }\n  if (item.classList[0] === \"complete-btn\") {\n    var _todo = item.parentElement;\n    _todo.classList.toggle(\"completed\");\n    console.log(_todo);\n  }\n}\nfunction filterTodo(e) {\n  var todos = todoList.childNodes;\n  todos.forEach(function (todo) {\n    switch (e.target.value) {\n      case \"all\":\n        todo.style.display = \"flex\";\n        break;\n      case \"completed\":\n        if (todo.classList.contains(\"completed\")) {\n          todo.style.display = \"flex\";\n        } else {\n          todo.style.display = \"none\";\n        }\n        break;\n      case \"uncompleted\":\n        if (!todo.classList.contains(\"completed\")) {\n          todo.style.display = \"flex\";\n        } else {\n          todo.style.display = \"none\";\n        }\n    }\n  });\n}\nfunction saveLocalTodos(todo) {\n  var todos;\n  if (localStorage.getItem(\"todos\") === null) {\n    todos = [];\n  } else {\n    todos = JSON.parse(localStorage.getItem(\"todos\"));\n  }\n  todos.push(todo);\n  localStorage.setItem(\"todos\", JSON.stringify(todos));\n}\nfunction removeLocalTodos(todo) {\n  var todos;\n  if (localStorage.getItem(\"todos\") === null) {\n    todos = [];\n  } else {\n    todos = JSON.parse(localStorage.getItem(\"todos\"));\n  }\n  var todoIndex = todo.children[0].innerText;\n  todos.splice(todos.indexOf(todoIndex), 1);\n  localStorage.setItem(\"todos\", JSON.stringify(todos));\n}\nfunction getTodos() {\n  var todos;\n  if (localStorage.getItem(\"todos\") === null) {\n    todos = [];\n  } else {\n    todos = JSON.parse(localStorage.getItem(\"todos\"));\n  }\n  todos.forEach(function (todo) {\n    //Create todo div\n    var todoDiv = document.createElement(\"div\");\n    todoDiv.classList.add(\"todo\");\n    //Create list\n    var newTodo = document.createElement(\"li\");\n    newTodo.innerText = todo;\n    newTodo.classList.add(\"todo-item\");\n    todoDiv.appendChild(newTodo);\n    todoInput.value = \"\";\n    //Create Completed Button\n    var completedButton = document.createElement(\"button\");\n    completedButton.innerHTML = \"<i class=\\\"fas fa-check\\\"></i>\";\n    completedButton.classList.add(\"complete-btn\");\n    todoDiv.appendChild(completedButton);\n    //Create trash button\n    var trashButton = document.createElement(\"button\");\n    trashButton.innerHTML = \"<i class=\\\"fas fa-trash\\\"></i>\";\n    trashButton.classList.add(\"trash-btn\");\n    todoDiv.appendChild(trashButton);\n    //attach final Todo\n    todoList.appendChild(todoDiv);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;