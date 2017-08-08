import React from 'react';
import Header from '../header';
import Footer from '../footer';
import AddTodo from '../../containers/add-todo';
import VisibleTodoList from '../../containers/visible-todo-list';

const TodoApp = () => (
  <section>
    <Header />
    <AddTodo />
    <VisibleTodoList/>
    <Footer />
  </section>
);

export default TodoApp;
