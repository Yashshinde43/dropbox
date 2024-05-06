import { ArrowRight } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="p-5 sm:p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-3 sm:space-y-5">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Welcome to Dropbox 2.O
            <br />
            Storing everything for you and your business needs. All in one place.
          </h1>
          <div className="flex flex-col sm:flex-row">
            <p className="pb-10 sm:pb-20">
              Enhance your personal storage with Dropbox, offering a simple and
              efficient way to upload, organize and access files from anywhere.
              Securely store important documents and media, and experience the
              convenient and easy file management and sharing in one centralized
              solution.
            </p>
          </div>
          <Link
            href={"/dashboard"}
            className="flex bg-blue-500 cursor-pointer w-fit p-3 sm:p-5"
          >
            Try it for free!
            <ArrowRight className="ml-5 sm:ml-10" />
          </Link>
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default page;