import thanksImg from "../assets/illustration-thank-you.svg";

export const Thanks = (props: any) => {
    return (
        <div className="thanks">
            <picture>
                <img src={thanksImg} alt="thank you illustration" />
            </picture>
            <span>You selected {props.choice} out of 5</span>
            <h2>Thank you!</h2>
            <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </div>
    );
};
