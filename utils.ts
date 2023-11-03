export function uuid() {
    return String(Math.random());
}

export function JSONToString(json: {}): string | void {
    if (!json) return;

    if (typeof json !== "object") return;

    return JSON.stringify(json);
}