import React, {Fragment} from 'react';
import data from '../data';

class Faqs extends React.Component {
    render() {
        return (
            <div className="faqsGrid">
                { data.faqs.map((obj) => {
                    return (<Question key={obj.id} question={obj.question} answer={obj.answer} />);
                })}
            </div>
        );
    }
}

const Question = (props) => {
    return (
        <Fragment>
            <div className="question">
                <strong>{props.question}</strong>
            </div>
            <div className="answer">
                {props.answer}
            </div>
            <Separator />
        </Fragment>
    );
}

const Separator = () => {
    return (
        <div className="separator">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    );
}

export default Faqs;