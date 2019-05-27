const handlePost = require("../util").handlePost

module.exports = (req, res) => {

    if (req.method == "POST") {
        handlePost(req).then((postData) => {
            console.log(postData);

            res.writeHead(200, { "Content-Type": "text/plain" })
            res.write("data received");
            res.end();

        })
    } else {
        console.log("POST only");
    }

}