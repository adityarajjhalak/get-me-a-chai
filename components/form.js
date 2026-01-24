export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4
      bg-[#020617]
      bg-[radial-gradient(circle_at_1px_1px,#1e293b_1px,transparent_0)]
      [background-size:20px_20px]">

      <div className="w-full max-w-3xl text-white">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to your Dashboard
        </h1>

        <div className="space-y-4">
          {[
            "Name",
            "Email",
            "Username",
            "Profile Picture",
            "Cover Picture",
            "Razorpay Id",
            "Razorpay Secret",
          ].map((label) => (
            <div key={label}>
              <label className="block mb-1 text-sm">{label}</label>
              <input
                type="text"
                placeholder={label}
                className="w-full px-4 py-2 rounded-md 
                  bg-gray-800 border border-gray-700 
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 py-2 rounded-md font-semibold transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}