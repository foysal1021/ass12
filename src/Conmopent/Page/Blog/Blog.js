import React from "react";

const Blog = () => {
  return (
    <div className=" mt-20">
      <h3 className=" text-3xl text-center font-bold mb-10"> Blog </h3>
      <div className=" grid lg:grid-cols-2 gap-8 ">
        <div className="card  border shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              1 . What are the different ways to manage a state in a React
              application?
            </h2>
            <ol>
              <li> 1. Local State </li>
              <li> 2. Global State </li>
              <li> 3. Server State </li>
              <li> 4. URL state</li>
            </ol>
          </div>
        </div>
        <div className="card  border shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              1 . How does prototypical inheritance work??
            </h2>
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object
            </p>
          </div>
        </div>
        <div className="card border shadow-xl  ">
          <div className="card-body">
            <h2 className="card-title">
              1 .What is a unit test? Why should we write unit tests??
            </h2>
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
        <div className="card border shadow-xl ">
          <div className="card-body">
            <h2 className="card-title">1 . React vs. Angular vs. Vue?</h2>
            <p>
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
