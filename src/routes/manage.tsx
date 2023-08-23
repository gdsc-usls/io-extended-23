import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Member } from "../types";

export const Manage = () => {
  if (import.meta.env.PROD) {
    return <h1>Not Allowed</h1>;
  }

  const [members, setMembers] = useState("");

  const handleImport = () => {
    const parsedMembers: Member[] = JSON.parse(members);

    parsedMembers.forEach(async (member) => {
      await setDoc(
        doc(db, `certificates/io/members/${member.code.toUpperCase()}`),
        {
          firstName: member.firstName,
          lastName: member.lastName,
          email: member.email,
          type: member.type,
        }
      );
    });

    setTimeout(() => {
      setMembers("");
    }, 500);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleImport();
      }}
      className="max-w-screen-sm py-20 mx-auto text-white flex flex-col z-10 bg-[#202124] min-h-screen px-6"
    >
      <div>
        <h1 className="mb-2 text-2xl font-bold mt-24">Import Members</h1>
        <textarea
          className="p-4 text-black rounded outline-none min-h-[200px] w-full max-h-[500px]"
          placeholder="Paste JSON"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 py-4 px-6 rounded self-end mt-4"
      >
        Add Data
      </button>
    </form>
  );
};
