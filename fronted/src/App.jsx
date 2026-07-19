import './App.css'
import Card from "./components/Card";

const App = () => {

  const users = [
  {
    name: "John Smith",
    username: "johnsmith",
    jobRole: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Emma Johnson",
    username: "emmaj",
    jobRole: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Michael Brown",
    username: "mikeb",
    jobRole: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sophia Davis",
    username: "sophiad",
    jobRole: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Daniel Wilson",
    username: "danielw",
    jobRole: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Olivia Martinez",
    username: "oliviam",
    jobRole: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "James Anderson",
    username: "jamesa",
    jobRole: "Mobile Developer",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Ava Thomas",
    username: "avathomas",
    jobRole: "QA Engineer",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "William Taylor",
    username: "willt",
    jobRole: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Isabella Moore",
    username: "isabellam",
    jobRole: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];

  return (
    <div className='container'>
      {users.map(function (elem) {
        return (
          <Card 
          img={elem.image}
          name={elem.name} 
          username={elem.username} 
          jobRole={elem.jobRole}
        />
        )
      })}
    </div>
  )

}

export default App