export const imageUrl: (url: string) => string = (url: string) => {
    const isDev = process.env.NODE_ENV === 'development';
    url = url.replace(/^\//g, "");
    // TODO 需要改哦
    const prodPrefix = "https://cmsadmin.xmu.edu.cn/system/_owners/wwcs/_webprj/images/";
    return isDev ? require(`~resources/images/${url}`).default : `${prodPrefix}/${url}`;
};