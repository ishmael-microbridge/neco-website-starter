import { Routes, Route } from 'react-router-dom';

import SSCEInternal from '../pages/SSCEInternal';
import SSCEExternal from '../pages/SSCEExternal';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route element={<SSCEInternal />} path="/ssce-internal" />
      <Route element={<SSCEExternal />} path="/ssce-external" />
    </Routes>
  );
};

export default PublicRoutes;
