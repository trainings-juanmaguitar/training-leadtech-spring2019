import React from "react";

export const messages = ["React", "You've won the lottery", "Buy Milk"];

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 && 
          <div>
            <h2>
              You have {unreadMessages.length} unread messages.
            </h2>
            <ul>
              {
                unreadMessages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))
              }
            </ul>
          </div> 
        }
      </div>
    );
  }

export default Mailbox