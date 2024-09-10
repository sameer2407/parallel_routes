// make a fkae page for prime cutemers

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA 12345",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "098-765-4321",
    address: "456 Elm St, Othertown, USA 67890",
  },
];

const PrimePage = () => {
  return (
    <div className="bg-white  flex flex-col items-center justify-center border-red-500 border-2">
      <h1 className="text-1xl font-bold ">Welcome to the Prime Page</h1>
      <ul className="mt-4 space-y-4">
        {customers.map((customer) => (
          <li key={customer.id}>
            <div className="flex items-center justify-between w-full p-4 bg-gray-200 rounded-lg">
              <p className="text-lg font-bold">{customer.name}</p>
              <p className="text-lg font-bold">{customer.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrimePage;
