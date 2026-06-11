import UserLayout from "../../layouts/UserLayout";

function Profile() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <UserLayout>

      <div className="bg-white rounded-xl shadow p-8 max-w-3xl">

        <h1 className="text-3xl font-bold mb-6">
          Profile
        </h1>

        <div className="space-y-4">

          <div>
            <p className="font-semibold">
              Name
            </p>
            <p>{user?.name}</p>
          </div>

          <div>
            <p className="font-semibold">
              Email
            </p>
            <p>{user?.email}</p>
          </div>

          <div>
            <p className="font-semibold">
              Role
            </p>
            <p>{user?.role}</p>
          </div>

        </div>

      </div>

    </UserLayout>
  );
}

export default Profile;