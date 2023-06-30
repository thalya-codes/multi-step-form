import Button from "./components/Button";

function App() {
  return (
    <div className="flex gap-10 mt-14">
      <Button 
        hasBackground
        onClickFunc={() => console.log('click')}
      >Finalizar cadastro </Button>

      <Button 
        onClickFunc={() => console.log('click')}
      >
        <span className="">
          Voltar
        </span>
      </Button>
    </div>
  );
}

export default App;
