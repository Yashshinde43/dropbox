import DropzoneComponent from "@/components/DropzoneComponent";
import { auth } from "@clerk/nextjs/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { FileType } from "../../../typing";
import TableWrapper from "@/components/Table/TableWrapper";

const dashboard = async () => {
  const { userId } = auth();
  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));

  return (
    <div className="border-t">
      <DropzoneComponent />
      <section className="container space-y-5">
        <h2 className="font-bold text-2xl">All Files</h2>
        <TableWrapper skeletonFiles={skeletonFiles} />
      </section>
    </div>
  );
};

export default dashboard;
