import User from "@/models/users";
import Connection from "@/config/conn";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

Connection();

export const POST = async(request) => {
    try {
        const req = await request.json();
        const { fullName, email, password, confirmPassword } = req;
        const regex = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/';

        if(!fullName || !email || !password || !confirmPassword) {
            return NextResponse.json({ message: "All Fields are required" });
        }
        else if(regex.match(email)) {
            return NextResponse.json({ message: "Invalid Email Address" });
        }
        else if(await User.findOne({ email: email })) {
            return NextResponse.json({ message: "Email Address already exists" });
        }
        else if(password !== confirmPassword) {
            return NextResponse.json({ message: "Password does not match" });
        }
        else {
            const otp = Math.floor(Math.random() * 1000000);
            const newUser = new User({
                fullName,
                email,
                password,
                verification_code: otp,
                reset_password_token: "",
                isVerified: false
            });
            const saveUser = await newUser.save();
            if(saveUser) {
                const transporter = nodemailer.createTransport({
                    host: "smtp.zoho.com",
                    port: 465,
                    secure: true,
                    auth: {
                      user: process.env.MAIL_USERNAME,
                      pass: process.env.MAIL_PASSWORD,
                    },
                });
                async function main() {
                    const info = await transporter.sendMail({
                        from: process.env.MAIL_USERNAME,
                        to: email,
                        subject: "Email Verification",
                        text: "Thank you for using our services! For the verification of your account, we require you to verify your identity with a one-time password (OTP).<br>",
                        html: `
                        Dear ${fullName},
                        <br><br>
                        Note that is OTP will be valid only for a limited period of time
                        <br><br>
                        Your Verification OTP: ${otp}
                        <br><br>
                        If you did not request a verification, please ignore this email.
                        <br><br>
                        Thank you for using our service.
                        `
                    });
                }
                main();
                return NextResponse.json({ message: "You have registered successfully" });
            }
        }
    } catch (error) {
        console.error(error);
    }
}