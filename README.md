# Project Structure

This project follows a modular and organized structure to maintain scalability and reusability.

## 📂 Components

The `components` folder is divided into the following subdirectories:

1. **`pages-components`**

   - Contains components specific to pages in the `app` folder.
   - These components are used only within their respective pages.

2. **`pure-ui-components`**

   - Includes reusable components with pure UI elements.
   - Contains no functionality, focusing purely on design and styling.

3. **`reusable-components`**

   - Contains components that can be used on multiple pages.
   - These components may combine multiple UI components and include functionality.

4. **`shared-components`**
   - Houses components used within the layout that will not re-render when navigating to different routes within the same layout.

---

## 📂 Hooks

- **Global Reusable Hooks**

  - Reusable hooks used widely across the project are placed in the root `hooks` folder.

## 📂 Contexts

- **Context Management**
  - Contains React context files used for global state management.
  - Contexts are organized by feature or domain (e.g., `auth`, `settings`, etc.).

---

## 📂 Utils

- Contains helper functions and utility methods used across the project.

---

## 📂 Lib

- Used for library configurations and third-party integrations.

---

## 📂 Consts

- **Centralized Constants**
  - Contains constants used across the project to ensure consistency and reduce redundancy.
  - Examples include theme modes, API endpoints, and shared key values.
  - Example file: `consts/theme.ts`:
    ```ts
    export const THEME_MODES = {
      LIGHT: "light",
      DARK: "dark",
    };
    ```

### Naming Convention

In this project, we follow a consistent folder and file naming convention. **All folder and file names are written in lowercase, with hyphens used to separate words**. This approach ensures consistency and improves readability across the codebase.

#### Examples:

- **Correct:**
  - `axios-auth` (for Axios authentication-related files and folders)
  - `utils-helpers` (for utility functions or helpers)
  - `shared-components` (for shared UI components used in multiple places)
- **Incorrect:**
  - `AxiosAuth` (incorrect camel case for folder names)
  - `UtilsHelpers` (incorrect camel case for folder names)

Please follow this convention when adding new folders or files to the project.

---

This structure ensures a clean and maintainable project, promoting modularity and reusability.
#   H e s t i a  
 #   H e s t i a  
 