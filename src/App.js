import './App.css';
import Counter from './counter';
import MyHeader from './MyHeader';
import Container from './Container';

function App() {
  return (
        <Container>
          <div>
            <MyHeader />
            <Counter initialValue = {10} />
          </div>
        </Container>
  );
}

export default App;
