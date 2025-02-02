import Button from "@/components/button";
import { section } from "framer-motion/client";

export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8">
                    Design tools shouldn&apos;t slow you down. Layers combine powerful features with an intuitive interface that keeps you in your creative flow.
                </p> 

                {/* Fixed Form */}
                <form className="flex items-center border border-white/15 rounded-full p-2 mt-8 w-full max-w-md mx-auto">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-transparent px-4 flex-grow outline-none w-full"
                    />
                    <Button 
                        type="submit" 
                        variant="primary" 
                        className="whitespace-nowrap shrink-0 px-4 py-2"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
