export interface Statement {
    order: number;
    title: string;
    description: string;
    choices: string[] | null;
    weight: number | null;
}