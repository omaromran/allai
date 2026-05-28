import { IconBell } from "../icons";

const AVATAR = "/images/v2/maya-avatar.jpg";

export function HomeownerTopbar() {
  return (
    <header className="ho-topbar">
      <div className="ho-topbar__actions">
        <button type="button" className="ho-topbar__icon-btn ho-topbar__icon-btn--notify" aria-label="Notifications">
          <IconBell size={20} />
        </button>
        <button type="button" className="ho-topbar__avatar" aria-label="Open profile">
          <img src={AVATAR} alt="" />
        </button>
      </div>
    </header>
  );
}
