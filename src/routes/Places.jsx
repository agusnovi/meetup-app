import { useLoaderData } from "react-router-dom"

import PlaceList from "../components/PlaceList"

export default function Places() {
  const list = useLoaderData();
  
    return (
      <PlaceList list={list} />
    );
}

export async function fetchPlace() {
  const response = await fetch('http://localhost:8080/posts');
  const data = await response.json();
  return data.posts;
}