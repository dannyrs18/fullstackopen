import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => <h1>{course}</h1>;

const Part = ({part, exercises}) => <p>{part} {exercises}</p>;

const Content = ({class1, class2, class3}) => (
  <div>
    <Part part={class1.part} exercises={class1.exercises}/>
    <Part part={class2.part} exercises={class2.exercises}/>
    <Part part={class3.part} exercises={class3.exercises}/>
  </div>
);

const Total = ({exercises1, exercises2, exercises3}) => (
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
);

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}/>
      <Content
        class1={{part: part1, exercises: exercises1}}
        class2={{part: part2, exercises: exercises2}}
        class3={{part: part3, exercises: exercises3}}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
