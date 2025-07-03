import { CustomButton } from "./components/Button";
import { CustomIcon } from "./components/Icons";
import { faFish, faOtter, faDragon } from '@fortawesome/free-solid-svg-icons';
import './App.css'

function App() {
  return (
    <main>
      <CustomButton rounded />
      <CustomButton label="main button" rounded></CustomButton>
      <CustomButton color="light" label="light button" size="small"></CustomButton>
      <CustomButton color="dark" label="dark button" size="large" rounded></CustomButton>
      
      <CustomButton label="Just Keep Swimming">
        <CustomIcon icon={faFish}/>
      </CustomButton>
      <CustomButton label="Fire" color="dark" size="large" rounded>
        <CustomIcon icon={faDragon} size="xs" color="blue"/>
      </CustomButton>

      <CustomIcon icon={ faFish }/>
      <CustomIcon icon={ faOtter } size="2xs" />
      <CustomIcon icon={ faDragon } color="red" size="2xl" />
    </main>
  )
}

export default App
