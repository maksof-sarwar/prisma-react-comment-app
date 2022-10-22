self.addEventListener('message', async (event) => {
    var file = event.data.file;
    var url = event.data.uri;
    var token=event.data.token;
    console.log("On Message upload file");
    uploadFile(file,url,token);
});

function uploadFile(file, url,token) {
    console.log("ONE ready callsed upload file");
    var xhr = new XMLHttpRequest();
    xmlHttpRequest.setRequestHeader('Authorization', 'Bearer ' + token);
    var formdata = new FormData();
    var uploadPercent;

    formdata.append('img', file);

    xhr.upload.addEventListener('progress', function (e) {
        console.log("ONE ready progress");
        //Use this if you want to have a progress bar
        if (e.lengthComputable) {
            uploadPercent = Math.floor((e.loaded / e.total) * 100);
            postMessage({"method":"progress","total":e.total,"loaded":e.loaded});
        }
    }, false);
    xhr.onreadystatechange = function () {
        console.log("ONE ready state");
        if (xhr.readyState == XMLHttpRequest.DONE) {
            postMessage({"method":"success","message":this.responseText,"statuscode":this.status});
        }
    }
    xhr.onerror = function () {
        console.log("ONE ERRROR");
        // only triggers if the request couldn't be made at all
        postMessage({"method":"failed","message":"Request failed"});
    };

    xhr.open('PATCH', url, true);

    xhr.send(formdata);
}