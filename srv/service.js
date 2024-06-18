const { sendMail } = require("@sap-cloud-sdk/mail-client");
const cds = require("@sap/cds")

module.exports = async (srv) => {
   
srv.on('CREATE',"sendEmail", async (req) => {
    try {
        console.log("Triggered....");
      const mailConfig = {
        from: "mariano.schaefer@ethereal.email",
        to: "keshav.kumar@ingenxtec.com",
        subject: "e-mail subject",
        text: "Hiii, This is the Testing Email",
      };
  
      let res = await sendMail({ destinationName: "outlookMailDestination" }, [mailConfig]);
      return [{
        "message"  : "Sent Success fully",
        "status" : 201
    }]
    } catch (error) {
      console.log(error);
    }
  });
}