import { Statement } from './Statement';
import { IStatementRepos } from './IStatementRepos';
import { Children } from 'react';

export class StatementInMemory implements IStatementRepos {

    StatementList: Statement[];

    constructor() {
        this.StatementList = StatementInMemory.createStatements();
    }

    public static createStatements(): Statement[] {
        const statements: Statement[] = [
            StatementInMemory.createMCStatement(1, 1,
                "title01",
                "description1 bbb bbb bbb bbb bbb bbb bbb bbb bbb from memory class"),
            StatementInMemory.createMCStatement(2, 2, "title02", "description2 from memory class"),
            StatementInMemory.createMCStatement(3, 3, "title03", "description3 from memory class"),
            StatementInMemory.createMCStatement(4, 4, "title04", "description4 from memory class"),
            StatementInMemory.createMCStatement(5, 5, "title05", "description5 from memory class"),
        ];
        return statements;
    }

    public static createMCStatement(id: number, order: number, title: string, desc?: string, choices?: string[], weight?: number): Statement {
        const stmt: Statement = {
            kind: "multiplechoice",
            id: id,
            order: order,
            title: title,
            description: desc || null,
            choices: choices || StatementInMemory.createConsensChoices(),
            weight: weight || 0
        };
        return stmt;
    }

    //TODO: create separate Statement Type
    public static createConsensChoices(): string[] {
        const choices: string[] = [
            "agree 100%",
            "agree 50%",
            "agree 0%",
            "disagree 50%",
            "disagree 100%"
        ];
        return choices;
    }

    public static createColorChoices(num: number): string[] {
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