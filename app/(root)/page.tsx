import AddDocumentButton from "@/components/AddDocumentButton";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";


export default async function Home() {
    const clerkUser = await currentUser()
    if (!clerkUser) redirect('/sign-in')

    const documents = []

    return (
        <main className="home-container">
            <Navbar className="sticky left-0 top-0">
                <div className="flex items-center gap-2 sm:gap-4">
                    Notifications
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </Navbar>

            {documents.length > 0 ? (
                <div>

                </div>
            ) : (
                <div className="document-list-empty md:!gap-6">
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/assets/icons/doc-new-cut.svg"
                            alt="No documents"
                            width={45}
                            height={45}
                            className="mx-auto"
                        />
                        <h2 className="text-center text-[#1C274C] font-semibold text-[20px]">
                            You have no documents yet
                        </h2>
                    </div>

                    <AddDocumentButton
                        userId={clerkUser.id}
                        email={clerkUser.emailAddresses[0].emailAddress}
                    />
                </div>
            )}
        </main>
    );
}
