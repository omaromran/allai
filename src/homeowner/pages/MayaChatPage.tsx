import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MAYA_INITIAL_MESSAGES,
  MAYA_QUICK_REPLIES,
  type MayaChatMessage,
} from "../data";
import {
  IconChevronLeft,
  IconMic,
  IconMore,
  IconPaperclip,
  IconPlay,
  IconPlus,
  IconSend,
} from "../icons";

const MAYA_AVATAR = "/images/v2/maya-avatar.jpg";
const LEAK_IMG = "/images/v2/how-report-issue.jpg";

function MayaBubble({ message }: { message: MayaChatMessage }) {
  return (
    <div className="ho-chat-bubble ho-chat-bubble--maya">
      <img className="ho-chat-bubble__avatar" src={MAYA_AVATAR} alt="" />
      <div className="ho-chat-bubble__body">
        <span className="ho-chat-bubble__name">Maya</span>
        <p className="ho-chat-bubble__text">{message.text}</p>
        <time className="ho-chat-bubble__time" dateTime={message.time}>
          {message.time}
        </time>
      </div>
    </div>
  );
}

function UserBubble({ message }: { message: MayaChatMessage }) {
  return (
    <div className="ho-chat-bubble ho-chat-bubble--user">
      <div className="ho-chat-bubble__body">
        <p className="ho-chat-bubble__text">{message.text}</p>
        <time className="ho-chat-bubble__time" dateTime={message.time}>
          {message.time}
        </time>
      </div>
    </div>
  );
}

export default function MayaChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<MayaChatMessage[]>(MAYA_INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [showTriageExtras, setShowTriageExtras] = useState(true);
  const [selectedReply, setSelectedReply] = useState<string | null>(null);

  const sendUserMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: "user", text: trimmed, time },
    ]);
    setInput("");
    setShowTriageExtras(false);

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `m-${Date.now()}`,
          role: "maya",
          text: "Thanks—that helps. Where is the leak coming from?",
          time: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
        },
      ]);
    }, 600);
  };

  const handleQuickReply = (reply: string) => {
    setSelectedReply(reply);
    sendUserMessage(reply);
    setShowTriageExtras(false);
    window.setTimeout(() => navigate("/app/request-created"), 900);
  };

  return (
    <div className="ho-chat-page">
      <header className="ho-chat-header">
        <div className="ho-chat-header__title">
          <h1>Chat with Maya</h1>
          <p>Your AI maintenance concierge</p>
        </div>
        <div className="ho-chat-header__actions">
          <button type="button" className="ho-btn ho-btn--outline ho-btn--sm ho-btn--new-request">
            <IconPlus size={16} />
            New request
          </button>
          <button type="button" className="ho-topbar__icon-btn" aria-label="More options">
            <IconMore size={20} />
          </button>
        </div>
      </header>

      <Link to="/app" className="ho-chat-back">
        <IconChevronLeft size={16} />
        Back
      </Link>

      <div className="ho-chat-window">
        <div className="ho-chat-thread">
          {messages.map((msg) =>
            msg.role === "maya" ? (
              <MayaBubble key={msg.id} message={msg} />
            ) : (
              <UserBubble key={msg.id} message={msg} />
            ),
          )}

          {showTriageExtras ? (
            <>
              <div className="ho-chat-media">
                <div className="ho-chat-media__row">
                  <figure>
                    <img src={LEAK_IMG} alt="Under-sink plumbing" />
                  </figure>
                  <figure>
                    <img src={LEAK_IMG} alt="Leak at pipe connection" />
                  </figure>
                  <figure className="ho-chat-media__video">
                    <img src={LEAK_IMG} alt="" />
                    <span className="ho-chat-media__play" aria-hidden>
                      <IconPlay size={18} />
                    </span>
                    <span className="ho-chat-media__duration">0:15</span>
                  </figure>
                  <button type="button" className="ho-chat-media__add">
                    <IconPlus size={18} />
                    <span>Add more</span>
                  </button>
                </div>
              </div>

              <div className="ho-quick-replies" role="group" aria-label="Quick replies">
                {MAYA_QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    className={`ho-quick-reply${selectedReply === reply ? " ho-quick-reply--active" : ""}`}
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="ho-chat-footer">
          <form
            className="ho-chat-compose"
            onSubmit={(e) => {
              e.preventDefault();
              sendUserMessage(input);
            }}
          >
            <div className="ho-chat-compose__field">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                aria-label="Message"
              />
              <div className="ho-chat-compose__tools">
                <button type="button" className="ho-compose-btn" aria-label="Attach file">
                  <IconPaperclip size={18} />
                </button>
                <button type="button" className="ho-compose-btn" aria-label="Voice input">
                  <IconMic size={18} />
                </button>
              </div>
            </div>
            <button type="submit" className="ho-compose-send" aria-label="Send message">
              <IconSend size={18} />
            </button>
          </form>
          <p className="ho-chat-disclaimer">
            Maya uses AI to help you. Always follow safety guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
