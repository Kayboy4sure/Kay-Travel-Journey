import HeaderContent from "./components/header"
import BodyContent from "./components/body"
import ContactContent from "./components/contact"
import data from "./data/journeydata"

export default function App() {
  console.log(data);
  const newdata = data.map(item => {
    return (<BodyContent
      key={item.id}
      {...item}
    />)
  })
  console.log(newdata)
  return (
    <>
      <HeaderContent />
      {newdata}
    </>
  )
}

// export default function App() {
//   const hour = 24 || new Date().getHours();
//   let time;
//   if (hour < 12){
//     time = 'Morning';
//   } else if (hour < 17){
//     time = 'Afternoon';
//   } else if (hour < 21){
//     time = 'Evening';
//   } else {
//     time = 'Night';
//   }
//   return(
//     <h1>Good{time}</h1>
//   )
// }

// export default function App() {
//   const cat = {
//     image: '/src/assets/felix.png',
//     name : 'Felix',
//     phoneno: '(212) 555-1234',
//     email: 'mr.whiskaz@catnap.meow',
//   }
//   // const {image, name,phoneno,email} = cat;
//   return (
//     <>
//     <ContactContent
//       image = {cat.image}
//       name = {cat.name}
//       phoneno = {cat.phoneno}
//       email = {cat.email}
//     />
//     <ContactContent
//       image = '/src/assets/mr-whisker.png'
//       name = 'Mr Whisker'
//       phoneno ='(212) 555-1234'
//       email = 'mr.whiskaz@catnap.meow'
//     />
//     </>
//   )
// }
