/* import { CustomButton } from "./components/Button/Button";
import { CustomIcon } from "./components/Button/Icons";
import { faFish, faOtter, faDragon } from '@fortawesome/free-solid-svg-icons'; */
import { Search } from "./components/Travel/Search";
import { Hotel } from "./components/Travel/Hotel";
import './App.css'
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [geoId, setGeoId] = useState("");



  const handleResult = (data: any) => {
    const cityInfo = data["data"]["AppPresentation_queryAppSearch"]["sections"][1]["appSearchCardContent"];
    if(cityInfo) {
      setLocation(cityInfo["primaryInfo"]["text"]);
      setGeoId(cityInfo["saveId"]["id"]);
    }
  }

  return (
    <main>
      <Search onSearchResults={handleResult} />
      {
        location ? (
          <>
            <p>Hotels found in {location} </p>
            <Hotel geoId={geoId} />
          </>
        ) : (
          <p>No location yet.</p>
        )
      }
      {/* 
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
       */}
    </main>
  )
}

export default App;
