import {NextRequest} from "next/server";
import mockData from "@/lib/mock-data";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const page = Number(searchParams.get('page') ?? 0);
    const pageSize = Number(searchParams.get('pageSize') ?? 50);
    const status = searchParams.get('status');
    const minRisk = Number(searchParams.get('minRisk') ?? 0);
    const filtered = mockData
        .filter(t => !status || t.status === status)
        .filter(t => !minRisk || t.riskScore >= Number(minRisk));
    const total = filtered.length;
    const start = page * pageSize;
    const items = filtered.slice(start, start + pageSize);

    await new Promise(r => setTimeout(r, 150));

    return Response.json({items, total, page, pageSize});
}