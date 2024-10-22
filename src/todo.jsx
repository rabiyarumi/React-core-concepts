// export default function ToDo({ task, isDone }) {
//   console.log(task, isDone);
//   return (
//     <div>
//       <li>
//         {task}, {isDone}
//       </li>
//     </div>
//   );
// }

// //conditional rendering 1
// export default function ToDo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work on: {task}</li>;
//   }
// }

// //conditional rendering 2 (shortcut)
// export default function ToDo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Work on: {task}</li>;
// }

// //conditional rendering 3 (ternary operator)
// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finished" : "Work on"} : {task}
//     </li>
//   );
// }

// //conditional rendering 4 (&&)
// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && ": Done"}
//     </li>
//   );
// }
//conditional rendering 5 (||)
// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || ": Do it"}
//     </li>
//   );
// }

//conditional rendering 6
export default function ToDo({ task, isDone }) {
  let listItem;
  if (isDone === true) {
    listItem = <li>Finished: {task}</li>;
  } else {
    listItem = <li>Work on: {task}</li>;
  }
  return listItem;
}
