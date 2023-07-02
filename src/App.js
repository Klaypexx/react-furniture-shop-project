import Header from './components/Header'
import Preview from './components/Preview'
import Content from './components/Content'
import Comms from './components/Communication';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Preview />
      <Content />
      <Comms />
      <Footer />
    </div>
  );
}

export default App;
