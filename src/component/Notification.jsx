import React, { useState, useRef, useEffect } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaAngleRight } from 'react-icons/fa';

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
            <text>
            Notifications
            
            </text>
            <button
              style={{
                marginRight: "8px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                padding: "8px",
                cursor: "pointer",
                marginLeft:"40%",
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
          <hr />
          <div>
            <p style={{ marginBottom: "8px" }}>You've got {notifications.length + olderNotifications.length} Notifications</p>
            {notifications.map((notification, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "green",
                    }}
                  >
                    {notification.title}
                  </p>
                  <p style={{ fontSize: "14px", color: "#888" }}>
                    {notification.description}
                  </p>
                  <p style={{ fontSize: "12px", color: "#888" }}>{notification.time}</p>
                </div>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "red",
                  }}
                >
                  &#x1F5D1;
                </button>
              </div>
            ))}
            <hr />
            <p style={{ marginBottom: "8px" }}>Yesterday/Older</p>
            {olderNotifications.map((notification, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "gray",
                    }}
                  >
                    {notification.title}
                  </p>
                  <p style={{ fontSize: "14px", color: "#888" }}>
                    {notification.description}
                  </p>
                  <p style={{ fontSize: "12px", color: "#888" }}>{notification.time}</p>
                </div>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "red",
                  }}
                >
                  &#x1F5D1;
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;
