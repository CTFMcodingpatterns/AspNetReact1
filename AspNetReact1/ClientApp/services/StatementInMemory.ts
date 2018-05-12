import { Statement } from './Statement';
import { IStatementRepos } from './IStatementRepos';

export class StatementInMemory implements IStatementRepos {

    StatementList: Statement[];

    constructor() {
        this.StatementList = StatementInMemory.createStatements();
    }

    public static createStatements(): Statement[] {
        const statements: Statement[] = [
            {
                order: 1,
                title: "title01 aaa aaa aaa",
                description: "description1 bbb bbb bbb bbb bbb bbb bbb bbb bbb from memory class",
                choices: StatementInMemory.createConsens(),
                weight: 0
            },
            { order: 2, title: "title02", description: "description2 from memory", choices: StatementInMemory.createChoices(5), weight: 0 },
            { order: 3, title: "title03", description: "description3 from memory", choices: null, weight: 1 },
            { order: 4, title: "title04", description: "description4 from memory", choices: null, weight: 2 },
            { order: 5, title: "title05", description: "description5 from memory", choices: null, weight: 3 },
            { order: 6, title: "title06", description: "description6 from memory", choices: null, weight: 0 },
            { order: 7, title: "title07", description: "description7 from memory", choices: null, weight: 0 },
            { order: 8, title: "title08", description: "description8 from memory", choices: null, weight: 0 },
        ];
        return statements;
    }

    //TODO: create separate Statement Type
    public static createConsens(): string[] {
        const choices: string[] = [
            "agree 100%",
            "agree 50%",
            "agree 0%",
            "disagree 50%",
            "disagree 100%"
        ];
        return choices;
    }

    public static createChoices(num: number): string[] {
        const choices: string[] = [
            "red",
            "green",
            "blue",
            "yellow",
            "magenta"
        ];
        return choices.slice(0, num);
    }

    public getStatementsAsync(): Promise<Statement[]> {
        const statements = this.StatementList;
        const promise = new Promise<Statement[]>((resolve, reject) => resolve(statements));
        return promise;
    }
}