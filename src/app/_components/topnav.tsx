"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <div className="flex flex-row gap-4">
          <SignedIn>
            <UploadButton
              onClientUploadComplete={() => {
                router.refresh();
              }}
              endpoint="imageUploader"
              className="text-lg"
              content={{
                button: "Upload",
              }}
              appearance={{
                button: "bg-rose-600 text-white px-4 py-2 rounded",
                container: "flex flex-row gap-4",
              }}
            />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
