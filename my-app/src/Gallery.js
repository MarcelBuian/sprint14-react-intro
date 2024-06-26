import Profile from "./Profile";
import ProfileB from "./ProfileB";

export default function Gallery() {
    return (
        <section>
            <h1>Amazing animals</h1>
            {/* This is only a simple tag, not a component! */}
            <profile name="profile" />

            <Profile name="Unul" />

            <Profile name="Doi" />
            <Profile
                name="Trei"
            >
            </Profile>

            <Profile />


            <ProfileB name="B_Unul" />
            <ProfileB name="B_Doi" />
        </section>
    );
}