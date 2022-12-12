import './assets/css/App.css';
import Form from './Components/UserForm'
import Payment from './Components/PaymentForm';
import Header from './Components/Header';
import Completion from './Components/CompletionForm'

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Payment />
      <Completion />
    </div>
  );
}

export default App;
