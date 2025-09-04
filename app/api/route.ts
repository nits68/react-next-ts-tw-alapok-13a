// Egyszerű API végpont, amely egy JSON választ ad vissza Next.js-ben?

import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "Hello from the NEXT.js API!" });
}
