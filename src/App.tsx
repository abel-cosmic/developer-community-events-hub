import { RouterProvider } from "react-router-dom";
import { ModalProvider } from "./utils/providers/modal";
import router from "./lib/route";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ModalProvider>
  );
}

export default App;
