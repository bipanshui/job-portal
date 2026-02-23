'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try{
            const result = await signUp.email({
                name,
                email,
                password
            })

            if(result.error){
                setError(result.error.message ?? "Failed to sign up")
            }else{
                router.push("/dashboard")
            }
        }catch{
            setError("An unexpected error ocurred");
        }finally{
            setLoading(false);
        }
    }

    return <div className="flex min-h-[calc(100vh - 4rem)] items-center justify-center bg-white p-4">

        <Card className="w-full max-w-md border-gray-200 shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-black">Sign Up</CardTitle>
                <CardDescription className="text-gray-600">Create an account to start tracking your job application</CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
                <CardContent className="space-y-4">
                    {error && (
                        <div className="rounded-md">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="name" className="">Name</Label>
                        <Input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border-gray-200"
                            required
                        />
                    </div>
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
                    >   {loading ? "Creating account.." : "Sign up"} </Button>
                    <p className="text-center text-sm text-gray-600">
                        Already have an account? {" "}
                        <Link href='/sign-in' className="font-medium text-blue-500 hover:underline">
                             Sign In
                        </Link> 
                    </p>
                </CardFooter>
            </form>
        </Card>
    </div>
}