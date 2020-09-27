# Simple-Fiverr-New-Buyer-Request-Notification

Simple Fiverr New Buyer Request Notification is a chrome extension which will automatically enables on fiverr.com/user/your_username/requests page and notify about new buyer request.

How it works:

It is saving data-count attr from active offers in the session on first load and after every 10 minutes, refresh the page and compare the new data-count from page with stored data-count and show notification. If it is same "no new offer" notification will show and if it is changed then "there might be new offer" will show.
