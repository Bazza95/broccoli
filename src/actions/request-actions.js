import 'whatwg-fetch';

export const sendInviteRequest = (invitePayload, callback) => {
    let url = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth/';
    fetch(url, {
        method: "POST",
        body: JSON.stringify(invitePayload)
    }).then(function (response) {
        let contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return response.json();
        }
        throw new TypeError("Oops, we haven't got JSON!");
    }).then(function (json) {
        callback(json);
    }).catch(function (error) {
        callback(error);
    });
};