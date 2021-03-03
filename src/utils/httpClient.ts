export default (url: any, options: any) => fetch(url, options).then((res) => res.json());
