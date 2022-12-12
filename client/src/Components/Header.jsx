import React from "react";

function Header() {
  return (
    <div>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-6 rounded dark:bg-green-500">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Yoga Classes
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
