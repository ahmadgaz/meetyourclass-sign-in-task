import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import SignInForm from "@/components/sign-in-form";

export default function SignInPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <section className="max-w-full w-96">
                <Card className="w-full h-full">
                    <CardHeader>
                        <CardTitle>Sign In</CardTitle>
                        <CardDescription>
                            Click sign in to display your input.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <SignInForm />
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
