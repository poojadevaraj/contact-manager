import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Contact Manager</h1>
        <p className="mt-2 text-lg text-gray-600">Manage your contact easily and efficiently</p>
      </div>
    </div>
  );
}
