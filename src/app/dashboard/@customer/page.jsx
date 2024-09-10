import Link from "next/link";

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

const CustomerPage = () => {
  return (
    <Link href={"/dashboard/prime"}>
      <div className="bg-white  flex flex-col items-center justify-center">
        <h1 className="text-1xl font-bold ">Welcome to the Customer Page</h1>
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">{customer.phone}</td>
                <td className="px-4 py-2">{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Link>
  );
};

export default CustomerPage;
