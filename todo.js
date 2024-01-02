/* eslint-disable no-undef*/
/* eslint-disable no-unused-vars */
/* global all */
const todoList = () => {
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    const today = new Date();
    return all.filter(
      (item) =>
        new Date(item.dueDate) < today &&
        !item.completed &&
        new Date(item.dueDate).toDateString() != today.toDateString(),
    );
  };

  const dueToday = () => {
    const today = new Date();
    return all.filter(
      (item) => new Date(item.dueDate).toDateString() === today.toDateString(),
    );
  };

  const dueLater = () => {
    const today = new Date();
    return all.filter(
      (item) => new Date(item.dueDate) > today && !item.completed,
    );
  };

  const toDisplayableList = (list) => {
    return list
      .map((item, index) => {
        const today = new Date();
        const status = item.completed ? "[x]" : "[ ]";
        if (new Date(item.dueDate).toDateString() === today.toDateString()) {
          return `${status} ${item.title}`;
        }
        return `${status} ${item.title} ${item.dueDate}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
