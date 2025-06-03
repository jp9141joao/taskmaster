# TaskMaster
This project is a simple Front-End application developed with React and TypeScript. The goal of the project is to practice the use of Hooks (such as `useState` and `useEffect`), form handling, state management, and the use of `localStorage` to persist data. The application consists of two main components: user registration and task registration.

## Features

* **User Registration:**

  * Displays a prompt for the user to enter their name.
  * Stores the name in `localStorage` to persist it even after the page is refreshed.
  * Allows registration and display of information such as name, email, and age.

* **Task Registration:**

  * Allows adding tasks to a list.
  * Displays the list of registered tasks using the `map` function.
  * Persists tasks in `localStorage`, preventing data loss on refresh.

## Project Structure

```
/exercises_2
│── /src
    │── /assets
    │   ├── screenshot-1.png
    │   ├── screenshot-2.png
    │── /components
    │   ├── Register.tsx
    │   ├── Tasks.tsx
    │── /styles
    │   ├── global.css
    │── App.tsx
    │── main.tsx
    │── index.html
    │── tsconfig.json
```

* **/assets**: Contains screenshot images (`screenshot-1.png` and `screenshot-2.png`) showing the application.
* **/components**: Contains the main components (`Cadastro.tsx` and `Tarefas.tsx`).
* **/styles**: Contains the `global.css` file with global styles for the application.
* **App.tsx**: Root component that integrates the Registration and Tasks components.
* **main.tsx**: Entry point of the application where React renders the App.
* **index.html**: Main HTML file that hosts the application.
* **tsconfig.json**: TypeScript compiler configuration.

## Technologies Used

* **React**: Library for building user interfaces.
* **TypeScript**: JavaScript superset with static typing.
* **Hooks**: Use of `useState` and `useEffect` for state management and side effects.
* **localStorage**: Browser API used for data persistence.

## Screenshots

Below are some screenshots of the application:
![Screenshot 1](./exercises_2/src/assets/screenshot-1.png)
![Screenshot 2](./exercises_2/src/assets/screenshot-2.png)

## How to Run the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jp9141joao/taskmaster.git
   cd taskmaster-react
   cd taskmaster
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

   The app will start and can be accessed at [http://localhost:3000](http://localhost:3000).

## Final Considerations

This project, named **TaskMaster**, was developed to demonstrate basic React concepts with TypeScript, including form handling, state management with Hooks, and data persistence using `localStorage`. It can serve as a foundation for more complex projects and for learning best practices in front-end development.
