//make a layout
const DashboardLayout = ({ children, balance, expenses, profit, customer }) => {
  return (
    <div className=" flex felx-col">
      {children}
      <div className="flex">
        {balance}
        {expenses}
        {profit}
      </div>
      <div>{customer}</div>
    </div>
  );
};
export default DashboardLayout;
