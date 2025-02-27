// define a sinple data model

import { headers } from "next/headers";

export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 30,
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@example.com",
        age: 25,
    },
]

export async function GET() {
    return Response.json(users)
}
export async function POST(request: Request) {
    const user = await request.json();
    const newUser = {
        id: users.length + 1,
        name: user.name,
        email: user.email,
        age: user.age,
    }
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-type": "application/json",
        },
        status: 201,
    });
}