import checkMethod from "../server/utils/checkMethod"
import { NextResponse } from "next/server"

export function middleware(req) {
    const allowedMethods = ['POST', 'GET', 'DELETE']
    return checkMethod(req.method, allowedMethods)
}