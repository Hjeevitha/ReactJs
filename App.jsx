// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './Layout'
// import AddStudent from './AddStudent'
// import ViewAll from './ViewAll'
// import ViewSingleStudent from './ViewSingleStudent'
// import Updatestudent from './Updatestudent'
// import Errorpage from './Errorpage'
// import Toaster from "react-hot-toast"

// v5
// const App = () => {
//   return (
//     <>
//    <div><Toaster/></div>
//     <BrowserRouter>
//     <Routes>
//      <Route path='/' element={<Layout/>}>
//       <Route index element={<AddStudent/>}/>
//       <Route path="/viewall" element={<ViewAll/>}/>
//       {/* here it is dynamic routing becuse based on id path will change, slug: here extra info given to url */}
//       <Route path="/viewsingle/:id" element={<ViewSingleStudent/>}/>
//       <Route path="/edit/:id" element={<Updatestudent/>}/>
//       <Route path='*' element={<Errorpage/>}/>
//      </Route>
//     </Routes>
//     </BrowserRouter>
    
//     </>
//   )
// }

// export default App

// to add tost: https://react-hot-toast.com/  , these are library, to add tost we use it, npm install add react-hot-toast
// then import it classes paste after navigate:   toast.success('Successfully updated!')

// Icons: react provided  icons in form components ,it is one separate library, go to https://www.npmjs.com/package/react-icons,  1. npm add react-icons Dec
// then go to another website: https://react-icons.github.io/react-icons/ a.serch bar: type the name and coose
// to use we should import it thses icons are components

// create a logo by own by one website:https://www.wix.com/logo/maker
// 1.go to logo, create a logo ,skip the question, next, modern next: Crud (own content on logo) next,give tagline and done
// change or lev next, just want logo, download sample

// to change te reactjs logo : go to the website:https://favicon.io/,  text to icon , download it , extaxt photo and paste in public folder
// go to index.html ,


// v6
import React from 'react'
import Layout from './Layout'
import AddStudent from './AddStudent'
import ViewAll from './ViewAll'
import ViewSingleStudent from './ViewSingleStudent'
import Updatestudent from './Updatestudent'
import Errorpage from './Errorpage'
import Toaster from "react-hot-toast"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

let r=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<AddStudent/>
      },
      {
        path:"/viewall",
        element:<ViewAll/>
      },
      {
        path:"/viewsingle/:id",
        element:<ViewSingleStudent/>
      },
      {
        path:"/edit/:id",
        element:<Updatestudent/>
      },{
        path:"*",
        element:<Errorpage/>
      }
    ]
  }
])

const App = () => {
  return (
   <>
   <div><Toaster/></div>
   <RouterProvider router={r}></RouterProvider>
   </>
  )
}

export default App