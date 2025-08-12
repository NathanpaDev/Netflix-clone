export interface Snippet {
    prefix: string;
    body: (string | null)[];
}
export declare function generateSnippets(withMarkdown?: boolean): void;
