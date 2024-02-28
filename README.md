# Welcome to Reinventing React Hooks!

I know you've heard that reinventing pre-existing wheels sounds foolish, but it can provide valuable insights. If you're like me, it can satisfy your curiosity and be quite fun.

## Implementing useReducer with useState

Interestingly, the action is actually reversed in practice, with React having created useState out of useReducer. However, to me, useReducer seems more complex, and I believe every complex concept can be decomposed into simpler ones. For the implementation, I utilized two local states and a useEffect to monitor when the dispatch event occurs. I might find a cleaner and better method in the future. Rest assured, I will definitely keep you updated :)

### Usage

I made the hook in its own file and used it in a basic app so you can see how it works. To try the app, first clone the repository to your computer and then run these steps one by one:

```
npm install
```

then

```
npm start
```
