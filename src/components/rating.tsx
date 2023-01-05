import { useState } from "react";
import star from "../assets/icon-star.svg";
import { Choice } from "./choice";

export const Rating = (props: any) => {
    const [error, setError] = useState(false);

    function handleClick(num: any) {
        props.setChoice(num);
        console.log(props.choice);
        return props.choice;
    }

    const handleSubmit = () => {
        if (props.choice !== null) {
            props.setSubmitted(true);
        } else {
            setError(true);
        }
        setTimeout(() => {
            setError(false);
        }, 3000);
    };

    // declare array of ratings
    let choices: number[] = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            <picture className="rating__picture">
                <img src={star} alt="star" className="rating__picture--img"/>
            </picture>
            <div className="rating__message">
                <h1 className="rating__message--title">How did we do?</h1>
                <p className="rating__message--text">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            {/* map through rating choices array & change style onClick */}
            <div className="rating__choices">
                {choices.map((choice: number) => (
                    <Choice
                        num={choice}
                        onClick={() => {
                            props.setChoice(choice);
                        }}
                        className={
                            props.choice === choice
                                ? "choice choice--active"
                                : "choice"
                        }
                    />
                ))}
            </div>
            <button className="rating__submit" onClick={handleSubmit}>
                submit
            </button>
            {error ? <span className="rating__error">Please select a rating...</span> : ""}
        </div>
    );
};
