import PlaceList from "../components/PlaceList"

export default function Places() {
    return (
        <PlaceList />
    );
}

export async function fetchPlace() {
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  return data.posts;
}