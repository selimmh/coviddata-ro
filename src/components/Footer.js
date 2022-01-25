import React from "react";
import Data from "../data/data";

function Footer() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center p-5 bg-gray-100 dark:bg-gray-800">
        <ul className="flex-row space-x-4 md:space-x-16 text-sm">
          <a href="https://selimmh.me" target="blank">
            <button>{Data.footer.copyright}</button>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
