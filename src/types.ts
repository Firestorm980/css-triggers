
export type Result = boolean | null;

export interface Results {
    layout: Result;
    paint: Result;
    composite: Result;
}

export interface Browsers {
    blink: Results;
    gecko: Results;
    webkit: Results;
    edgehtml: Results;
}
