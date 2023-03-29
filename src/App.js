import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './Routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          {PublicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
