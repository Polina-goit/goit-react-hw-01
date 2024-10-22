const Profile = ({
    username,
    tag,
    location,
    image,
    stats,
}) => {
    return
    <div>
        <div>
            <img src={image} alt="User image" />
            <p>{username}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>
    </div>
}