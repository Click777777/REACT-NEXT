import React from "react";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
              Todo App
            </h1>

            <p className="mt-6 text-sm capitalize tracking-wider leading-relaxed text-gray-500 dark:text-gray-400">
              Effortlessly manage your tasks and stay organized with our sleek
              and intuitive To-Do app.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
