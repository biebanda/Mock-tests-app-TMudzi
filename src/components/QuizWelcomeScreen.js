import styled from 'styled-components';
import categories from '../utils/categories';

const QuizColumn = styled.div`
    background-color: var(--secondary-bg-color);
    padding: 15px;
    width: 50%;

    p {
        font-size: 18px;
        margin: 0;
        letter-spacing: 0.5px;
    }

    @media screen and (max-width:480px) {
      width: 100%;
    }
`

const QuizDetails = styled.div`
    background-color: var(--secondary-bg-color);
    padding: 15px;
    display: flex;
    flex-flow: row;
    align-items: center;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    max-width: 80%;
    margin: auto;

    @media screen and (max-width:480px) {
      flex-wrap: wrap;
    }
`

const QuizWelcomeScreen = ({quizType,setQuizStarted}) => {
    const QuizNumber = quizType.split(':')[1];
    return(
        <>
            <h1 dangerouslySetInnerHTML={{__html:categories[Number(QuizNumber)].title}} />
            <QuizDetails>
                <QuizColumn>
                    <p>You will have 10 practicequestions. Answer them one by one. Best of Luck!</p>
                </QuizColumn>
                <QuizColumn>
                    <button className="button" onClick={ () => setQuizStarted(true) }>Start Practising</button>
                </QuizColumn>
            </QuizDetails>
        </>
    )
}

export default QuizWelcomeScreen;
