import jsonp from 'jsonp';
export const getBaidu = ({ value }) => {
    return new Promise((resolve, reject) => {
        jsonp('http://suggestion.baidu.com/su?wd=' + value, { param: "cb" }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}
