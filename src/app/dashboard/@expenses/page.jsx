const ExpensesPage = () => {
  return (
    <div className="bg-white  flex flex-col items-center justify-center">
      <h1 className="text-1xl font-bold ">Welcome to the Expenses Page</h1>
      <ul className="mt-4 space-y-4">
        <li className="flex items-center justify-between w-full p-4 bg-gray-200 rounded-lg">
          <p className="text-lg font-bold">Rent</p>
          <p className="text-lg font-bold">$1000</p>
        </li>
        <li className="flex items-center justify-between w-full p-4 bg-gray-200 rounded-lg">
          <p className="text-lg font-bold">Utilities</p>
          <p className="text-lg font-bold">$150</p>
        </li>
        <li className="flex items-center justify-between w-full p-4 bg-gray-200 rounded-lg">
          <p className="text-lg font-bold">Groceries</p>
          <p className="text-lg font-bold">$500</p>
        </li>
      </ul>
    </div>
  );
};
export default ExpensesPage;
