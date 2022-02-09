import React from "react";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center bg-gray-100 h-screen">
        {children}
      </main>
    </div>
  );
};
