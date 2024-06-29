/**
  - O componente App deve renderizar a soma das constantes a e b 
  e seu resultado no seguinte formato: 1 + 1 = 2
*/

export default function App() {
  const a = 1;
  const b = 1;
  const result = a + b;

  return (
    <div className="App">
      <div>
        {a} + {b} = {result}
      </div>
    </div>
  );
}
