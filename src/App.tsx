import { useRef } from 'react';
import { CustomButton } from "./components/Button";
import './App.css'

function App() {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <CustomButton ref={btnRef} color="light" icon="facebook">
        Click me
      </CustomButton>
      <CustomButton ref={btnRef}>
        Don't click on me
      </CustomButton>
      <CustomButton ref={btnRef} color="dark" icon="linkedin">
        Click me
      </CustomButton>
    </>
  )
}

export default App
