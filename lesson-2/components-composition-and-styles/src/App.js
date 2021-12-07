import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './styles/App.scss';

import data from "./data";

function App() {
  return (
    <div className="page">
      <Sidebar menuItems={data.sidebarMenu} />
      <Main />
    </div>
  );
}

export default App;
