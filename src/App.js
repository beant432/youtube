import "./App.css";

import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import appStore from "./utils/store";
import SearchResults from "./components/SearchResults";
import DemoforHooks from "./components/DemoforHooks";

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/results",
        element: <SearchResults />
      },
      {
        path: "/demo",
        element: <DemoforHooks />
      },
    ],
  },
]);
function App() {
  return (
    <div className="text-center">
      <Provider store={appStore}>
        <Head />
        <RouterProvider router={reactRouter} />
      </Provider>
    </div>
  );
}
export default App;
