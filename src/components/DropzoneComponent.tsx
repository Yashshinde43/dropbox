"use client";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { MdDriveFolderUpload } from "react-icons/md";

import {
  Timestamp,
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { db } from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const DropzoneComponent = () => {
  const [loading, setLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const storage = getStorage(); // Initialize storage

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("File reading was aborted");
      reader.onerror = () => console.log("File reading has failed");
      0;
      reader.onload = async () => {
        await UploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const UploadPost = async (selectedFile: File) => {
    if (loading) return;
    if (!user) return;

    setLoading(true);
    // it just a function to get the file once.

    const docRef = await addDoc(collection(db, "users", user.id, "files"), {
      userId: user.id,
      filename: selectedFile.name,
      fullName: user.fullName,
      profileImg: user.imageUrl,
      timestamp: serverTimestamp(),
      type: selectedFile.type,
      size: selectedFile.size,
    });

    const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);
    await uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);
      updateDoc(doc(db, "users", user.id, "files", docRef.id), {
        downloadURL: downloadURL,
      });
    });

    setLoading(false);
  };
  return (
    <div>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="m-5">
            <div
              {...getRootProps()}
              className={cn(
                "w-50 h-52 flex justify-center item-center p-5 border dark:border-white light: border-black rounded-lg text-center text-2xl"
              )}
            >
              <input {...getInputProps()} />
              <div className="m-auto ">
                <p >Click here or drop a file to upload!</p>
                <MdDriveFolderUpload className="m-auto mt-3 text-5xl" />
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default DropzoneComponent;
