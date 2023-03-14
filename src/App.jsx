import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import PublikRoute from './shared/components/PublikRoute';
import PrivateRoute from './shared/components/PrivateRoute';
import Loader from './shared/components/Loader/CircularIndeterminate';

const HomePage = lazy(() => import('./pages/HomePage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage'));
const LoginAndRegisterPage = lazy(() => import("./pages/LoginAndRegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const App = () => {
  return (
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route element={<PublikRoute />}>
            <Route path={"/"} element={<LoginAndRegisterPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegisterPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/test" element={<HomePage />} />
            <Route path="/character/:id" element={<DetailsPage />} />
          </Route>

          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
  );
};

export default App;
