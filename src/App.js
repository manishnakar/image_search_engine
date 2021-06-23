  
import { useState } from "react";
import TitleSection from "./components/title_section";
import SearchBar from "./components/search_bar";
import axios from "axios";
import "./style/App.scss";

function App() {

  const [queryPics, setQueryPics] = useState("");

  return (
    <div className="App">
      <div>
        <TitleSection />
      </div>
      <div>
        <SearchBar
          onChange={(value) =>
            axios
              .get(
                `https://api.unsplash.com/search/photos?query=${value}&client_id=vB_kuwwQgE3EFFTYxpXfn8RnSHRkAl0QQCmJYODh02c&count=10`
              )
              .then((response) =>
                setQueryPics(
                  response.data.results.map((i) => {
                    return (
                      <img
                        src={i.urls.regular}
                        alt={i.alt_description}
                        key={i.id}
                        style={{ height: "345px" }}
                      />
                    );
                  })
                )
              )
              .catch((error) => console.log("error in api call", error))
          }
        />
      </div>
      <div className="query_results">{queryPics}</div>
    </div>
  );
}

export default App;
