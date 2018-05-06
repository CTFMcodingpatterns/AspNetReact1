import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Statement } from '../services/Statement';
import { IStatementRepos } from '../services/IStatementRepos';
//import { StatementClient } from '../services/StatementClient';
import { StatementInMemory } from '../services/StatementInMemory';
import 'isomorphic-fetch';
import { StatementClient } from 'ClientApp/services/StatementClient';


interface StatementsState {
    //repos: IStatementRepos;
    statements: Statement[];
    loading: boolean;
}

interface StatementProps {
    routeProps: RouteComponentProps<{}>;
    repos: IStatementRepos;
}

export class Statements extends React.Component<StatementProps, StatementsState> {
    constructor(props: StatementProps) {
        super(props);
        this.state = {
            statements: [],
            loading: true
        };
        this.fetchAndSetStatements();
    }

    private fetchAndSetStatements() {
        this.props.repos.getStatementsAsync()
            .then(data => this.setState({ statements: data, loading: false }))
            .catch(reason => console.log("reason: " + reason));
    }

    public render() {
        let contents = this.state.loading
            ? Statements.renderLoading()
            : Statements.renderTable(this.state.statements);

        return <div>
            <h1>Statements</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
            <button onClick={() => { this.fetchAndSetStatements() }}>Fetch</button>
        </div>;
    }

    private static renderLoading() {
        return <p><em>Loading Statements...</em></p>;
    }

    private static renderTable(statements: Statement[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th style={{ width: '5%'}}>#</th>
                    <th style={{ width: '20%' }}>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {statements.map(stmt =>
                    <tr key={stmt.order}>
                        <td>{stmt.order}</td>
                        <td>{stmt.title}</td>
                        <td>{stmt.description}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}