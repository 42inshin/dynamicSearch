import styled from "styled-components";

interface Users {
  userId: number;
  name: string;
}

function SearchResults({ results }: { results: Users[] }) {
  return (
    <>
      {results.length > 0 && (
        <SearchList>
          {results.map((user) => (
            <div key={user.userId}>
              <span>{user.userId}</span>
              <span>{user.name}</span>
            </div>
          ))}
        </SearchList>
      )}
    </>
  );
}

const SearchList = styled.div`
  margin-top: 5rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  box-sizing: border-box;

  div {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    width: 300px;
    transition: all 0.2s ease;
    span {
      margin-left: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  div:hover {
    background-color: #662df4;
    color: #fff;
  }
`;

export default SearchResults;
