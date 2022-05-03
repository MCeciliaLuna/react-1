import "./App.css";
import Navbar from "./components/Nabvar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Card from "./components/Card/Card";
import foto from "./assets/CV.jpg";
import Information from "./components/Information/Information";
import Form from "./components/Form/Form";
import Encendido from "./components/Encendido/Encendido";
import FormExample from "./components/FormExample/FormExample";
import UseEffectExample from "./components/UseEffectExample/UseEffectExample";

const App = () => {
  const arrayInformation = [
    {
      nombre: "María",
      edad: "28",
      altura: 179,
      descripción: "Lorem ipsum",
      dni: 40439171
    },
    {
      nombre: "Cecilia",
      edad: "24",
      altura: 156,
      descripción: "Lorem ipsum",
      dni: 13895345
    }
  ]
  return (
    <div className="App">
      <Navbar />
      <UseEffectExample />
      <FormExample />
      <Form />
      <Encendido />
      <Hero />
      <Services />
      <section className="my-4 row">
        {/* {
          info.map(data => <Card data = {data} />)
        } REPETIRÁ UNA CARD CON LA INFO DE LA BASE DE DATOS */}
          <div className="col">
            <Card image={foto} title="mi nueva card" />
          </div>
          <div className="col">
            <Card image="https://picsum.photos/200" />
          </div>
          <div className="col">
            <Card image="https://picsum.photos/400" />
          </div>
          <div className="col">
            <Card image="https://picsum.photos/100" />
          </div>
      </section>
      <div>
        {
          arrayInformation.map(persona => <Information key={persona.dni} nombre={persona.nombre} edad={persona.edad} altura={persona.descripción} />)
        }
      </div>

    </div>
  );
};

export default App;
