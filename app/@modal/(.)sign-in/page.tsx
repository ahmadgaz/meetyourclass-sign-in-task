"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import SignInForm from "@/components/sign-in-form";
import { useRouter } from "next/navigation";

export default function SignInModal() {
    const router = useRouter();

    return (
        <Dialog
            defaultOpen
            onOpenChange={(isOpen) => {
                !isOpen && router.back();
            }}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogDescription>
                        Click sign in to display your input.
                    </DialogDescription>
                </DialogHeader>
                <SignInForm />
            </DialogContent>
        </Dialog>
    );
}
