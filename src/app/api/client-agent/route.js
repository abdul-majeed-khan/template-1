import { NextResponse } from "next/server";
import { clientAgentData } from "../../../../public/API-Data/clientAgent";

export async function GET(req) {
  return NextResponse.json(clientAgentData);
}
