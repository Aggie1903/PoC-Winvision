import { useState } from "react";

export default function Version1Question(props) {

    const [answer, setAnswer] = useState('');

    return (
        <div
            className="row mb-4 p-4"
            style={{ backgroundColor: "rgba(234,241,238,255)", width: "75%" }}
        >
            <div className="row d-flex justify-content-start" data-testid={`title${props.titleid}`}>
                <h4 className="pe-0">{props.title} </h4>
                <h5>
                    
                    {props.assignment}
                </h5>
            </div>

            <div className="row">
                <p>
                    {props.question}
                </p>
            </div>
            <div className="row mt-2">
                <textarea
                    data-testid={`textarea${props.textareaid}`}
                    className="form-control"
                    rows={3}
                    placeholder="Vul je antwoord hier in!"
                    value={answer}
                    onChange={event => setAnswer(event.target.value)}
                />
            </div>
            <div className="row mt-2">
                <button className="btn btn-success w-25"
                    data-testid={`btn${props.btnid}`}
                    onClick={() => props.handleSubmit(props.nquestion, answer)} >Indienen</button>
            </div>
            {props.success && (
                <div className="alert alert-success mt-2" data-testid={`success-message${props.succesid}`} role="alert">
                    Antwoord is succesvol verzonden!
                </div>
            )}
        </div>
    );
}