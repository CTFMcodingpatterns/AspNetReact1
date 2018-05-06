import { Statement } from './Statement';
import { IStatementRepos } from './IStatementRepos';

export class StatementInMemory implements IStatementRepos {
    public static createStatements(): Statement[] {
        const statements: Statement[] = [
            {
                order: 1,
                title: "title01 aaa aaa aaa",
                description: "description1 bbb bbb bbb bbb bbb bbb bbb bbb bbb"
            },
            { order: 2, title: "title02", description: "description2" },
            { order: 3, title: "title03", description: "description3" },
            { order: 4, title: "title04", description: "description4" },
            { order: 5, title: "title05", description: "description5" },
            { order: 6, title: "title06", description: "description6" },
            { order: 7, title: "title07", description: "description7" },
            { order: 8, title: "title08", description: "description8" },
        ];
        return statements;
    }

    public getStatementsAsync(): Promise<Statement[]> {
        const statements = StatementInMemory.createStatements();
        const promise = new Promise<Statement[]>((resolve, reject) => resolve(statements));
        return promise;
    }
}