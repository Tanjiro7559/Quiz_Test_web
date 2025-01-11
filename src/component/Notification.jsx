import React, { useState, useRef, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

const Notification = ({ title, description, time, isOlder }) => {
  const titleColor = isOlder ? "gray" : "green";
  const titleFontWeight = "bold";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
       
      }}
    >
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "16px",
            fontWeight: titleFontWeight,
            color: titleColor,
             border: "1 solid gray",
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: "14px", color: "#888" }}>{description}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <p style={{ fontSize: "12px", color: "#888" }}>{time}</p>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "red",
          }}
          onClick={() => console.log("Delete Notification")}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

const NotificationList = ({ notifications, olderNotifications }) => {
  return (
    <div>
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          title={notification.title}
          description={notification.description}
          time={notification.time}
          isOlder={false}
        />
      ))}
      <hr />
      <p style={{ marginBottom: "8px" }}>Yesterday/Older</p>
      {olderNotifications.map((notification, index) => (
        <Notification
          key={index}
          title={notification.title}
          description={notification.description}
          time={notification.time}
          isOlder={true}
        />
      ))}
    </div>
  );
};

const NotificationComponent = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const panelRef = useRef(null);

  const handleNotificationClick = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  // Close the notification panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsPanelVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notifications = [
    {
      title: "Example title notification 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      time: "14:36",
    },
    {
      title: "Example title notification 2",
      description: "Another example notification text.",
      time: "15:22",
    },
  ];

  const olderNotifications = [
    {
      title: "Older notification 1",
      description: "Sample text for an older notification.",
      time: "Yesterday",
    },
  ];

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IoIosNotificationsOutline
        style={{ width: "34px", height: "34px", cursor: "pointer" }}
        onClick={handleNotificationClick}
      />
      {isPanelVisible && (
        <div
          ref={panelRef}
          className="notification-panel"
          style={{
            position: "absolute",
            top: "99px",
            right: "40px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 100,
            width: "700px",
            borderRadius: "8px",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <text>Notifications</text>
              <div style={{ marginLeft: "auto" }}>
                <button
                  style={{
                    marginRight: "8px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  All
                </button>
                <button
                  style={{
                    marginRight: "8px",
                    backgroundColor: "#ccc",
                    color: "black",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  Unread (2)
                </button>
                <button
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  Mark all as completed
                </button>
              </div>
            </div>
            <div style={{ marginTop: "8px",  marginRight:"77%",fontSize: "14px", color:"gray"}}>
              You've got {notifications.length + olderNotifications.length} Notifications
            </div>
          </div>
          <hr />
          <NotificationList
            notifications={notifications}
            olderNotifications={olderNotifications}
          />
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;
