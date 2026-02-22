'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";


export default function SignUp() {

    const [name, setName] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {

    }

    return <div className="flex min-h-[calc(100vh - 4rem)] items-center justify-center bg-white p-4">

        <Card className="w-full max-w-md border-gray-200 shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-black">Sign Up</CardTitle>
                <CardDescription className="text-gray-600">Create an account to start tracking your job application</CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="name" className="">Name</Label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border-gray-300 focus:border-primary focus:ring-primary"
                            required
                        />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <input type="text" placeholder="example@email.com" required />
                    </div>
                    <div>
                        <Label>Password</Label>
                        <input type="password" placeholder="password" required />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit">Sign Up</Button>
                    <p>Already have an account?<Link href='/sign-in'>Sign In</Link> </p>
                </CardFooter>
            </form>
        </Card>
    </div>
}