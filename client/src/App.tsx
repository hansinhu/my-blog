import DefaultLayout from '@/components/Layout'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import {
  Route,
  Routes,
  Outlet,
} from "react-router-dom";


function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </DefaultLayout>
  );
}

export default App