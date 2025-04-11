import { Button } from "@/components";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center flex-col justify-center">
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Social media analytics</h1>
      <p className="text-gray-400 font-semibold mt-3 text-sm sm:text-base md:text-lg">Navigate the digital world with ease and smart moves.</p>
      <div className="flex gap-4 md:gap-6 lg:gap-12 mt-10">
        <Link href={"top-users"}><Button>Check out Top Users</Button></Link>
        <Link href={"trending-posts"}><Button bg={"bg-gray-50"} color={"text-gray-900"} className={"hover:bg-zinc-900 hover:text-white"}>Grab the Trending Posts</Button></Link>
        <Link href={"feed"}><Button>Go to Feed</Button></Link>
      </div>
    </main>
  );
}
