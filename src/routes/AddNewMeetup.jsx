import { Form, redirect } from "react-router-dom"

import styles from "./AddNewMeetup.module.css"

export default function AddNewMeetup() {
  return (
    <>
      <h2>Add New Meetup Form</h2>
      <div className={styles.container}>
        <div className={styles.card}>
          <Form method="POST">
            <label htmlFor="author">Your Name</label>
            <input
              className={styles.author}
              id="author"
              name="author"
              required
            />

            <label htmlFor="body">Your Description</label>
            <textarea className={styles.body} id="body" name="body" required />

            <button className={styles.button}>Submit</button>
          </Form>
        </div>
      </div>
    </>
  );
}

export async function postNewPlace({ request }) {
  const formData = await request.formData()
  console.log(formData)
  const data = Object.fromEntries(formData)

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })

  return redirect("/")
}