import { Providers } from './providers/Providers';
import { AppRouter } from './routers/AppRouter';

function App() {
    return (
        <Providers>
            <AppRouter />
        </Providers>
    );
}

export default App;
