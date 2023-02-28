import LinkItem from './LinkItem';

function LeftBar() {
  return (
    <div className="sidebar">
      <i className="fab fa-twitter"></i>

      <LinkItem icon="home" active>
        Home
      </LinkItem>

      <LinkItem icon="search">Explore</LinkItem>

      <LinkItem icon="notifications_none">Notifications</LinkItem>

      <LinkItem icon="mail_outline">Messages</LinkItem>

      <LinkItem icon="bookmark_border">Bookmarks</LinkItem>

      <LinkItem icon="list_alt">Lists</LinkItem>

      <LinkItem icon="perm_identity">Profile</LinkItem>

      <LinkItem icon="more_horiz">More</LinkItem>

      <button className="sidebar__tweet">Tweet</button>
    </div>
  );
}

export default LeftBar;
