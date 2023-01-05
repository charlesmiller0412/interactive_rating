import thanksImg from "../assets/illustration-thank-you.svg";

export const Thanks = (props: any) => {
    return (
        <div className="thanks">
            <picture className="thanks__picture">
                <img
                    src={thanksImg}
                    alt="thank you illustration"
                    className="thanks__picture--img"
                />
            </picture>
            <span className="thanks__ratingDisplay">
                You selected {props.choice} out of 5
            </span>
            <h2 className="thanks__title">Thank you!</h2>
            <p className="thanks__text">
                {props.choice > 3
                    ? "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
                    : "We appreciate you taking the time to give a rating. Sorry we didn't meet your expectations. Feel free to email us with further suggestions!"}
            </p>
        </div>
    );
};
