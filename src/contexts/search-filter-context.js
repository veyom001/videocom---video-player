import { createContext, useContext, useState } from "react";

const searchFilterContext = createContext(null);

const SearchFilterProvider = ({ children }) => {
  const [filterState, setFilterState] = useState("");
  return (
    <searchFilterContext.Provider value={{ filterState, setFilterState }}>
      {children}
    </searchFilterContext.Provider>
  );
};

const useSearchFilter = () => useContext(searchFilterContext);

export { SearchFilterProvider, useSearchFilter };
