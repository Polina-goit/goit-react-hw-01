import PropTypes from "prop-types";
import css from "./Profile.module.css"
const Profile = ({
    username,
    tag,
    location,
    image,
    stats: { followers, views, likes },
}) => {
    return (
        <div className={css.wrapper}>
            <div className={css.card}>
                <img src={image} alt="User avatar" className={css.avatar} />
                <p className={css.userName}>{username}</p>
                <p className={css.userinfo}>&#64;{tag}</p>
                <p className={css.userinfo}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statsItem}>
                    <span className={css.statsItemLabel}>Followers</span>
                    <span className={css.statsItemQuantity}>{followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.statsItemLabel}>Viewes</span>
                    <span className={css.statsItemQuantity}>{views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.statsItemLabel}>Likes</span>
                    <span className={css.statsItemQuantity}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
  };

export default Profile;