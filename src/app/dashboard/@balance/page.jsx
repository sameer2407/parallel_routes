const BalancePage = () => {
  return (
    <div className="bg-white  flex flex-col items-center justify-center">
      <h1 className="text-1xl font-bold ">Welcome to the Balance Page</h1>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between w-full p-4 bg-gray-200 rounded-lg">
          <p className="text-lg font-bold">Total Balance</p>
          <p className="text-lg font-bold">$1000</p>
        </div>
        <div className="flex items-center justify-between w-full p-4 bg-gray-200 rounded-lg">
          <p className="text-lg font-bold">Monthly Balance</p>
          <p className="text-lg font-bold">$500</p>
        </div>
        <div className="flex items-center justify-between w-full p-4 bg-gray-200 rounded-lg">
          <p className="text-lg font-bold">Yearly Balance</p>
          <p className="text-lg font-bold">$6000</p>
        </div>
      </div>
    </div>
  );
};
export default BalancePage;
