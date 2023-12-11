import styled from "styled-components";

function SearchBar({
  onSearch,
  onFocus,
  onBlur,
}: {
  onSearch: (searchTerm: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}) {
  const handleSearch = (e: { target: { value: string } }) => {
    onSearch(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // 라우터 이동 처리
  };

  return (
    <Topbar>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleSearch}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Enter ID to search"
        />
        <button type="submit">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
    </Topbar>
  );
}

const Topbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: #662df4;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding-left: 0.5rem;
    border-radius: 0.25rem;
    input {
      padding: 0.5rem;
      width: 300px;
      border: none;
      border-radius: 0.25rem;
      margin-right: 0.5rem;
      background-color: #fff;
      color: #662df4;
    }
    button {
      padding: 0.5rem;
      border: none;
      border-radius: 0.25rem;
      background-color: #fff;
      color: #662df4;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export default SearchBar;
