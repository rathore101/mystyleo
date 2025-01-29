import React from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import { useRouter } from "next/navigation";

function SearchInput() {
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <div className=" w-full">
      <form
        className=" flex justify-between items-center w-full p-1 border dark:bg-dark-secondHO rounded-md border-[#d9dcdf]"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="name"
          placeholder="search...."
          className=" px-2 w-full bg-transparent outline-none text-black dark:text-dark-four "
        />
        <button className=" dark:text-dark-four">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
