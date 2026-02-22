'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { error } from "console";
import Link from "next/link";
import { useState } from "react";


export default function SignIn() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
 

    const handleSubmit = async (e: React.FormEvent) => {
        window.alert("handle called")
    }

    return <div className="flex min-h-[calc(100vh - 4rem)] items-center justify-center bg-white p-4">

        <Card className="w-full max-w-md border-gray-200 shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-black">Sign In</CardTitle>
                <CardDescription className="text-gray-600">Enter your user credentials to Log in</CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
                <CardContent className="space-y-4">
                    
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="text"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border-gray-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Password</Label>
                        <Input type="password"
                            placeholder="password"
                            value={password}
                            minLength={8}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border-gray-200"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button 
                        type="submit"
                        className="w-full hover:bg-gray-900"
                        disabled={loading}
                    >   {loading ? "Loggin in.." : "Sign In"} </Button>
                    <p className="text-center text-sm text-gray-600">
                        Want to create an account? {" "}
                        <Link href='/sign-up' className="font-medium text-blue-500 hover:underline">
                             Sign Up
                        </Link> 
                    </p>
                </CardFooter>
            </form>
        </Card>
    </div>
}