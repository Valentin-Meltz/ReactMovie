import dataLogo from "assets/no-data.webp";

export default function NotFound() {
  return (
    <div className="flex">
      <div className="flex">
        <div className="container min-w-ful py-10 px-52 flex flex-col items-center">
          <img src={dataLogo} alt="No data" className="w-1/2 mb-5" />
          <h1 className="text-3xl font-bold mb-3">Data Not Found</h1>
          <p className="text-lg text-gray-700">The movie you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
}