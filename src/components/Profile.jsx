function Profile() {
  return (
    <>
      <h1>Profile Card Challenge</h1>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi, alice have a wonderfull day</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>Hello bob, keep up the great work!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
}

export default Profile;

function ProfileCard(props) {
    const {name, age, greeting, children} = props
  return (
    <>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      {greeting}
      <div>{children}</div>
    </>
  );
}
