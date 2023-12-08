import "./App.css";

import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
import appStore from "./utils/store";
import SearchResults from "./components/SearchResults";
import DemoforHooks from "./components/DemoforHooks";
import RouteNotFound from "./components/RouteNotFound";


const reactRouter = createHashRouter([
  {
    path: "/",
    element:<Body />,
    children: [
      {
        path: "/",
        element:<MainContainer />,
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
      {
        path: "*",
        element: <RouteNotFound />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="text-center">
      <Provider store={appStore}>
        <RouterProvider router={reactRouter} />
      </Provider>

      
    </div>
  );
}
export default App;
