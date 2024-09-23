import { useEffect, useState } from "react";
import { getCollection } from "astro:content";

const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [latestEvent, setLatestEvent] = useState(null);

  useEffect(() => {
    const fetchLatestEvent = async () => {
      const events = await getCollection("events");
      const sortedEvents = events.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
      setLatestEvent(sortedEvents[0]);
    };

    fetchLatestEvent();

    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (hasSeenPopup === "true") {
      setShowPopup(false);
    } else {
      const timeout = setTimeout(() => {
        setShowPopup(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem("hasSeenPopup", "true");
  };

  if (!latestEvent) {
    return null; // or a loading spinner
  }

  return (
    <>
      {showPopup && (
        <div id="popup" className="popup">
          <div className="popup__content">
            <span className="popup__close" onClick={handleClosePopup}>
              &times;
            </span>
            <h3 className="text-center">{latestEvent.data.title}</h3>
            <a href={`/events/${latestEvent.slug}`}>
              <img
                className="popup__image w-full"
                src={latestEvent.data.image}
                alt={latestEvent.data.title}
              />
            </a>
            <div className="flex justify-center">
              <a
                target="_blank"
                href={latestEvent.data.url}
                className="mt-3 text-center text-xl text-blue-500 hover:text-blue-800 ease-linear"
              >
                Non perderti la Live di questa sera!
              </a>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          /* Stile del popup */
          .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #ffffffea;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 1000; /* Assicura che il popup sia sopra tutti gli altri elementi */
            max-width: 700px; /* Set a maximum width for larger screens */
            width: 90vw; /* Use viewport width for responsiveness */
          }

          /* Stile del pulsante di chiusura */
          .popup__close {
            position: absolute;
            top: -5px;
            right: 10px;
            cursor: pointer;
            font-size: 45px;
          }

          /* Stile dell'immagine responsive */
          .popup__image {
            max-width: 100%; /* Ensure image scales down on smaller screens */
            height: auto; /* Maintain image aspect ratio */
          }
        `}
      </style>
    </>
  );
};

export default PopUp;
