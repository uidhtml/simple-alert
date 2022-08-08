function simpleAlert(type, msg) {
    type === "alert" ? alert(msg) : console.log(msg);
}

module.exports.simpleAlert = simpleAlert;