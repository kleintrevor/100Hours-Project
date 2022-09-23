import { actions, roles } from "./constants.js";

const mappings = new Map();

mappings.set(actions.MODIFY_FILE, [roles.ADMIN, roles.EDITOR]);
mappings.set(actions.VIEW_FILE, [roles.ADMIN, roles.EDITOR, roles.GUEST]);
mappings.set(actions.DELETE_FILE, [roles.ADMIN]);
mappings.set(actions.CREATE_FILE, [roles.ADMIN, roles.EDITOR]);

// if moved to new, seperate file:
// import mappings from "./permissions.js";

function hasPermission(file, action) {
  if (!file?.accessLevel) {
    return false;
  }

  if (mappings.has(action)) {
    return mappings.get(action).includes(file.accessLevel);
  }

  return false;
}

export default hasPermission;
export { actions, roles };

// Example of lay out below:

// import hasPermission from "./permissions.js";
// import { actions } from "./constants.js";

// function Dropdown() {
//   return (
//     <ul>
//       {hasPermission(file, actions.VIEW_FILE) && (
//         <li><button type="button">Refresh</button></li>
//       )}
//       {hasPermission(file, actions.MODIFY_FILE) && (
//         <li><button type="button">Rename</button></li>
//       )}
//       {hasPermission(file, actions.CREATE_FILE) && (
//         <li><button type="button">Duplicate</button></li>
//       )}
//       {hasPermission(file, actions.DELETE_FILE) && (
//         <li><button type="button">Delete</button></li>
//       )}
//     </ul>
//   );
// }