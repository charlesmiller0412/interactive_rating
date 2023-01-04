import { useState } from "react";
import { Rating } from "./components/rating";
import { Thanks } from "./components/thanks";

function App() {
    const [choice, setChoice] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    return (
        <main className="App">
            <div className="component">
                {!submitted ? (
                    <Rating
                        choice={choice}
                        setChoice={setChoice}
                        submitted={submitted}
                        setSubmitted={setSubmitted}
                    />
                ) : (
                    <Thanks choice={choice} />
                )}
            </div>
        </main>
    );
}

export default App;
