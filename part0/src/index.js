import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => <h1>{course}</h1>;

const Part = ({part, exercises}) => <p>{part} {exercises}</p>;

const Content = ({parts}) => {
  const [ part1, part2, part3 ] = parts;
  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises}/>
      <Part part={part2.name} exercises={part2.exercises}/>
      <Part part={part3.name} exercises={part3.exercises}/>
    </div>
  );
};

const Total = ({parts}) => {
  const [{exercises: exercises1}, {exercises: exercises2}, {exercises: exercises3}] = parts;
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
