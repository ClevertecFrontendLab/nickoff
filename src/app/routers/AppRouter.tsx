import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';

import { Juiciest } from '~/views/juiciest/Juiciest';
import { Main } from '~/views/main/ui/Main';
import { MainCourse } from '~/views/main-course/ui/MainCourse';
import { VeganCuisine } from '~/views/vegan-cuisine/VeganCuisine';

import { Layout } from '../layout';
import { ROUTES } from './config';

export const AppRouter = () => {
    const routers = createRoutesFromElements(
        <>
            <Route path={ROUTES.ROOT.path} element={<Layout />} errorElement={<p>Upps</p>}>
                <Route index element={<Main />} />
                <Route path={ROUTES.VEGAN_CUISINE.path} element={<VeganCuisine />}>
                    <Route path={ROUTES.MAIN_COURSE.path} element={<MainCourse />} />
                </Route>
                <Route path={ROUTES.JUICITEST.path} element={<Juiciest />} />
                <Route path='*' element={<h1>404</h1>} />
            </Route>
        </>,
    );
    const router = createBrowserRouter(routers, {});

    return <RouterProvider router={router} />;
};
