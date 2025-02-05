import { NextResponse } from 'next/server';
import GoodreadsShelf from "goodreads-bookshelf-api";

export async function GET() {
    const myReadShelf = new GoodreadsShelf({
        username: "181546217-aram-shiva",
        shelf: "favorites",
    });

    try {
        const data = await myReadShelf.fetch();
        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}