import { Statement } from './Statement';
import { IStatementRepos } from './IStatementRepos';

export class StatementClient implements IStatementRepos {

    public static createStatements(): Statement[] {
        const statements: Statement[] = [
            { order: 1, title: "title01", description: "description1" },
            { order: 2, title: "title02", description: "description2" },
            { order: 3, title: "title03", description: "description3" },
            { order: 4, title: "title04", description: "description4" },
            { order: 5, title: "title05", description: "description5" }
        ];
        return statements;
    }

    public getStatementsAsync(): Promise<Statement[]> {
        const statements = StatementClient.createStatements();
        const promise = new Promise<Statement[]>((resolve, reject) => resolve(statements));
        return promise;
    }
}