import "./App.css";
import photos from "./data/photos.json";
import Card from "./components/Card/Card";

function App() {
  console.log(photos);
  return (
    <main>
      <div>
        <h4 className="hero__header">Our Mission:</h4>
        <p className="hero__content">
          Provide photographers a space to share photos of the neighborhoods
          they cherish,{" "}
          <span className="hero__content-emphasized">
            expressed in their unique style
          </span>
        </p>
      </div>

      <div className="card-container">
        {photos.map((photo) => (
          <Card key={photo.id} props={photo} />
        ))}
      </div>
    </main>
  );
}

export default App;
