import { useRef } from 'react';
import { CustomButton } from "./components/Button";
import './App.css'

function App() {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <CustomButton ref={btnRef} color="salmon" onClick={() => alert("Clicked on Salmon!")}>
        Click me
      </CustomButton>
      <CustomButton ref={btnRef} color="green" onClick={() => alert("Clicked on Green!")}>
        Click me
      </CustomButton>
      <CustomButton ref={btnRef} onClick={() => alert("Found me!")}>
        Click me
      </CustomButton>
    </>
  )
}

export default App
