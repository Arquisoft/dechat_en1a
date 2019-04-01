Feature: Send a message
  A user should be able to send a desired message

Scenario Outline: The message shows on the feed
  Given message text is "<text>"
  When send button is pressed
  Then message should appear on the feed containing the text "<text>"

  Examples:
    | text |
    | test text |

Scenario Outline: The message should not be sent if the message is empty
  Given message text is empty
  When send button is pressed
  Then no message should be added to the feed
  Examples:
    |  |

