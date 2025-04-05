import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';

import { Main } from '~/views/main/Main';
import { TopPicks } from '~/views/top-picks/TopPicks';
import { VeganKitchen } from '~/views/vegan-kitchen/VeganKitchen';

import { Layout } from '../layout/Layout';
import { ROUTES } from './config';

export const AppRouter = () => {
    const routers = createRoutesFromElements(
        <>
            <Route path={ROUTES.ROOT} element={<Layout />} errorElement={<p>Upps</p>}>
                <Route index element={<Main />} />
                <Route path={ROUTES.VEGAN_KITCHEN} element={<VeganKitchen />} />
                <Route path={ROUTES.TOP_PICKS} element={<TopPicks />} />
                <Route path='*' element={<h1>404</h1>} />
            </Route>
        </>,
    );
    const router = createBrowserRouter(routers, {});

    return <RouterProvider router={router} />;
};
