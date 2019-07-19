# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a component based framework that is designed to make applications run faster by creating a virtual dom that compares itself to the actual dom - only updating specific changes to individual DOM nodes when a change has occured in the virtual DOM. 

1. What does it mean to think in react?

It means to think about how your application can be broken down into reuseable components and design your app with those considerations. 

1. Describe state.

State is the applications data.

1. Describe props.

Props are the properties of all the objects in the dom. Props can be passed in from State and
used as props in components in React. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are a potential whenever any interface with an outside API or internal dependencies 
makes unpredicatable mutations. To sync effects and prevent side effects in a React component 
it is important to use the hook: useEffect. 

Done!
