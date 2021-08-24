export declare function addOption(select: HTMLSelectElement, value: string | number, text: string, selected?: boolean): void;
export declare function addOptions(select: HTMLSelectElement, values: string[] | number[] | {
    id: string | number;
    name: string;
}[], selectedValue?: string | number | null): void;
export declare function removeOptions(select: HTMLSelectElement, start?: number, end?: number): void;
export declare function removeOption(select: HTMLSelectElement, value: string | number): void;
