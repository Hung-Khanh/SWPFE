import { useState } from "react";
import { ProfileAside } from "./ProfileAside/ProfileAside";
import { ProfileOrders } from "./ProfileOrders/ProfileOrders";
import { ProfileMyInfo } from "./ProfileMyInfo/ProfileMyInfo"; // Import the new component

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("myInfo"); // Default to myInfo tab

  return (
    <>
      {/* <!-- BEGIN PROFILE --> */}
      <div className="profile">
        <div className="wrapper">
          <div className="profile-content">
            <ProfileAside />
            <div className="profile-main">
              <div className="tab-wrap">
                <ul className="nav-tab-list tabs">
                  <li
                    onClick={() => setActiveTab("myInfo")}
                    className={activeTab === "myInfo" ? "active" : ""}
                  >
                    My info
                  </li>
                  <li
                    onClick={() => setActiveTab("orders")}
                    className={activeTab === "orders" ? "active" : ""}
                  >
                    My orders
                  </li>
                  <li
                    onClick={() => setActiveTab("wishList")}
                    className={activeTab === "wishList" ? "active" : ""}
                  >
                    Wishlist
                  </li>
                </ul>

                <div className="box-tab-cont">
                  {activeTab === "myInfo" && <ProfileMyInfo />}{" "}
                  {/* Render ProfileMyInfo */}
                  {activeTab === "orders" && <ProfileOrders />}
                  {activeTab === "wishList" && (
                    <div className="tab-cont" id="profile-tab_3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque tempore saepe blanditiis omnis. Reprehenderit
                      officia atque facere tempora, neque quaerat et aliquid
                      tempore mollitia, nemo, minima iste placeat cupiditate
                      odio?
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="promo-video__decor js-img"
          src="/assets/img/promo-video__decor.jpg"
          alt=""
        />
      </div>
      {/* <!-- PROFILE EOF   --> */}
    </>
  );
};
