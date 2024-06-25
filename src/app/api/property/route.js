
import { NextResponse } from "next/server";
import { propertyData } from "../../../../public/API-Data/property";

export async function GET(req) {
  return NextResponse.json(propertyData);
}


 
