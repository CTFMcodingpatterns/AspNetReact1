import { Statement } from './Statement';
import { IStatementRepos } from './IStatementRepos';

export class StatementClient implements IStatementRepos {

    public getStatementsAsync(): Promise<Statement[]> {
        const resultPromise = fetch('api/Statement')
            .then(response => response.json() as Promise<Statement[]>);
        return resultPromise;
    }
}