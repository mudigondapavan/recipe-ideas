import { Outlet, useNavigation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className='flex flex-col h-screen justify-between bg-slate-100'>
      <Header />
      <main className='overflow-y-scroll'>
        {isLoading ? <LoadingSpinner /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
