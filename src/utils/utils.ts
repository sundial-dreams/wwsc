export const cls: (...name: any[]) => string = (...name: any[]) => name.join(" ");


export const stringify: (object: any) => string = (object: any) => Object.keys(object).reduce((acc, curKey) => acc + `${curKey}=${object[curKey]}`, "").replace(/&$/g, "");

export const parser: (str: string) => any = (str: string) => str.replace(/^\?/g, "").split("&").reduce((acc, curToken) => {
    const [k, v] = curToken.split("=");
    (acc as any)[k] = v;
    return acc;
}, {});

export const imageUrl: (url: string) => string = (url: string) => {
    const isDev = process.env.NODE_ENV === 'development';
    url = url.replace(/^\//g, "");
    // TODO 需要改哦
    const prodPrefix = "https://cmsadmin.xmu.edu.cn/system/_owners/wwcs/_webprj/images/";
    if (isDev) {
        if (url.endsWith(".MOV")) {
            return `main_page/resources/images/graduation_season/vedio.MOV`;
        }

        return require(`~resources/images/${url}`).default;
    } else {
        return `${prodPrefix}/${url}`;
    }
};