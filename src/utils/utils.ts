export const cls = (...name: any[]) => name.join(" ");


export const stringify = (object: any) => Object.keys(object).reduce((acc, curKey) => acc + `${curKey}=${object[curKey]}`, "").replace(/&$/g, "");

export const parser: (str: string) => any = (str: string) => str.replace(/^\?/g, "").split("&").reduce((acc, curToken) => {
    const [k, v] = curToken.split("=");
    (acc as any)[k] = v;
    return acc;
}, {});