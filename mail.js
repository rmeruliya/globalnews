function sendMail(params){
var tempParams = {
from_name: document.getElementById("fromname").value,
to_name: document.getElementById("toName").value,
message: document.getElementById("msg").value,

};


emailjs.send('gamil', 'template_dy1rnq7',tempParams)
.then(function(res){
    console.log("success",res.status);
})
}