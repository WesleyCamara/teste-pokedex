import List from './components/List/List';
import Details from './components/Details/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
