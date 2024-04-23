
import { RouterProvider } from 'react-router-dom'
import { router } from './route'

export function App() {
  // function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault()

  // }
  return (
    <RouterProvider router={router} />
  )
}
