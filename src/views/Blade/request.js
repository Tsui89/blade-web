export default function request (method, param, body) {
    let server=window.location.host;
    if (process.env.NODE_ENV==="development") {
        server="localhost:2999";
    }
    let url = 'http://'+server+'/api/v1/users';
    if (method === 'GET') {
        body = undefined;
     } else if(method === 'POST'){
        body = body && JSON.stringify(body);
    } else {
        url = url + '?id=' + param;
        body = body && JSON.stringify(body);
        console.log("value:",body);
    }

    return fetch(url, {
     method,
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
        body
    }).then((res) => {
        return res.json();
    });
}