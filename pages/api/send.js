
async function sendMessage() {
    var myHeaders = new Headers();
    myHeaders.append("authority", "discord.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.9");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("origin", "https://dev.to");
    myHeaders.append("referer", "https://dev.to/");
    myHeaders.append("sec-ch-ua", "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "cross-site");
    var raw = JSON.stringify({
        username: "",
        content: "+1",
        // avatar_url: sneaker?.image ? sneaker?.image : "",
    
    })
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return (await fetch("https://discord.com/api/webhooks/1003052434840621177/U-ciwUlENt3CDdWKUqkhkkJteBxlmOv1251REQcEjG40gf91ERASznqsJdNIrHgM4PI7", requestOptions)).status
}

export default async (req, res) => {
    if (req.method === 'GET') {
            let response = await sendMessage()
            return res.status(200).json({ response })
    }    
}



