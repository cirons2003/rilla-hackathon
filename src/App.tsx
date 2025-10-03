import './index.css';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/mainContent/MainContent';

const SIDEBAR_WIDTH = 30;
function App() {
  return (
    <div className="flex h-screen w-screen bg-gray-50">
      {/* Main Content - 70% width */}
      <div style={{ width: `${100 - SIDEBAR_WIDTH}%` }} className="bg-white">
        <MainContent />
      </div>
      {/* Sidebar - 30% width */}
      <div style={{ width: `${SIDEBAR_WIDTH}%` }} className="bg-gray-100 border-l border-gray-200">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
