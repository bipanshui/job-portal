'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [activeTab, setactiveTab] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track job application.
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, Organize, and manage your job application in one place.
            </p>
            <div className="flex flex-col items-center">
              <Link href='/sign-up' >
                <Button size='lg' className="h-12 px-8 text-lg font-medium">
                  Start for Free <ArrowRight className=""></ArrowRight>
                </Button>
              </Link>
              <p>Free forever. No credit card required.</p>
            </div>
          </div>

        </section>



        {/* Hero Images Section with Tabs */}
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">

            <div className="mx-auto max-w-6xl">
              {/* Tabs */}
              <div className="flex gap-2 justify-center">
                <Button onClick={() => setactiveTab(activeTab === "organize" ? "" : "organize")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'organize' ? "bg-gray-700" : ""}`}>Organize Applications</Button>
                <Button onClick={() => setactiveTab(activeTab === "get-hired" ? "" : "get-hired")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'get-hired' ? "bg-gray-700" : ""}`}>Get Hired</Button>
                <Button onClick={() => setactiveTab(activeTab === "manage-boards" ? "" : "manage-boards")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'manage-boards' ? "bg-gray-700" : ""}`}>Manage Boards</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {
                  activeTab === "organize" && <Image
                    src='/hero-images/hero1.png'
                    width={1200}
                    height={800}
                    alt="hero1"
                  />
                }

                {
                  activeTab === "get-hired" && <Image
                    src='/hero-images/hero2.png'
                    width={1200}
                    height={800}
                    alt="hero2"
                  />
                }

                {
                  activeTab === "manage-boards" && <Image
                    src='/hero-images/hero3.png'
                    width={1200}
                    height={800}
                    alt="hero3"
                  />
                }

              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
