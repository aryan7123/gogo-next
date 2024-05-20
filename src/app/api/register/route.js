import User from "@/models/users";
import Connection from "@/config/conn";
import { NextResponse } from "next/server";

const POST = async(request) => {
    try {
        const req = await request.json();
        const { fullName, email, password, confirmPassword } = req;
    } catch (error) {
        console.error(error);
    }
}

export default POST;