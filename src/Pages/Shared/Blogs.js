import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="container mx-auto px-20">
        <div className="bg-#f3f4f6;">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20">
            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5">
                <svg
                  className="hi-outline hi-template inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">
                How does prototypical inheritance work?
              </h3>

              <p className="text-sm leading-6 text-gray-600">
              Prototypal Inheritance is a feature used to
                add methods and properties to objects. It is a method by which
                an object can inherit the properties and methods of another
                object. to get and set the Prototype of
                an object, we use Object. getPrototypeOf and Object
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5">
                <svg
                  className="hi-outline hi-cube inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">
                How will you improve the performance of a React Application?
              </h3>
              <ul className="text-sm leading-6 text-gray-600">
                <ol>1 Keeping component state local where necessary.</ol>
                <ol>
                  2 Memoizing React components to prevent unnecessary
                  re-renders.
                </ol>
                <ol>Code-splitting in React using dynamic import</ol>
                <ol>Windowing or list virtualization in React.</ol>
                <ol>Lazy loading images in React</ol>
              </ul>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5">
                <svg
                  className="hi-outline hi-cog inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">
                What are the different ways to manage a state in a React
                application?
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                Local state is most often managed in React using the useState
                hook. For example, local state would be needed to show or hide a
                modal component or to track values for a form component, such as
                form submission, when the form is disabled and the values of a
                form's inputs.
                <ul>
                  <ol>Data State.</ol>
                  <ol>Control State.</ol>
                  <ol>Session State.</ol>
                  <ol>Location State.</ol>
                  <ol>Conclusion.</ol>
                </ul>
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5">
                <svg
                  className="hi-outline hi-sparkles inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                When we directly update the state, it does not change this.
                state immediately. Instead, it creates a pending state
                transition, and accessing it after calling this method will only
                return the present value. You will lose control of the state
                across all components
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <div className="mb-5">
                <svg
                  className="hi-outline hi-sparkles inline-block w-12 h-12 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>

              <h3 className="text-lg font-bold mb-2">
                What is a unit test? Why should write unit tests?
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                Unit testing is a type of software testing where individual
                units or software components are tested. Its purpose is to
                validate that each unit of code performs as expected. A unit can
                be anything you want it to be ??? a line of code, a method, or a
                class.
                -----------------------------------------------------------------------------------------------
                Unit testing ensures that all code meets quality standards
                before it's deployed. This ensures a reliable engineering
                environment where quality is paramount. Over the course of the
                product development life cycle, unit testing saves time and
                money, and helps developers write better code, more efficiently
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
