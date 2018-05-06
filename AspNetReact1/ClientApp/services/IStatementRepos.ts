import { Statement } from './Statement';

export interface IStatementRepos {
    getStatementsAsync(): Promise<Statement[]>;
}