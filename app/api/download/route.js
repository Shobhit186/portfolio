import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req) {

  const filePath = path.join(process.cwd(), "private/Shobhit_Resume_4yrs.pdf");
  
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const response = new NextResponse(fileBuffer, {
      headers: {
        "Content-Disposition": "attachment; filename=Shobhit_Resume_4yrs.pdf",
        "Content-Type": "application/pdf",
      },
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
