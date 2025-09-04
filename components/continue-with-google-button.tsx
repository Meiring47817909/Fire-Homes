"use client";

import { useAuth } from "@/context/auth";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function ContinueWithGoogleButton() {
   const auth = useAuth();
   const router = useRouter();

    return (
        <Button 
        variant="outline"
        onClick={async () => {    
            try { //Does not work
                await auth?.loginWithGoogle();      
                router.refresh(); 
            } catch (e) {};
        }}
        className="w-full"
        >         
            Continue with Google
        </Button>
    );
}