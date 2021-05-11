import Profile from './profile/profile.js'

function App() {
  let profile=[{
    Name:'Imen',
    bio:`My name is Imen Joubeli and I am a full-stack Web
     Application Developer and Software Developer, currently living in Tunisia. 
     I have a Bachelor degree in Computer Science from the higher institute of 
     economical and commercial science of tunis, and a master degree in Data Science for Business.
     My primary focus and inspiration for my studies is Web Development`,
     profession:'Full-Stack-Web developer',
}]
  return (
    <div>
      <Profile profile={profile}>
      <h2>hello word</h2>
      <p>Hi ...</p>
      </Profile>
    </div>
  );
}

export default App;
