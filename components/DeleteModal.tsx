"use client";

import Image from "next/image";
import { useState } from "react";

import { deleteDocument } from "@/lib/actions/room.actions";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";

export const DeleteModal = ({ roomId, title }: { roomId: string, title: string }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const deleteDocumentHandler = async () => {
        setLoading(true);

        try {
            await deleteDocument(roomId);
            setOpen(false);
        } catch (error) {
            console.log("Error notif:", error);
        }

        setLoading(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="group flex flex-col items-center overflow-hidden">
                    <Image src="/assets/icons/delete.svg" alt="delete" width={28} height={28} className="cursor-pointer translate-y-3 group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-500" />
                    <p className="text-red-500 opacity-0 cursor-pointer group-hover:-translate-y-4 group-hover:opacity-100 transition-all duration-500">
                        Delete
                    </p>
                </button>
            </DialogTrigger>
            <DialogContent className="shad-dialog">
                <DialogHeader>
                    <div className="flex items-center gap-3 !mb-4">
                        <div className="flex items-center justify-center size-10 rounded-full bg-red-500 p-2">
                            <Image
                                src="/assets/icons/delete-white.svg"
                                alt="delete"
                                width={20}
                                height={20}
                            />
                        </div>
                        <DialogTitle>
                            Delete document
                        </DialogTitle>
                    </div>
                    <span className="font-semibold text-[16px]">{title}</span>
                    <DialogDescription>
                        Are you sure you want to delete this document? This action cannot be
                        undone.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="mt-2">
                    <DialogClose asChild className="w-full bg-dark-400 text-white">
                        Cancel
                    </DialogClose>

                    <Button
                        variant="destructive"
                        onClick={deleteDocumentHandler}
                        className="gradient-red w-full"
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
