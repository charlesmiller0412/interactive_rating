import { useState } from "react";
import star from "../assets/icon-star.svg";
import { Choice } from "./choice";

export const Rating = (props: any) => {
    const [error, setError] = useState(false);

    function handleClick(num: any) {
        props.setChoice(num);
        console.log(props.choice);
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

    return (
        <div className="rating">
            <picture>
                <img src={star} alt="star" />
            </picture>
            <div className="message">
                <h1>How did we do?</h1>
                <p>
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div className="rating__choices">
                <Choice
                    num={1}
                    onClick={() => {
                        props.setChoice(1);
                    }}
                    className={
                        props.choice === 1 ? "choice activeChoice" : "choice"
                    }
                />
                <Choice
                    num={2}
                    onClick={() => {
                        props.setChoice(2);
                    }}
                    className={
                        props.choice === 2 ? "choice activeChoice" : "choice"
                    }
                />
                <Choice
                    num={3}
                    choice={props.choice}
                    onClick={() => {
                        props.setChoice(3);
                    }}
                    className={
                        props.choice === 3 ? "choice activeChoice" : "choice"
                    }
                />
                <Choice
                    num={4}
                    onClick={() => {
                        props.setChoice(4);
                    }}
                    className={
                        props.choice === 4 ? "choice activeChoice" : "choice"
                    }
                />
                <Choice
                    num={5}
                    onClick={() => {
                        props.setChoice(5);
                    }}
                    className={
                        props.choice === 5 ? "choice activeChoice" : "choice"
                    }
                />
            </div>
            <button className="rating__submit" onClick={handleSubmit}>
                submit
            </button>
            {error ? <span>Please select a rating...</span> : ""}
        </div>
    );
};
