exports.handlePost = (req) => {
    return new Promise(function (resolve, reject) {
        let postData = '';

        req.on('data', function (chunk) {
            postData += chunk;
        })

        req.on('end', function () {
            resolve(postData);
        })
    })
}
