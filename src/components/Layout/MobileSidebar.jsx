import { useGetSidebarData } from "../../lib/queries";
import LoadingSpinner from "../common/LoadingSpinner";
import { NavLink } from "react-router-dom";
import { MobileCloseIcon } from "../common/Icons";
import { formatTitle } from "../../utils/utils";

const MobileSidebar = ({ isOpen, onClose }) => {
  const { data: sidebarData, isLoading } = useGetSidebarData();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`mobile-sidebar ${isOpen ? "active" : ""}`}>
      <button
        className="mobile-sidebar__close"
        onClick={onClose}
        aria-label="메뉴 닫기"
      >
        <MobileCloseIcon />
      </button>

      <nav className="mobile-sidebar__menu">
        <ul className="sidebar__menu">
          {/* component 제외하고 렌더링 */}
          {sidebarData
            ?.filter((category) => category.slug !== "component")
            .map((category) => (
              <li key={category.slug} className="sidebar__item">
                <NavLink
                  to={`/group/${category.slug}`}
                  className={({ isActive }) =>
                    `sidebar__link ${isActive ? "active" : ""}`
                  }
                  onClick={onClose}
                >
                  {formatTitle(category.slug)}
                </NavLink>
              </li>
            ))}
          {/* Liked 메뉴 추가 */}
          <li className="sidebar__item">
            <NavLink
              to="/liked"
              className={({ isActive }) =>
                `sidebar__link ${isActive ? "active" : ""}`
              }
              onClick={onClose}
            >
              Liked
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileSidebar;
