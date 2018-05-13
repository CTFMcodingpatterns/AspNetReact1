export interface Answer {
    kind: string;
    stmtId: number;
    order: number;
    title: string;
    description: string | null;
    choices: Map<string,boolean> | null;
    weight: number | null;
}