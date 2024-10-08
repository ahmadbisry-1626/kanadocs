import AddDocumentButton from "@/components/AddDocumentButton";
import { DeleteModal } from "@/components/DeleteModal";
import Navbar from "@/components/Navbar";
import Notifications from "@/components/Notifications";
import { fetchDocuments } from "@/lib/actions/room.actions";
import { dateConverter } from "@/lib/utils";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function Home() {
    const clerkUser = await currentUser()
    if (!clerkUser) redirect('/sign-in')

    const roomDocuments = await fetchDocuments(clerkUser.emailAddresses[0].emailAddress)

    return (
        <main className="home-container">
            <Navbar className="sticky left-0 top-0">
                <div className="flex items-center gap-2 sm:gap-4">
                    <Notifications />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </Navbar>

            {roomDocuments.data.length > 0 ? (
                <div className="document-list-container overflow-y-auto custom-scrollbar h-[calc(100vh-140px)]">
                    <div className="document-list-title">
                        <h3 className="text-28-semibold">
                            All documents
                        </h3>
                        <AddDocumentButton userId={clerkUser.id} email={clerkUser.emailAddresses[0].emailAddress} />
                    </div>

                    <ul className="document-ul">
                        {roomDocuments.data.map(({ id, metadata, createdAt }: any) => (
                            <li className="document-list-item hover:opacity-80 transition-all duration-300" key={id}>
                                <Link href={`/documents/${id}`} className="flex flex-1 items-center gap-4">
                                    <div className="hidden rounded-md bg-dark-500 p-2 sm:block">
                                        <Image src="/assets/icons/doc-home-1.svg" alt="Document icon" width={35} height={35} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="line-clamp-1 text-lg">{metadata.title}</p>
                                        <p className="text-sm font-light text-blue-100">Created about {dateConverter(createdAt)}</p>
                                    </div>
                                </Link>

                                <DeleteModal roomId={id} title={metadata.title} />
                            </li>
                        ))}
                    </ul>
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
