# Online/Offline Status
This code is a JavaScript program that displays a message indicating whether the user is currently online or offline.

## Explain 
The program checks the user's online status when the page loads using the window.navigator.online property, and then displays the appropriate message based on the status.

If the user is online, the program calls the online() function, which updates the title of the page to "Online now", hides the ul list and the reload button, sets the title color to green.

If the user is offline, the program calls the offline() function, which updates the title of the page to "Offline now", shows the ul list and the reload button, sets the title color to black.

The program also listens for changes in the user's online status using the window.addEventListener() method. When the user's status changes, the program calls the appropriate function (online() or offline()) to update the page accordingly.

Finally, the reload button allows the user to manually reload the page, which could be useful if there are connectivity issues or other problems that prevent the page from loading correctly.
