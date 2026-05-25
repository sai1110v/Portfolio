import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      <CustomCursor />

      {loading ? <Loader /> : <Home />}
    </>
  );
};

export default App;