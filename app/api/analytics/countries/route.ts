import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { getCountryData } from "@/lib/analytics";

export async function GET(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated();

    if (!authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const startDate = searchParams.get("startDate") || "30daysAgo";
    const endDate = searchParams.get("endDate") || "today";

    const data = await getCountryData(startDate, endDate, 10);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in countries API:", error);
    return NextResponse.json(
      { error: "Failed to fetch country data" },
      { status: 500 }
    );
  }
}
