import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Statement } from '../services/Statement';
import { Answer } from '../services/Answer';
import 'isomorphic-fetch';
import { IStatementRepos } from 'ClientApp/services/IStatementRepos';


interface AnswersState {
    answers: Answer[];
    loading: boolean;
}

interface AnswersProps {
    routeProps: RouteComponentProps<{}>;
    repos: IStatementRepos;
    //TODOquestions: Statement[];
}

export class Answers extends React.Component<AnswersProps, AnswersState> {
    constructor(props: AnswersProps) {
        super(props);
        this.state = {
            answers: [],
            loading: true
        };
        this.fetchAndSetAnswers();
    }

    private fetchAndSetAnswers() {
        this.props.repos.getStatementsAsync()
            .then(questions => Answers.ToAnswers(questions))
            .then(answers => this.setState({ answers: answers, loading: false }))
            .catch(reason => console.log("reason: " + reason));
    }

    private static ToAnswers(questions: Statement[]): Answer[] {
        const answers: Answer[] = questions
            .map(question => this.ToAnswer(question));
        return answers;
    }

    private static ToAnswer(question: Statement): Answer {
        const answer: Answer = {
            kind: question.kind,
            stmtId: question.id,
            order: question.order,
            title: question.title,
            description: question.description,
            choices: null, //TODO
            weight: question.weight
        }
        return answer;
    }

    private static handleShowDetails(): any {
        //TODO
    }

    public render() {
        let contents = this.state.loading
            ? Answers.renderLoading()
            : Answers.renderTable(this.state.answers);

        return <div>
            <h1>Answers</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}          
        </div>;
    }

    private static renderLoading() {
        return <p><em>Loading Answers...</em></p>;
    }

    private static renderTable(answers: Answer[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Kind</th>
                    <th style={{ width: '1%' }}>#</th>
                    <th style={{ width: '1%' }}>#</th>
                    <th style={{ width: '20%' }}>Title</th>
                    <th>Description</th>
                    <th>Choices</th>
                    <th>Weight</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {answers.map(answer =>
                    <tr key={answer.order}>
                        <td>{answer.kind}</td>
                        <td>{answer.stmtId}</td>
                        <td>{answer.order}</td>
                        <td>{answer.title}</td>
                        <td>{answer.description}</td>
                        <td>{answer.choices && answer.choices.size}</td>
                        <td>{answer.weight}</td>
                        <td><button onClick={() => { this.handleShowDetails() }}>Details</button></td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}