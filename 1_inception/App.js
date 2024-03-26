// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World from React!"
//   );

//   console.log(heading); // object

/**
 *
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm h1 tag</h1>
 *  </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag in child 1"),
    React.createElement("h2", {}, "I'm h2 tag in child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm another h1 tag in child 2"),
    React.createElement("h2", {}, "I'm another h2 tag in child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
