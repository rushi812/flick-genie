import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Body from "./components/Body";
import Browse from "./components/Browse";
import appStore from "./store/appStore";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
