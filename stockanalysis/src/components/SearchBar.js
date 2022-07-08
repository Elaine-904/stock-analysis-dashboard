function SearchBar() {
    return (
        <>
            <input type="text" placeholder="Search for news..."
                class="border-2 ml-64 border-gray-700 w-2/5 mt-10 py-3 px-4"></input>
            <button class="bg-blue-700 text-xl hover:bg-blue-500 text-white py-2 px-3">Search</button>
        </>
    )
}

export default SearchBar;