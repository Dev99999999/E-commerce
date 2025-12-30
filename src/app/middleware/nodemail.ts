// import nodemailer from "nodemailer";

// export const mail = async (req: any, res: any, next: any) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "sonawanedevendra109@gmail.com",
//         pass: "ptowlouuumwcppvh",
//       },
//     });

//     await transporter.sendMail({
//       from: "sonawanedevendra109@gmail.com",
//       // to: ,
//       subject: "Test Email",
//       text: "Hello! This is a test mail",
//       html: "<h1>Hello from Node.js</h1>",
//     });

//     res.send("Email sent!");
//     console.log("Email sent successfully!");
//   } catch (err: any) {
//     console.log("Error:", err.message);
//     res.send("Failed to send email");
//   }

//   next()
// }


