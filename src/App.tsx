import { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

interface User {
  userId: number;
  name: string;
}

function App() {
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const fetchUsersByName = async (name: string): Promise<User[]> => {
    try {
      const response = await axios.get(
        `http://localhost:5000/users?name_like=${name}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return [];
    }
  };

  const handleSearch = async (searchTerm: string) => {
    if (searchTerm === "") {
      setSearchResults([]);
      return;
    }

    const data = await fetchUsersByName(searchTerm);
    if (data && data.length > 0) {
      setSearchResults(data);
    } else {
      // 검색 결과가 없거나 에러 발생 시 처리
      setSearchResults([]);
    }
  };

  return (
    <div>
      <SearchBar
        onSearch={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && <SearchResults results={searchResults} />}
    </div>
  );
}

export default App;
